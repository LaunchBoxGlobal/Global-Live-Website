// import nodemailer from "nodemailer";

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     // Create a transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       secure: process.env.SMTP_SECURE === "true",
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     // Send the email
//     await transporter.sendMail({
//       from: `${body?.firstName} <${process.env.SMTP_USER}>`,
//       // from: `Leads`,
//       to: `${process.env.TO_EMAIL} , lbgwebleads@launchbox.pk`, // where the form gets sent
//       subject: body?.emailSubject
//         ? body?.emailSubject
//         : "New Contact Form From Website",
//       html: `
//   ${body?.firstName ? `<p><strong>Name:</strong> ${body.firstName}</p>` : ""}
//   ${body?.email ? `<p><strong>Email:</strong> ${body.email}</p>` : ""}
//   ${
//     body?.phoneNumber
//       ? `<p><strong>Phone No:</strong> ${body.phoneNumber}</p>`
//       : ""
//   }
//   ${body?.service ? `<p><strong>Service:</strong> ${body.service}</p>` : ""}
//   ${
//     body?.message
//       ? `<p><strong>Message:</strong></p><p>${body.message}</p>`
//       : ""
//   }
//   ${
//     body?.description
//       ? `<p><strong>Description:</strong></p><p>${body.description}</p>`
//       : ""
//   }
//   ${
//     body?.pageUrl
//       ? `<p><strong>Submitted from:</strong> ${body.pageUrl}</p>`
//       : ""
//   }
//   ${
//     body?.agreeToTermsConditions
//       ? `<p><strong>Agreed to terms & conditions:</strong> ${body.agreeToTermsConditions}</p>`
//       : ""
//   }
// `,
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Email error:", error);
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       {
//         status: 500,
//       },
//     );
//   }
// }

export async function POST(request) {
  try {
    const body = await request.json();

    const ODOO_URL = process.env.ODOO_BASE_URL;
    const ODOO_PASSWORD = process.env.ODOO_PASSWORD;

    const description = `
Name: ${body?.firstName || ""}
Email: ${body?.email || ""}
Phone Number: ${body?.phoneNumber || ""}
Service: ${body?.service || ""}

Message:
${body?.message || ""}

Description:
${body?.description || ""}

Submitted From:
${body?.pageUrl || ""}

Agreed To Terms:
${body?.agreeToTermsConditions || ""}
`;

    const leadResponse = await fetch(`${ODOO_URL}/jsonrpc`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "call",
        params: {
          service: "object",
          method: "execute_kw",
          args: [
            "launch-box", // DB Name
            2, // User ID
            ODOO_PASSWORD, // Password or API Key
            "crm.lead",
            "create",
            [
              {
                type: "lead",

                // Lead title shown in CRM
                name:
                  body?.emailSubject ||
                  `Website Lead - ${body?.firstName || "Unknown"}`,

                // Contact details
                contact_name: body?.firstName || "",
                email_from: body?.email || "",
                phone: body?.phoneNumber || "",

                // Extra data
                description,
              },
            ],
          ],
        },
        id: 601,
      }),
    });

    const leadData = await leadResponse.json();

    if (leadData.error) {
      throw new Error(
        leadData.error?.data?.message || "Failed to create CRM lead",
      );
    }

    return Response.json({
      success: true,
      leadId: leadData.result,
    });
  } catch (error) {
    console.error("Odoo Lead Error:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
