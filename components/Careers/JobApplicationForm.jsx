"use client";

import { useState, useRef } from "react";
import { useFormik } from "formik";
import Field from "./Field";
import inputClass from "@/lib/inputClass";
import ApplicationSuccess from "./ApplicationSuccess";
import { validationSchema } from "../../validation/jobApplicationFormValidation";
import JobDetails from "./JobDetails";
import formatCNIC from "@/lib/formatCNIC";
import Error from "./Error";
import FormHeader from "./FormHeader";
import ApplicationPageHeader from "./ApplicationPageHeader";
import PhoneNumberField from "../Common/PhoneNumberField";
import { PhoneInput, parseCountry } from "react-international-phone";
import "react-international-phone/style.css";

export default function JobApplicationForm({ job }) {
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileRef = useRef(null);

  const dept = Array.isArray(job.department_id) ? job.department_id[1] : null;
  const location = Array.isArray(job.address_id) ? job.address_id[1] : null;

  const formik = useFormik({
    initialValues: {
      partner_name: "",
      email_from: "",
      partner_phone: "",
      linkedin_profile: "",
      resume: null,
      applicant_notes: "",
      cnic: "",
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
      <ApplicationPageHeader jobId={job?.id} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto pb-16 pt-8">
        <form
          onSubmit={formik.handleSubmit}
          className="lg:col-span-2 space-y-6"
        >
          <FormHeader />

          {serverError && <Error serverError={serverError} />}

          <Field
            label="Full Name"
            required
            error={
              formik.touched.partner_name ? formik.errors.partner_name : ""
            }
          >
            <input
              name="partner_name"
              type="text"
              placeholder="Muhammad Ali"
              onChange={formik.handleChange}
              value={formik.values.partner_name}
              className={`${inputClass(!!formik.errors.partner_name)} text-black focus:outline-[#f40e00]`}
            />
          </Field>

          <Field
            label="Email Address"
            required
            error={formik.touched.email_from ? formik.errors.email_from : ""}
          >
            <input
              name="email_from"
              type="email"
              placeholder="ali@example.com"
              onChange={formik.handleChange}
              value={formik.values.email_from}
              className={`${inputClass(!!formik.errors.email_from)} focus:outline-[#f40e00]`}
            />
          </Field>

          <Field
            label="Phone Number"
            required
            error={
              formik.touched.partner_phone ? formik.errors.partner_phone : ""
            }
          >
            <PhoneInput
              defaultCountry="pk"
              value={formik.values.partner_phone}
              onChange={(phone) => formik.setFieldValue("partner_phone", phone)}
              onBlur={() => formik.setFieldTouched("partner_phone", true)}
              placeholder="Your phone number"
              inputProps={{ id: "partner_phone", name: "partner_phone" }}
              countrySelectorStyleProps={{
                buttonStyle: {
                  backgroundColor: "rgb(249 250 251)",
                  border: "1px solid rgb(209 213 219)",
                  borderRight: "none",
                  borderRadius: "0.5rem 0 0 0.5rem",
                  padding: "0 10px",
                  height: "100%",
                },
                dropdownStyleProps: {
                  style: {
                    zIndex: 9999,
                  },
                  // ✅ Fix #2: Show flag + country name in dropdown
                  renderItem: ({ country }) => {
                    const { name, iso2, dialCode } = parseCountry(country);
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "6px 12px",
                        }}
                      >
                        <img
                          src={`https://flagcdn.com/24x18/${iso2}.png`}
                          alt={name}
                          style={{
                            width: 24,
                            height: 18,
                            objectFit: "cover",
                            borderRadius: 2,
                          }}
                        />
                        <span style={{ fontSize: "0.875rem", color: "#111" }}>
                          {name}
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "#6b7280",
                            marginLeft: "auto",
                          }}
                        >
                          +{dialCode}
                        </span>
                      </div>
                    );
                  },
                },
              }}
              inputStyle={{
                width: "100%",
                height: "50px",
                backgroundColor: "rgb(249 250 251)",
                border: "1px solid rgb(209 213 219)",
                borderLeft: "none",
                borderRadius: "0 0.5rem 0.5rem 0",
                color: "black",
                fontSize: "0.875rem",
                padding: "0.975rem",
                outline: "none",
                boxShadow: "none",
                opacity: 1,
              }}
              style={{
                width: "100%",
                opacity: 1,
              }}
              // ✅ Fix #1: Enforce max digits per country
              disableDialCodeAndPrefix={false}
              showDisabledDialCodeAndPrefix={true}
            />

            {/* {formik.touched.partner_phone && formik.errors.partner_phone && (
              <div className="text-red-500 text-sm">
                {formik.errors.partner_phone}
              </div>
            )} */}
          </Field>

          <Field
            label="CNIC"
            required
            error={formik.touched.cnic ? formik.errors.cnic : ""}
          >
            <input
              name="cnic"
              type="text"
              placeholder="00000-0000000-0"
              value={formik.values.cnic}
              onChange={(e) => {
                const formatted = formatCNIC(e.target.value);
                formik.setFieldValue("cnic", formatted);
              }}
              className={`${inputClass(!!formik.errors.cnic)} focus:outline-[#f40e00]`}
            />
          </Field>

          <Field
            label="LinkedIn Profile URL"
            hint=""
            required
            error={
              formik.touched.linkedin_profile
                ? formik.errors.linkedin_profile
                : ""
            }
          >
            <input
              name="linkedin_profile"
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
              onChange={formik.handleChange}
              value={formik.values.linkedin_profile}
              className={`${inputClass(!!formik.errors.linkedin_profile)} focus:outline-[#f40e00]`}
            />
          </Field>

          <Field
            label="Resume / CV"
            error={formik.touched.resume ? formik.errors.resume : ""}
            required
            hint="PDF only — max 5 MB."
          >
            <div
              onClick={() => fileRef.current?.click()}
              className="w-full flex items-center justify-between rounded-lg border border-white/10 bg-gray-50 px-4 py-3 text-sm cursor-pointer focus-within:border-[#F40E00] transition-colors duration-200"
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
                  <span className="text-gray-400 text-sm lg:text-base">
                    Upload your resume
                  </span>
                )}
              </div>

              {/* Right: Action text */}
              <span className="text-xs text-gray-500">Browse</span>
            </div>

            <input
              ref={fileRef}
              name="resume"
              type="file"
              // accept=".pdf,.doc,.docx"
              accept=".pdf,application/pdf"
              className="hidden"
              // onChange={(e) => {
              //   const file = e.target.files?.[0];
              //   formik.setFieldValue("resume", file);
              //   formik.setFieldTouched("resume", true);
              //   setFileName(file?.name ?? "");
              // }}
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (!file) {
                  formik.setFieldValue("resume", null);
                  return;
                }

                const ext = file.name.toLowerCase().split(".").pop();

                if (file.type !== "application/pdf" && ext !== "pdf") {
                  formik.setFieldValue("resume", null);
                  formik.setFieldError("resume", "Only PDF files are allowed");
                  setFileName("");
                  e.target.value = "";
                  return;
                }

                formik.setFieldValue("resume", file);
                formik.setFieldTouched("resume", true);
                formik.setFieldError("resume", undefined);
                setFileName(file.name);
              }}
            />
          </Field>

          <Field label="Short Introduction" hint="">
            <textarea
              name="applicant_notes"
              rows={5}
              placeholder="Tell us a bit about yourself and why you're a great fit..."
              onChange={formik.handleChange}
              value={formik.values.applicant_notes}
              className={
                inputClass(false) + " resize-none focus:outline-[#f40e00]"
              }
            />
          </Field>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#F40E00] px-5 lg:px-7 py-4 font-bold rounded-xl text-sm lg:text-[18px] 2xl:text-[25px] hover:bg-[#000] text-white transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting…" : "Submit"}
          </button>
        </form>

        {job && <JobDetails dept={dept} location={location} job={job} />}
      </div>
    </div>
  );
}
