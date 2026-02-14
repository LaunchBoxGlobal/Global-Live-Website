"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ButtonLoader from "../Global/ButtonLoader";
import Link from "next/link";

const BlogsContactForm = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    formik.setFieldValue("pageUrl", window.location.href);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      message: "",
      phoneNumber: "",
      emailSubject: "New Contact Form From Blogs Archive Page",
      agreeToTermsConditions: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Name can not be less than 3 characters")
        .max(15, "Name can not be more than 25 characters")
        .required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
      phoneNumber: Yup.string()
        .min(10, "Must be 10 digits")
        .max(10, "Can not be more than 10 digits.")
        .required("Please enter your phone number."),
      message: Yup.string()
        .min(100, "Must be 100 characters")
        .max(1000, "Can not be more than 1000 characters.")
        .required("Please enter your message."),
      agreeToTermsConditions: Yup.boolean().notRequired(),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const res = await axios.post(`/api/submit-form`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res?.status === 200) {
          // console.log("res >>>>", res);

          resetForm();
          alert("Form submitted successfully!");
        }
      } catch (error) {
        console.log("error while submitting form >>>", error);
        alert("Something went wrong!");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section className="w-full flex items-center justify-between flex-wrap">
      <h2 className="text-[108px] lg:text-[158px] relative flex flex-col items-center lg:items-start leading-none m-0 p-0 w-full lg:w-[40%]">
        <span className="text-black font-semibold block">Let's</span>
        <span className="red-text font-extrabold block relative top-[-37px] md:top-[-55px] left-[-5px] md:left-[-10px]">
          Talk!
        </span>
      </h2>
      <div className="w-full lg:w-[60%]">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full bg-[#F2F2F2] rounded-2xl lg:rounded-[38.78] p-[2rem] flex flex-col items-start gap-3"
        >
          <div className="w-full">
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="w-full h-[56px] bg-white block rounded-[15px] text-black placeholder:text-black outline-none px-5"
              placeholder="Name"
            />
            <div className="w-full">
              {formik.touched.firstName && formik.errors.firstName ? (
                <span className="text-xs red-text">
                  {formik.errors.firstName}
                </span>
              ) : null}
            </div>
          </div>
          <div className="w-full">
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full h-[56px] bg-white block rounded-[15px] text-black placeholder:text-black outline-none px-5"
              placeholder="Email"
            />
            <div className="w-full">
              {formik.touched.email && formik.errors.email ? (
                <span className="text-xs red-text">{formik.errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="w-full">
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              onChange={(e) => {
                const value = e.target.value;
                formik.setFieldValue(
                  "phoneNumber",
                  value ? parseInt(value, 10) : "", // convert to number or reset to empty
                );
              }}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              className="w-full h-[56px] bg-white block rounded-[15px] text-black placeholder:text-black outline-none px-5"
              placeholder="Phone number"
            />
            <div className="w-full">
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <span className="text-xs red-text">
                  {formik.errors.phoneNumber}
                </span>
              ) : null}
            </div>
          </div>
          <div className="w-full">
            <textarea
              name="message"
              id="message"
              rows="10"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder="Message"
              className="w-full h-[114px] bg-white block rounded-[15px] text-black placeholder:text-black outline-none p-5"
            ></textarea>
            <div className="w-full">
              {formik.touched.message && formik.errors.message ? (
                <span className="text-xs red-text">
                  {formik.errors.message}
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agreeToTermsConditions"
              id="agreeToTermsConditions"
              {...formik.getFieldProps("agreeToTermsConditions")}
            />
            <label
              htmlFor="agreeToTermsConditions"
              className="leading-[1.3] text-sm relative -top-0.5"
            >
              By checking this box, I agree to receive SMS from LaunchBox Global
              at the phone number provided. Msg & data rates may apply. Msg
              frequency varies. For help, reply HELP or email us at
              hello@launchboxglobal.com. You can opt out at any time by replying
              STOP.{" "}
              <Link href={`/privacy-policy`} className="underline mx-1">
                Privacy & Policy
              </Link>{" "}
              &{" "}
              <Link href={`/terms-and-conditions`} className="underline mx-1">
                Terms and Conditions.
              </Link>{" "}
              {formik.touched.agreeToTermsConditions &&
              formik.errors.agreeToTermsConditions ? (
                <span className="text-red-500 text-2xl absolute">*</span>
              ) : null}
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-[56px] bg-[#F40E00] block rounded-[15px] text-white text-center uppercase font-bold outline-none px-5"
          >
            {loading ? <ButtonLoader /> : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BlogsContactForm;
