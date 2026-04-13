import * as Yup from "yup";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const validationSchema = Yup.object({
  partner_name: Yup.string()
    .required("Full name is required")
    .min(3, "Name must contain at least 3 characters.")
    .max(25, "Name can not exceed 25 characters."),

  email_from: Yup.string().email("Invalid email").required("Email is required"),

  // partner_phone: Yup.string()
  //   .matches(/^(\+92|0)?3\d{9}$/, "Enter a valid number (e.g. +923001234567)")
  //   .required("Phone number is required"),
  partner_phone: Yup.string()
    .matches(/^\+92-\d{3}-\d{7}$/, "Enter valid number (+92-300-1234567)")
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
  cnic: Yup.string()
    .matches(/^\d{5}-\d{7}-\d{1}$/, "Enter valid CNIC (e.g. 12345-1234567-1)")
    .required("CNIC is required"),
});
