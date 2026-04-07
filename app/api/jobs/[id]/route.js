// app/api/jobs/[id]/route.js

import { NextResponse } from "next/server";
import { fetchJobById } from "@/lib/odoo";

export async function GET(_request, { params }) {
  const { id } = await params;

  try {
    const job = await fetchJobById(id);

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ job });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`[GET /api/jobs/${id}]`, message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
