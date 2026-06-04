// // app/api/jobs/route.js

// import { NextResponse } from "next/server";
// import { fetchJobs } from "@/lib/odoo";

// const LIMIT = 10;

// export async function GET(req) {
//   try {
//     const offset = parseInt(req.nextUrl.searchParams.get("offset") ?? "0", 10);
//     const limit = parseInt(
//       req.nextUrl.searchParams.get("limit") ?? String(LIMIT),
//       10,
//     );

//     const jobs = await fetchJobs(offset, limit);
//     return NextResponse.json({ jobs, hasMore: jobs.length === limit });
//   } catch (err) {
//     const message = err instanceof Error ? err.message : "Unknown error";
//     console.error("[GET /api/jobs]", message);
//     return NextResponse.json({ error: message }, { status: 500 });
//   }
// }

import { fetchJobs } from "@/lib/odoo";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const offset = Number(searchParams.get("offset") ?? 0);
  const limit = Number(searchParams.get("limit") ?? 10);

  const filters = {
    departmentId: searchParams.get("departmentId") ?? "",
    roleType: searchParams.get("roleType") ?? "",
    search: searchParams.get("search") ?? "",
  };

  try {
    const jobs = await fetchJobs(offset, limit, filters);
    return NextResponse.json({ jobs, hasMore: jobs.length === limit });
  } catch (err) {
    return NextResponse.json(
      { error: err.message ?? "Failed to fetch jobs" },
      { status: 500 },
    );
  }
}
