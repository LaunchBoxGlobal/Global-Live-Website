"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import ButtonLoader from "../Global/ButtonLoader";
import axios from "axios";
import Link from "next/link";
import ButtonLoader from "@/components/Global/ButtonLoader";

const TravelIndustryContactForm = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    formik.setFieldValue("pageUrl", window.location.href);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phoneNumber: "",
      // pageUrl: window.location.href,
      emailSubject: "New Contact Form From Service Page",
      // textMessagesCheckbox: false,
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
        .max(10, "Must be 10 digits")
        .required("Please enter your phone number"),
      // textMessagesCheckbox: Yup.boolean().oneOf([true], "*"),
      agreeToTermsConditions: Yup.boolean().oneOf([true], "*"),
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
    <form
      onSubmit={formik.handleSubmit}
      className="w-full bg-black rounded-2xl p-5 lg:p-10 xl:p-16 text-white"
    >
      <div className="w-full">
        <h2 className="text-2xl md:text-[45px] lg:text-[40px] xl:text-[45px] leading-none font-bold tracking-tight">
          Contact <span className="red-text">Us</span>
        </h2>
        <p className="text-base text-gray-300 mt-4">
          <span className="leading-[1]">
            Get an instant estimate with our Project Estimator Tool — projects
            starting at $2,999.
          </span>
        </p>
      </div>
      <div className="w-full mt-10 flex flex-col items-start gap-3 lg:gap-5">
        <div className="w-full">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-400"
          >
            Your Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className="pb-2 pt-1 block w-full border-b border-gray-400 lg:text-lg outline-none bg-black"
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
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="pb-2 pt-1 block w-full border-b border-gray-400 bg-black lg:text-lg outline-none"
          />
          <div className="w-full">
            {formik.touched.email && formik.errors.email ? (
              <span className="text-xs red-text">{formik.errors.email}</span>
            ) : null}
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="number"
            className="block text-sm font-medium text-gray-400"
          >
            Number
          </label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className="pb-2 pt-1 block w-full border-b border-gray-400 bg-black lg:text-lg outline-none"
          />
          <div className="w-full">
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <span className="text-xs red-text">
                {formik.errors.phoneNumber}
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
            className="leading-[1.3] text-sm relative -top-0.5 text-gray-400"
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

        <div className="w-full">
          <button
            type="submit"
            className="text-white w-full rounded-full h-[55px] text-sm lg:text-lg font-semibold bg-[#F40E00] transition-all duration-300"
          >
            {loading ? <ButtonLoader /> : `Schedule a Free Strategy Call`}
          </button>
        </div>
      </div>
    </form>
  );
};

export default TravelIndustryContactForm;
