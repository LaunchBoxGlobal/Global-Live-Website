import Link from "next/link";
import React from "react";
import "../terms-and-conditions/style.css";

export const metadata = {
  title: "Launchbox Global Privacy Policy | Data Protection",
  description:
    "Learn how Launchbox Global protects your data. Our Privacy Policy explains collection use and security of personal information for website and mobile services.",
};

const page = () => {
  return (
    <section className="w-full relative overflow-hidden bg-white">
      <section className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 overflow-hidden z-10">
        <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1] w-full z-10 lg:w-[90%] mx-auto">
          <span>Privacy</span> <span className="red-text">Policy</span>
        </h1>

        <div className="w-full conditions my-16">
          <p className="">
            Launchbox Global (“we,” “our,” or “us”) is committed to protecting
            your privacy. This Privacy Policy explains how your personal
            information is collected, used, and disclosed by Launchbox Global.
          </p>
          <br />
          <p>
            This policy applies to our website, subdomains, mobile apps, and
            services (“Service”). By accessing or using the Service, you agree
            to the practices described herein.
          </p>

          <h2>Definitions</h2>
          <ul>
            <li>
              <span>Personal Data:</span> Any information that identifies or can
              identify a person.
            </li>
            <li>
              <span>Device:</span> Any device that can access the Service,
              including mobile phones, tablets, and computers.
            </li>
            <li>
              <span>Cookies: </span>
              Small data files stored on your browser to help personalize your
              experience.
            </li>
            <li>
              <span>Service Providers: </span>
              Third parties who help us deliver services (e.g., hosting, payment
              processing).
            </li>
            <li>
              <span>You: </span>A user of our Service.
            </li>
          </ul>

          <h2>What Information We Collect</h2>
          <p>We may collect personal and non-personal information when you:</p>
          <ul>
            <li>Visit or interact with our website</li>
            <li>Register for an account</li>
            <li>Fill out forms or surveys</li>
            <li>Make a purchase</li>
            <li>Use our mobile apps</li>
          </ul>

          <p>This may include:</p>
          <ul>
            <li>Name, username</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Location data (if permission is granted)</li>
            <li>Device information</li>
            <li>IP address</li>
            <li>Payment information (processed securely by third parties)</li>
          </ul>

          <h2>Mobile Messaging Privacy</h2>
          <p>We respect your privacy when it comes to text messaging.</p>
          <ul>
            <li>
              No mobile information will be shared with third parties or
              affiliates for marketing or promotional purposes.
            </li>
            <li>
              Text messaging originator opt-in data and consent will not be
              shared or sold.
            </li>
            <li>
              To opt out of SMS communications, reply STOP or email us at {' '}
              <Link href={`mailto:hello@launchboxglobal.com`}>
                hello@launchboxglobal.com.
              </Link>
            </li>
          </ul>

          <h2>How We Use the Information We Collect</h2>
          <p>We use your data for the following purposes:</p>
          <ul>
            <li>To personalize your experience</li>
            <li>To improve our website and services</li>
            <li>To respond to customer service requests</li>
            <li>To process transactions</li>
            <li>
              To send transactional and promotional emails (only if you’ve opted
              in)
            </li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Do We Share the Information with Third Parties?</h2>
          <p>
            We do not sell or share your mobile messaging data or consent with
            any third parties or affiliates for promotional use.
          </p>
          <p>
            We may share other necessary personal or non-personal information
            only with trusted third-party service providers to help us operate,
            maintain, and improve the Service. These providers may help with:
          </p>
          <ul>
            <li>Website and data hosting</li>
            <li>Payment processing</li>
            <li>Customer support</li>
            <li>Email delivery and analytics</li>
          </ul>
          <p>
            We may disclose information to legal authorities if required by law,
            regulation, subpoena, or in defense of our legal rights.
          </p>

          <h2>Email Communications</h2>
          <p>
            By submitting your email address, you agree to receive emails from
            us. You can unsubscribe at any time by clicking the link in any
            marketing email or contacting us. Your email may also be used for
            audience targeting (e.g., Facebook Ads) if you’ve opted in.
          </p>

          <h2>How Long We Keep Your Information</h2>
          <p>
            We retain personal data only as long as needed for service delivery,
            legal compliance, or business purposes. When no longer necessary,
            data is securely deleted or anonymized.
          </p>

          <h2>How We Protect Your Information</h2>
          <p>We use industry-standard safeguards:</p>
          <ul>
            <li>SSL encryption for data in transit</li>
            <li>Secure server infrastructure</li>
            <li>Access controls and regular audits</li>
            <li>To process transactions</li>
          </ul>
          <p>
            However, no method of transmission is 100% secure. We cannot
            guarantee absolute security.
          </p>

          <h2>Your Rights & Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access or update your information</li>
            <li>Request data deletion</li>
            <li>Withdraw consent for communications</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <Link href={`mailto:support@launchboxglobal.com`}>
              support@launchboxglobal.com.
            </Link>
          </p>

          <h2>Cookies and Tracking Technologies</h2>
          <p>We use cookies, sessions, and local storage to:</p>
          <ul>
            <li>Keep you logged in</li>
            <li>Remember preferences</li>
            <li>Analyze site traffic</li>
          </ul>
          <p>
            You can disable cookies in your browser, but this may impact your
            experience.
          </p>

          <h2>Remarketing Services</h2>
          <p>
            We may use services like Google or Facebook for remarketing to show
            ads to past visitors. These platforms use cookies. You can manage
            your preferences through those platforms directly.
          </p>

          <h2>Third-Party Services and Links</h2>
          <p>
            Our site may contain links to third-party sites or services. We are
            not responsible for their content or privacy practices.
          </p>

          <h2>Children’s Privacy</h2>
          <p>
            We do not knowingly collect personal information from children under
            13. If you believe a child has provided us information without
            parental consent, contact us and we’ll delete it.
          </p>

          <h2>International Data Transfers</h2>
          <p>
            By using our Service, you agree that your information may be
            transferred to, processed, and stored in countries outside of your
            own, including the United States.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy as needed. We’ll notify you of
            significant changes, and your continued use of the Service means you
            accept the updated terms.
          </p>

          <h2>Contact Us</h2>
          <p>Questions? Complaints? Want to exercise your rights?</p>
          <p>Reach us at:</p>

          <ul>
            <li>
              <Link href={`mailto:support@launchboxglobal.com`}>
                support@launchboxglobal.com
              </Link>
            </li>
            <li>
              <Link href={`tel:8888688385`}>(888) 868-8385</Link>
            </li>
            <li>
              <Link href={`/contact-us`}>Contact us</Link>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default page;
