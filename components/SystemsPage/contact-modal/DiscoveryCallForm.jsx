"use client";
import { useEffect, useRef } from "react";
import "./styles.css";
import { X } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Please enter your name."),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email address.")
    .required("Please enter a valid email address."),
  company: Yup.string(),
  stage: Yup.string().required("Please select your stage."),
  company_website: Yup.string(),
});

export default function DiscoveryCallForm({ onClose }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const stageRef = useRef(null);
  const successRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      stage: "",
      company_website: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      // Honeypot check — if filled, silently succeed without doing anything
      if (values.company_website) {
        setSubmitting(false);
        setStatus("submitted");
        showSuccess();
        return;
      }

      const payload = {
        firstName: values.name.trim(),
        email: values.email.trim(),
        companyName: values.company.trim(),
        stage: values.stage,
        submittedAt: new Date().toISOString(),
      };

      try {
        const res = await fetch("/api/discovery-call", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Request failed");

        setStatus("submitted");
        showSuccess();
      } catch (err) {
        console.error(err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Focus the first invalid field after a failed submit attempt
  useEffect(() => {
    if (formik.submitCount > 0) {
      if (formik.errors.name) nameRef.current?.focus();
      else if (formik.errors.email) emailRef.current?.focus();
      else if (formik.errors.stage) stageRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.submitCount, formik.errors]);

  function showSuccess() {
    setTimeout(() => successRef.current?.focus(), 0);
    // Auto-close the modal 3 seconds after a successful submission
    setTimeout(() => onClose?.(), 3000);
  }

  const submitted = formik.status === "submitted";

  return (
    <div className="lb-form-card">
      {!submitted ? (
        <div id="lb-form-view" className="relative">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-6 h-6 border rounded-md bg-gray-50 flex items-center justify-center absolute -top-1 -right-1 z-10 p-0.5"
          >
            <X className="text-gray-500" />
          </button>
          <span className="lb-form-eyebrow">Free Discovery Call</span>
          <h1 className="lb-form-title">Let&apos;s build your MVP.</h1>
          <p className="lb-form-sub">
            Tell us where you&apos;re at. We&apos;ll email you within 24 hours
            to schedule a no-pressure call.
          </p>

          <form
            id="lb-discovery-form"
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <div className="lb-field">
              <label className="lb-label" htmlFor="lb-name">
                Full name
              </label>
              <input
                ref={nameRef}
                className={`lb-input${
                  formik.submitCount > 0 && formik.errors.name
                    ? " lb-has-error"
                    : ""
                }`}
                type="text"
                id="lb-name"
                name="name"
                placeholder="Your full name"
                autoComplete="name"
                required
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <p
                className={`lb-error-msg${
                  formik.submitCount > 0 && formik.errors.name ? " lb-show" : ""
                }`}
              >
                Please enter your name.
              </p>
            </div>

            <div className="lb-field">
              <label className="lb-label" htmlFor="lb-email">
                Work email
              </label>
              <input
                ref={emailRef}
                className={`lb-input${
                  formik.submitCount > 0 && formik.errors.email
                    ? " lb-has-error"
                    : ""
                }`}
                type="email"
                id="lb-email"
                name="email"
                placeholder="you@company.com"
                autoComplete="email"
                inputMode="email"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <p
                className={`lb-error-msg${
                  formik.submitCount > 0 && formik.errors.email
                    ? " lb-show"
                    : ""
                }`}
              >
                Please enter a valid email address.
              </p>
            </div>

            <div className="lb-field">
              <label className="lb-label" htmlFor="lb-company">
                Startup / company name{" "}
                <span className="lb-optional">(optional)</span>
              </label>
              <input
                className="lb-input"
                type="text"
                id="lb-company"
                name="company"
                placeholder="Company name"
                autoComplete="organization"
                value={formik.values.company}
                onChange={formik.handleChange}
              />
            </div>

            <div className="lb-field">
              <label className="lb-label" htmlFor="lb-stage">
                What stage are you at?
              </label>
              <select
                ref={stageRef}
                className={`lb-select${
                  formik.submitCount > 0 && formik.errors.stage
                    ? " lb-has-error"
                    : ""
                }`}
                id="lb-stage"
                name="stage"
                required
                value={formik.values.stage}
                onChange={formik.handleChange}
              >
                <option value="" disabled>
                  Select your stage
                </option>
                <option value="designs-need-build">
                  Have designs, need a build
                </option>
                <option value="idea-nothing-built">
                  Have an idea, nothing built yet
                </option>
                <option value="stalled-build">
                  Stalled build, need a rescue
                </option>
              </select>
              <p
                className={`lb-error-msg${
                  formik.submitCount > 0 && formik.errors.stage
                    ? " lb-show"
                    : ""
                }`}
              >
                Please select your stage.
              </p>
            </div>

            {/* Honeypot: leave empty. Bots fill it; humans never see it. */}
            <div className="lb-hp" aria-hidden="true">
              <label htmlFor="lb-company-website">Company website</label>
              <input
                type="text"
                id="lb-company-website"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                value={formik.values.company_website}
                onChange={formik.handleChange}
              />
            </div>

            <button
              className="lb-submit"
              type="submit"
              id="lb-submit-btn"
              disabled={formik.isSubmitting}
            >
              <span className="lb-submit-label">
                {formik.isSubmitting ? "Sending" : "Book My Free Call"}
              </span>
              {formik.isSubmitting && <span className="lb-spinner" />}
            </button>

            <p className="lb-footnote">
              No spam. No commitment. Just a conversation.
            </p>
          </form>
        </div>
      ) : (
        <div
          className="lb-success lb-show"
          id="lb-success-view"
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={successRef}
        >
          <div className="lb-success-icon">
            <svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E11B22"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3>You&apos;re all set.</h3>
          <p>
            Thanks — we&apos;ll email you within 24 hours to schedule your call.
          </p>
        </div>
      )}
    </div>
  );
}
