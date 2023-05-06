const SEND_GRID_ASTROPAGES = process.env.SEND_GRID_ID;

export default async function sendEmail(data) {
  const email = data?.email_id;
  const text = `Thank you for shopping with us your order id id ${data?.order_id}`;

  //console.log(SEND_GRID_ASTROPAGES);

  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(SEND_GRID_ASTROPAGES);
  const msg = {
    to: email, // Change to your recipient
    from: "dharmik.rathod@vedicrishiastro.com", // Change to your verified sender
    subject: "Thank you for shopping with us",
    text: text,
    // html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent", email);
    })
    .catch((error) => {
      console.error(error);
    });

  return {
    mail_response: "success",
  };
}
