// export default async function sendEmail(data) {
//   const email = data?.email_id;
//   const text = `Thank you for shopping with us your order id id ${data?.order_id}`;

//   //console.log(SEND_GRID_ASTROPAGES);

//   const sgMail = require("@sendgrid/mail");
//   sgMail.setApiKey(SEND_GRID_ASTROPAGES);
//   const msg = {
//     to: email, // Change to your recipient
//     from: "dharmik.rathod@vedicrishiastro.com", // Change to your verified sender
//     subject: "Thank you for shopping with us",
//     text: text,
//     html: `<a href=${data?.pdf_url}">Click here to download the PDF</a><br/><br/><strong>Warning: the download link is valid only for 7 days. Beyond that, your PDF file will be deleted.</strong>`,
//   };
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log("Email sent", email);
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//   return {
//     mail_response: "success",
//   };
// }

import Mailjet from "node-mailjet";

export default async function sendEmail(data) {
  const mailjet = Mailjet.apiConnect(
    process.env.MAILERJET_API_KEY,
    process.env.MAILERJET_API_SECRET
  );

  const html = HtmlTemplate(data.pdf_url);

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "dharmik.rathod@vedicrishiastro.com",
          Name: "Dharmik",
        },
        To: [
          {
            Email: data?.email_id || "rathoddharmik9@gmail.com",
            Name: "makka",
          },
        ],
        // Cc: cc ? cc.map((email) => ({ Email: email })) : [],
        // Bcc: bcc ? bcc.map((email) => ({ Email: email })) : [],
        Subject: "Your Birth chart Report is Ready!",
        TextPart: "Greetings from Mailjet!",
        HTMLPart: html,
      },
    ],
  });
  const result = await request;
  return result.body;
}

function HtmlTemplate(link) {
  let html = `
   <p>You have just created your Birth Chart Report and we thank you for your interest!</p>
<p>We welcome you to download the created pdf at the address: <a href=${link}>Click here to download the PDF</a></p>
<p  style="color:red"><b>Warning: the download link is valid only for 7 days. Beyond that, your PDF file will be deleted.</b></p>
<p>Trusting that this PDF will bring you full fulfilment!</p>
<p>Good reading!</p>
  `;
  return html;
}
