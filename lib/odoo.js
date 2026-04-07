// lib/odoo.js

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

export async function fetchJobs(offset = 0, limit = 10) {
  return odooPost("hr.job", "search_read", {
    domain: [["website_published", "=", true]],
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
