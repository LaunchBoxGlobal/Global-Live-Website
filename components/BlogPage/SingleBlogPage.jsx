"use client";
import "./style.css";
import React, { useEffect, useState } from "react";
import parse, { domToReact } from "html-react-parser";
import BlogAuthorDetails from "./BlogAuthorDetails";
import TableOfContent from "./TableOfContent";
import Image from "next/image";
import axios from "axios";

const SingleBlogPage = ({ blog, author, date, headings }) => {
  const [readTime, setReadTime] = useState(null);
  const [numericReadTime, setNumericReadTime] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState("");
  useEffect(() => {
    getReadTime();
    getNumericReadTime();
  }, []);

  function getReadTime(wordsPerMinute = 125) {
    const plainText = blog?.content?.rendered.replace(/<[^>]+>/g, " ");
    const wordCount = plainText?.trim()?.split(/\s+/)?.length;
    const time = Math.ceil(wordCount / wordsPerMinute);
    setReadTime(time);
  }

  function getNumericReadTime(wordsPerMinute = 125) {
    const plainText = blog?.content?.rendered.replace(/<[^>]+>/g, " ");
    const wordCount = plainText?.trim()?.split(/\s+/)?.length || 0;
    const totalSeconds = Math.ceil((wordCount / wordsPerMinute) * 60);
    const minutes = Math.ceil(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds,
    ).padStart(2, "0")}`;
    setNumericReadTime(formattedTime);
  }

  let tocInserted = false;

  const modifiedContent = parse(blog?.content?.rendered || "", {
    replace: (domNode) => {
      if (
        domNode.name === "a" &&
        domNode.attribs?.href === "/contact-us" &&
        domNode.attribs?.class?.includes("blogRedButton")
      ) {
        return (
          <button
            className={domNode.attribs.class}
            id={domNode.attribs.id}
            onClick={(e) => {
              e.preventDefault();
              setIsPopupOpen(true);
            }}
          >
            {domToReact(domNode.children)}
          </button>
        );
      }

      if (
        domNode.name === "div" &&
        domNode.attribs?.class?.includes("blogCtaForm")
      ) {
        return (
          <div className="my-4 w-full">
            <form className="relative bg-white shadow-xl p-2 w-full rounded-xl">
              <input
                placeholder="Enter Your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-4 pr-32 py-2 w-full rounded-full text-sm sm:text-base outline-none text-gray-600"
              />
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  if (email == "") return alert("please enter your email");
                  try {
                    const res = await axios.post(
                      `/api/submit-form`,
                      {
                        email,
                        emailSubject: `${window.location.pathname}=> Newsletter => CTA`,
                      },
                      {
                        headers: {
                          "Content-Type": "application/json",
                        },
                      },
                    );

                    if (res?.status === 200) {
                      setEmail("");
                      alert("Form submitted successfully!");
                    }
                  } catch (error) {
                    console.log("error while submitting form >>>", error);
                    alert("Something went wrong!");
                  }
                }}
                className="bg-[#f40e00] text-white px-5 sm:px-6 py-3 rounded-xl absolute right-1 top-1/2 -translate-y-1/2 text-xs sm:text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        );
      }

      if (domNode.name === "h1") {
        return (
          <>
            <div className="blog-html">
              <h1 className="blocContentTitle">
                {domToReact(domNode.children)}
              </h1>
            </div>
            <BlogAuthorDetails
              author={author}
              date={date}
              readTime={readTime}
              numericReadTime={numericReadTime}
              blog={blog}
              plainText={blog?.content?.rendered.replace(/<[^>]+>/g, " ")}
            />
          </>
        );
      }

      if (domNode.name === "img" && !tocInserted) {
        tocInserted = true;
        return (
          <>
            <Image
              {...domNode.attribs}
              className={`w-full rounded-xl my-5 ${
                domNode.attribs?.class || ""
              }`}
              alt={domNode.attribs?.alt || ""}
            />
            <div className="my-8">
              <TableOfContent headings={headings} />
            </div>
          </>
        );
      }
    },
  });

  return (
    <div className="w-full">
      <div className="w-full blog-page">
        <div className="w-full blogContent">{modifiedContent}</div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-[50%] max-w-xl relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">
              Contact Us
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name..."
                  className="border w-full outline-none p-2 rounded-md"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email..."
                  className="border w-full outline-none p-2 rounded-md"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone Number..."
                  className="border w-full outline-none p-2 rounded-md"
                />
              </div>

              <div className="flex items-start gap-2 mt-2">
                <input type="checkbox" className="mt-1" />
                <p className="text-sm text-gray-600">
                  By checking this box, I agree to receive SMS from LaunchBox
                  Global at the phone number provided. Msg & data rates may
                  apply. Msg frequency varies. For help, reply HELP or email us
                  at{" "}
                  <a
                    href="mailto:hello@launchboxglobal.com"
                    className="text-blue-600 underline"
                  >
                    hello@launchboxglobal.com
                  </a>
                  . You can opt out at any time by replying STOP.{" "}
                  <a href="/privacy-policy" className="text-blue-600 underline">
                    Privacy Policy
                  </a>{" "}
                  &{" "}
                  <a
                    href="/terms-and-conditions"
                    className="text-blue-600 underline"
                  >
                    Terms and Conditions
                  </a>
                  .
                </p>
              </div>

              <button
                onClick={() => console.log("Form submitted")}
                className="w-full mt-4 px-4 py-2 bg-[#f40e00] text-white rounded-lg hover:bg-[#f40e01] transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlogPage;
