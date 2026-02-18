import Link from "next/link";
import React from "react";
import "./style.css";

export const metadata = {
  title: "Launchbox Global Terms & Conditions | Service Agreement",
  description:
    "Review Launchbox Global's Terms & Conditions governing service use, messaging policies, refunds, and user needs. Your access implies agreement to these terms.",
};

const page = () => {
  return (
    <section className="w-full relative overflow-hidden bg-white">
      <section className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 overflow-hidden z-10">
        <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1] w-full z-10 lg:w-[90%] mx-auto">
          <span>Terms &</span> <span className="red-text">Conditions</span>
        </h1>

        <div className="w-full conditions my-16">
          <p className="">
            These Terms & Conditions (“Terms”) govern your access to and use of
            the services provided by Launchbox Global LLC (“Launchbox Global,”
            “we,” “us,” or “our”). By accessing or using our website, mobile
            apps, or services (collectively, the “Service”), you agree to be
            bound by these Terms. If you don’t agree, don’t use our services.
          </p>

          <h2>General Use</h2>
          <p>
            By accessing or placing an order with Launchbox Global, you confirm
            that you are in agreement with and bound by these Terms. These terms
            apply to the entire website, services, and any communication between
            you and Launchbox Global.
          </p>
          <br />
          <p>
            We may revise the Service, including pricing and feature
            availability, at any time without prior notice.
          </p>
          <h2>License</h2>
          <p>
            We grant you a non-exclusive, non-transferable, revocable license to
            access and use our website and services strictly in accordance with
            these Terms.
          </p>

          <h2>Definitions</h2>
          <ul>
            <li>
              <span>Company:</span> Launchbox Global LLC, 1621 Central Ave,
              Office 8945, Cheyenne, WY 82001
            </li>
            <li>
              <span>Service:</span> Any platform, website, or service operated
              by Launchbox Global
            </li>
            <li>
              <span>User/You: </span>
              Any person or entity accessing or using our services
            </li>
            <li>
              <span>Third-Party Services: </span>
              Vendors, integrations, and tools used to support service delivery
            </li>
          </ul>
          <h2>Messaging Terms & Conditions</h2>
          <p>
            You agree to receive informational messages from Launchbox Global,
            including but not limited to appointment reminders, account
            notifications, and delivery updates.
          </p>
          <ul>
            <li>Message frequency may vary.</li>
            <li>Message and data rates may apply.</li>
            <li>
              Reply HELP for support or email{" "}
              <Link href={`mailto:hello@launchboxglobal.com`}>
                hello@launchboxglobal.com.
              </Link>
            </li>
            <li>You can opt out at any time by replying STOP.</li>
          </ul>
          <p>
            We do not share your mobile information with third parties or
            affiliates for marketing or promotional purposes.
          </p>
          <h2>Restrictions</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, distribute, or resell any part of the Service</li>
            <li>Reverse-engineer or attempt to access source code</li>
            <li>Use the Service for any unlawful purpose</li>
          </ul>
          <h2>Return and Refund Policy</h2>
          <p>
            If you're not satisfied, contact us. We'll work with you to resolve
            issues related to your purchase.
          </p>

          <h2>Feedback & Suggestions</h2>
          <p>
            Any feedback you provide becomes our property. We may use it without
            restriction or compensation to you.
          </p>

          <h2>Links to Other Websites</h2>
          <p>
            We are not responsible for third-party sites or content linked from
            our platform. Interactions with such sites are governed by their
            terms and privacy policies.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies to enhance your experience. You can disable them in
            your browser, but some features may not work properly.
          </p>

          <h2>Modifications and Updates</h2>
          <p>
            We may change or discontinue parts of the Service at any time
            without liability.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may include third-party content or services. We do not guarantee
            their accuracy or functionality and are not liable for their
            performance.
          </p>

          <h2>Term and Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access if you
            violate these Terms. You can terminate by ceasing use and deleting
            any downloaded content.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify us from any claims or liabilities arising
            from your misuse of the Service or violation of these Terms.
          </p>

          <h2>No Warranties</h2>
          <p>
            The Service is provided “as is.” We make no guarantees regarding
            uptime, functionality, or content accuracy.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            We are not liable for indirect, incidental, or consequential
            damages. Our total liability is limited to the amount you’ve paid
            for the Service.
          </p>

          <h2>Severability</h2>
          <p>
            If any part of these Terms is found invalid, the rest remains
            enforceable.
          </p>

          <h2>Waiver</h2>
          <p>
            Our failure to enforce any part of these Terms is not a waiver of
            our right to enforce them later.
          </p>

          <h2>Dispute Resolution & Arbitration</h2>
          <p>
            Disputes must first go through informal resolution. If unresolved
            after 60 days, disputes will be resolved through binding arbitration
            under the American Arbitration Association’s rules.
          </p>

          <h2>Entire Agreement</h2>
          <p>
            These Terms and our Privacy Policy represent the full agreement
            between you and Launchbox Global.
          </p>
        </div>
      </section>
    </section>
  );
};

export default page;
