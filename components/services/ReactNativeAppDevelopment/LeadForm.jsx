"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ButtonLoader from "@/components/Global/ButtonLoader";

const LeadForm = ({ title, buttonTitle }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phoneNumber: "",
      // pageUrl: window.location.href,
      emailSubject: "New Contact Form From Service Page",
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

  useEffect(() => {
    formik.setFieldValue("pageUrl", window.location.href);
  }, []);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full bg-white rounded-2xl p-5 lg:p-10 text-black"
    >
      <h2 className="text-[30px] lg:text-[40px] leading-8 lg:leading-[44px]">
        {title ? (
          title
        ) : (
          <>
            Less stress. More success.{" "}
            <span className="blueText">Let’s go!</span>
          </>
        )}
      </h2>

      <div className="w-full mt-7 flex flex-col items-start gap-3 lg:gap-5">
        <div className="w-full">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-[#212121]"
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
            className="pb-2 pt-1 block w-full border-b border-gray-800 lg:text-lg outline-none"
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
            className="block text-sm font-medium text-[#212121]"
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
            className="pb-2 pt-1 block w-full border-b border-gray-800 lg:text-lg outline-none"
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
            className="block text-sm font-medium text-[#212121]"
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
            className="pb-2 pt-1 block w-full border-b border-gray-800 lg:text-lg outline-none"
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
          <button
            type="submit"
            className="bg-[#212121] text-white w-full rounded-full h-[45px] text-sm lg:text-lg font-semibold hover:bg-[#F40E00] transition-all duration-300"
          >
            {loading ? <ButtonLoader /> : buttonTitle}
          </button>
        </div>
      </div>
    </form>
  );
};

export default LeadForm;
