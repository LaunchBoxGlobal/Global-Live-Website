"use client";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import ButtonLoader from "../Global/ButtonLoader";
import Link from "next/link";

export const serviceLinks = [
  "Mobile App Development",
  "Web App Development",
  "Software Project Rescue Service",
  "Custom Software Development",
  "E-commerce Development",
  "Digital Marketing",
  "Branding & Design",
  "Native App Development",
  "Flutter App Development",
  "Swift App Development",
  "Kotlin App Development",
  "Ionic App Development",
  "Team Augmentation",
  "On-Demand Talent Augmentation",
  "Off-Shore Software Development",
];

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    formik.setFieldValue("pageUrl", window.location.href);
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone; // e.g. "Asia/Karachi"
      if (tz) formik.setFieldValue("timezone", tz, false); // false = don't validate on set
    } catch (e) {}
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      service: "",
      email: "",
      phoneNumber: "",
      message: "",
      timezone: "",
      // pageUrl: window.location.href,
      emailSubject: "New Contact Form Website",
      // textMessagesCheckbox: false, // Added
      agreeToTermsConditions: false, // Added
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name is required"),
      service: Yup.string().required("Please select a service"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      phoneNumber: Yup.string()
        .min(10, "Phone number must be 10-11 digits")
        .max(11, "Phone number must be 11 digits")
        .required("phone number is required"),
      message: Yup.string()
        .min(100, "Message must be at least 100 characters")
        .max(500, "Message cannot exceed 500 characters")
        .required("Message is required"),
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
          resetForm();
          alert("Form submitted successfully!");
        }
      } catch (error) {
        alert("Something went wrong!");
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <section
      className={`w-full pb-10 lg:pb-20 padding-x flex items-center justify-center relative overflow-hidden`}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="w-full lg:w-[70%] 2xl:w-[60%] flex flex-col items-start gap-6 z-10 pb-10"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="flex flex-col items-start gap-1">
            <label
              htmlFor="firstName"
              className="block text-sm lg:text-lg font-medium text-gray-900"
            >
              Who's the genius behind the idea?
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Your full name"
              name="firstName"
              {...formik.getFieldProps("firstName")}
              className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60 placeholder:text-gray-600"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col items-start gap-1">
            <label
              htmlFor="service"
              className="block text-sm lg:text-lg font-medium text-gray-900"
            >
              Pick the service you'd like to start with.
            </label>
            <select
              id="service"
              name="service"
              {...formik.getFieldProps("service")}
              className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60 placeholder:text-gray-600"
            >
              <option defaultValue={""} value="">
                Choose a service
              </option>
              {serviceLinks?.map((service, index) => {
                return (
                  <option value={service} key={index}>
                    {service}
                  </option>
                );
              })}
            </select>
            {formik.touched.service && formik.errors.service ? (
              <div className="text-red-500 text-sm">
                {formik.errors.service}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col items-start gap-1">
            <label
              htmlFor="email"
              className="block text-sm lg:text-lg font-medium text-gray-900"
            >
              Best place to send your plan?
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              name="email"
              {...formik.getFieldProps("email")}
              className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60 placeholder:text-gray-600"
              //   placeholder="First name"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col items-start gap-1">
            <label
              htmlFor="phoneNumber"
              className="block text-sm lg:text-lg font-medium text-gray-900"
            >
              Where can we reach you directly?
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Your phone number"
              {...formik.getFieldProps("phoneNumber")}
              className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60 placeholder:text-gray-600"
              //   placeholder="000 2345 6789"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-500 text-sm">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full flex flex-col items-start gap-1">
            <label
              htmlFor="timezone"
              className="block text-sm lg:text-lg font-medium text-gray-900"
            >
              We’ll sync to your time zone.
            </label>
            <input
              type="text"
              id="timezone"
              name="timezone"
              value={formik.values.timezone}
              readOnly
              className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60 placeholder:text-gray-600"
            />
            {formik.touched.timezone && formik.errors.timezone ? (
              <div className="text-red-500 text-sm">
                {formik.errors.timezone}
              </div>
            ) : null}
          </div>
          <div className="w-full flex flex-col items-start gap-1">
            <label
              htmlFor="message"
              className="block text-sm lg:text-lg font-medium text-gray-900"
            >
              Tell us about your idea in one line.
            </label>
            <input
              type="text"
              name="message"
              placeholder="ex: A subscription app for healthy meal plans"
              id="message"
              {...formik.getFieldProps("message")}
              className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60 placeholder:text-gray-600"
            />
            {/* <textarea
            name="message"
            id="message"
            cols="30"
            rows="8"
            {...formik.getFieldProps("message")}
            className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60"
          ></textarea> */}
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm">
                {formik.errors.message}
              </div>
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
        <div className="w-full flex flex-col justify-center items-center mt-3 gap-5">
          <button
            type="submit"
            className="bg-[#F40E00] text-white px-5 min-w-[223px] lg:px-7 py-4 2xl:py-8 font-bold rounded-xl flex items-center justify-center gap-2 text-sm lg:text-lg 2xl:text-[25px] "
          >
            {loading ? (
              <ButtonLoader />
            ) : (
              "Book My Free Strategy Call (Worth $1,000)"
            )}
          </button>
          <button
            type="submit"
            className="bg-[#fff] border-2 border-[#F40E00] text-[#F40E00] hover:bg-[#F40E00] hover:text-white transition-all duration-300 px-5 min-w-[223px] lg:px-7 py-4 2xl:py-8 font-bold rounded-xl flex items-center justify-center gap-2 text-sm lg:text-lg 2xl:text-[25px] "
          >
            {loading ? (
              <ButtonLoader />
            ) : (
              "Just send the plan — I’ll review it."
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUsForm;
