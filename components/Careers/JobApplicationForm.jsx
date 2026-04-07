"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import Field from "./Field";
import inputClass from "@/lib/inputClass";
import ApplicationSuccess from "./ApplicationSuccess";

export default function JobApplicationForm({ job }) {
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileRef = useRef(null);

  const dept = Array.isArray(job.department_id) ? job.department_id[1] : null;
  const location = Array.isArray(job.address_id) ? job.address_id[1] : null;

  const FILE_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const validationSchema = Yup.object({
    partner_name: Yup.string()
      .required("Full name is required")
      .min(3, "Name must contain at least 3 characters.")
      .max(25, "Name can not exceed 25 characters."),

    email_from: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    partner_phone: Yup.string()
      .matches(/^(\+92|0)?3\d{9}$/, "Enter a valid number (e.g. +923001234567)")
      .required("Phone number is required"),

    linkedin_profile: Yup.string()
      .url("Invalid URL")
      .matches(
        /^https?:\/\/(www\.)?linkedin\.com\/.*$/,
        "Enter valid LinkedIn profile URL",
      )
      .required("LinkedIn profile URL is required"),

    resume: Yup.mixed()
      .required("Resume is required")
      .test("fileType", "Only PDF or DOC/DOCX allowed", (file) => {
        if (!file) return false;
        return FILE_TYPES.includes(file.type);
      })
      .test("fileSize", "File too large (max 5MB)", (file) => {
        if (!file) return false;
        return file.size <= MAX_FILE_SIZE;
      }),
  });

  const formik = useFormik({
    initialValues: {
      partner_name: "",
      email_from: "",
      partner_phone: "",
      linkedin_profile: "",
      resume: null,
      applicant_notes: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setServerError("");
      setLoading(true);

      try {
        const form = new FormData();

        Object.entries(values).forEach(([key, value]) => {
          if (value) form.append(key, value);
        });

        form.append("job_id", String(job.id));

        const res = await fetch("/api/jobs/apply", {
          method: "POST",
          body: form,
        });

        const data = await res.json();

        if (!res.ok) {
          setServerError(data.error ?? "Something went wrong.");
        } else {
          setSuccess(true);
        }
      } catch {
        setServerError(
          "Network error. Please check your connection and try again.",
        );
      } finally {
        setLoading(false);
      }
    },
  });

  if (success) {
    return <ApplicationSuccess job={job} />;
  }

  return (
    <div className="w-full padding-x pt-36 2xl:pt-52">
      <div className="w-full mx-auto">
        <Link
          href={`/careers/${job.id}`}
          className="inline-flex items-center gap-1 text-sm text-gray-700 transition-colors duration-200"
        >
          ← View Job Description
        </Link>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pt-8 pb-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black mt-5">
          Apply Now
        </h1>
        <p className="text-gray-600 text-sm mt-4 max-w-md mx-auto">
          Complete the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto px-6 py-16">
        <form
          onSubmit={formik.handleSubmit}
          className="lg:col-span-2 space-y-6"
        >
          <h2 className="text-2xl font-bold text-black mb-2">Your Details</h2>
          <p className="text-gray-500 text-sm mb-6">
            Fields marked with <span className="text-red-500">*</span> are
            required.
          </p>

          {serverError && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {serverError}
            </div>
          )}

          <Field label="Full Name" required error={formik.errors.partner_name}>
            <input
              name="partner_name"
              type="text"
              placeholder="Muhammad Ali"
              onChange={formik.handleChange}
              value={formik.values.partner_name}
              className={`${inputClass(!!formik.errors.partner_name)} text-black`}
            />
          </Field>

          <Field
            label="Email Address"
            required
            error={formik.errors.email_from}
          >
            <input
              name="email_from"
              type="email"
              placeholder="ali@example.com"
              onChange={formik.handleChange}
              value={formik.values.email_from}
              className={inputClass(!!formik.errors.email_from)}
            />
          </Field>

          <Field
            label="Phone Number"
            required
            error={formik.errors.partner_phone}
          >
            <input
              name="partner_phone"
              type="tel"
              placeholder="+92 300 0000000"
              onChange={formik.handleChange}
              value={formik.values.partner_phone}
              className={inputClass(!!formik.errors.partner_phone)}
            />
          </Field>

          <Field
            label="LinkedIn Profile URL"
            hint=""
            error={formik.errors.linkedin_profile}
          >
            <input
              name="linkedin_profile"
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
              onChange={formik.handleChange}
              value={formik.values.linkedin_profile}
              className={inputClass(!!formik.errors.linkedin_profile)}
            />
          </Field>

          <Field
            label="Resume / CV"
            error={formik.errors.resume}
            hint="PDF, DOC or DOCX — max 5 MB."
          >
            <div
              onClick={() => fileRef.current?.click()}
              className="w-full flex items-center justify-between rounded-lg border border-white/10 bg-gray-50 px-4 py-3 text-sm cursor-pointer hover:border-[#F40E00]/60 focus-within:border-[#F40E00] transition-colors duration-200"
            >
              {/* Left: File name or placeholder */}
              <div className="flex items-center gap-2 overflow-hidden">
                {/* Icon */}
                <svg
                  className="w-5 h-5 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828L18 10.828a4 4 0 00-5.656-5.656L6.343 11.172a6 6 0 108.485 8.485L20 14"
                  />
                </svg>

                {fileName ? (
                  <span className="text-black truncate">{fileName}</span>
                ) : (
                  <span className="text-gray-400">Upload your resume</span>
                )}
              </div>

              {/* Right: Action text */}
              <span className="text-xs text-gray-500">Browse</span>
            </div>

            <input
              ref={fileRef}
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                formik.setFieldValue("resume", file);
                setFileName(file?.name ?? "");
              }}
            />
          </Field>

          <Field
            label="Short Introduction"
            hint="Tell us a bit about yourself and why you're a great fit."
          >
            <textarea
              name="applicant_notes"
              rows={5}
              placeholder="I'm a passionate engineer with 3 years of experience…"
              onChange={formik.handleChange}
              value={formik.values.applicant_notes}
              className={inputClass(false) + " resize-none"}
            />
          </Field>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#F40E00] px-5 lg:px-7 py-4 font-bold rounded-xl text-sm lg:text-[18px] 2xl:text-[25px] hover:bg-[#000] text-white transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting…" : "Submit Application →"}
          </button>
        </form>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              You're applying for
            </p>
            <h3 className="text-lg font-semibold text-black mb-4 leading-snug">
              {job.name}
            </h3>

            <div className="space-y-3 text-sm">
              {dept && <p className="text-[0000]">{dept}</p>}
              {location && <p className="text-gray-600">{location}</p>}
              {job.no_of_recruitment > 0 && (
                <p className="text-black">{job.no_of_recruitment} openings</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
