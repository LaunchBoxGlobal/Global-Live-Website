import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("body >>", body);

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. smtp.gmail.com
      port: process.env.SMTP_PORT, // usually 465 (secure) or 587 (TLS)
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      // from: `${body?.firstName} <${process.env.SMTP_USER}>`,
      from: `Leads`,
      to:   `${process.env.TO_EMAIL} , lbgwebleads@launchbox.pk `, // where the form gets sent
      subject: body?.emailSubject
        ? body?.emailSubject
        : "New Contact Form From Website",
      html: `
  ${body?.firstName ? `<p><strong>Name:</strong> ${body.firstName}</p>` : ""}
  ${body?.email ? `<p><strong>Email:</strong> ${body.email}</p>` : ""}
  ${
    body?.phoneNumber
      ? `<p><strong>Phone No:</strong> ${body.phoneNumber}</p>`
      : ""
  }
  ${body?.service ? `<p><strong>Service:</strong> ${body.service}</p>` : ""}
  ${
    body?.message
      ? `<p><strong>Message:</strong></p><p>${body.message}</p>`
      : ""
  }
  ${
    body?.description
      ? `<p><strong>Description:</strong></p><p>${body.description}</p>`
      : ""
  }
  ${
    body?.pageUrl
      ? `<p><strong>Submitted from:</strong> ${body.pageUrl}</p>`
      : ""
  } 
  ${
    body?.agreeToTermsConditions
      ? `<p><strong>Agreed to terms & conditions:</strong> ${body.agreeToTermsConditions}</p>`
      : ""
  }
`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
