import * as Yup from "yup";
import { isValidPhoneNumber } from "libphonenumber-js";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const FILE_TYPES = ["application/pdf"];

export const validationSchema = Yup.object({
  partner_name: Yup.string()
    .trim()
    .required("Full name is required")
    .min(3, "Name must contain at least 3 characters.")
    .max(50, "Name cannot exceed 50 characters."),

  email_from: Yup.string()
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address")
    .required("Email is required"),

  partner_phone: Yup.string()
    .required("Phone number is required")
    .test(
      "is-valid-phone",
      "Invalid phone number",
      (value) => !!value && isValidPhoneNumber(value),
    ),

  linkedin_profile: Yup.string()
    .trim()
    .url("Invalid URL")
    .matches(
      /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_%]+\/?$/,
      "Enter valid LinkedIn profile URL",
    )
    .required("LinkedIn profile URL is required"),

  resume: Yup.mixed()
    .required("Resume is required")
    .test("fileType", "Only PDF files are allowed", (file) => {
      if (!file) return false;

      const ext = file.name.toLowerCase().slice(file.name.lastIndexOf("."));

      return file.type === "application/pdf" || ext === ".pdf";
    })
    .test("fileSize", "File too large (max 5MB)", (file) => {
      if (!file) return false;
      return file.size <= MAX_FILE_SIZE;
    }),

  cnic: Yup.string()
    .trim()
    .matches(/^\d{5}-\d{7}-\d{1}$/, "Enter valid CNIC (e.g. 12345-1234567-1)")
    .required("CNIC is required"),

  applicant_notes: Yup.string()
    .trim()
    .max(1000, "Maximum 1000 characters allowed"),
});
