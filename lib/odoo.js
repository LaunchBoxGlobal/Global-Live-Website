const ODOO_BASE_URL = process.env.ODOO_BASE_URL;
const ODOO_API_KEY = process.env.ODOO_API_KEY;
const ODOO_DB_NAME = process.env.ODOO_DB_NAME;

const JOB_FIELDS = [
  "id",
  "name",
  "description",
  // "x_studio_html_job_description",
  "department_id",
  "address_id",
  "no_of_recruitment",
  "expected_degree",
  "salary_min",
  "salary_max",
  "x_studio_shift",
  "x_studio_experience_level",
  "x_studio_job_details",
  "job_details",
  "current_job_skill_ids",
  "x_studio_role_type",
];

function odooHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `bearer ${ODOO_API_KEY}`,
    "X-Odoo-Database": ODOO_DB_NAME,
  };
}

async function odooPost(model, method, body, revalidate = 0) {
  const res = await fetch(`${ODOO_BASE_URL}/json/2/${model}/${method}`, {
    method: "POST",
    headers: odooHeaders(),
    body: JSON.stringify(body),
    next: { revalidate },
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err?.message ?? `Odoo API error: ${res.status}`);
  }

  return res.json();
}

// ─── Jobs ─────────────────────────────────────────────────────────────────────
// export async function fetchJobs(offset = 0, limit = 10) {
//   return odooPost("hr.job", "search_read", {
//     domain: [["website_published", "=", true]],
//     fields: JOB_FIELDS,
//     offset,
//     limit,
//   });
// }
export async function fetchJobs(offset = 0, limit = 10, filters = {}) {
  const domain = [["website_published", "=", true]];

  if (filters.departmentId && filters.departmentId !== "0") {
    domain.push(["department_id", "=", Number(filters.departmentId)]);
  }

  if (filters.roleType && filters.roleType !== "All Types") {
    domain.push(["x_studio_role_type", "=", filters.roleType]);
  }

  if (filters.search && filters.search.trim()) {
    domain.push("|");
    domain.push(["name", "ilike", filters.search.trim()]);
    domain.push(["description", "ilike", filters.search.trim()]);
  }

  return odooPost("hr.job", "search_read", {
    domain,
    fields: JOB_FIELDS,
    offset,
    limit,
  });
}

export async function fetchJobById(id) {
  const jobs = await odooPost("hr.job", "search_read", {
    domain: [["id", "=", Number(id)]],
    fields: JOB_FIELDS,
  });
  return jobs[0] ?? null;
}

// fetch departments
export async function fetchDepartments(offset = 0, limit = 100) {
  return odooPost("hr.department", "search_read", {
    domain: [],
    fields: ["id", "name", "manager_id", "parent_id", "child_ids"],
    offset,
    limit,
  });
}

// ─── Applications ─────────────────────────────────────────────────────────────

export async function createApplicant(data) {
  // Odoo 19 create() takes vals_list (array) and returns an array of IDs
  const ids = await odooPost(
    "hr.applicant",
    "create",
    { vals_list: [data] },
    0,
  );
  return ids[0];
}

export async function attachResume(
  applicantId,
  fileName,
  base64Data,
  mimetype,
) {
  const ids = await odooPost(
    "ir.attachment",
    "create",
    {
      vals_list: [
        {
          name: fileName,
          datas: base64Data,
          res_model: "hr.applicant",
          res_id: applicantId,
          mimetype,
        },
      ],
    },
    0,
  );
  return ids[0];
}
