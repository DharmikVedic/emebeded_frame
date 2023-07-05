import Mailjet from "node-mailjet";

export default async function sendEmail(req, res) {
  const mailjet = Mailjet.apiConnect(
    process.env.MAILERJET_API_KEY,
    process.env.MAILERJET_API_SECRET
  );

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "dharmik.rathod@vedicrishiastro.com",
          Name: "Dharmik",
        },
        To: [
          {
            Email: "rathoddharmik9@gmail.com",
            Name: "makka",
          },
        ],
        // Cc: cc ? cc.map((email) => ({ Email: email })) : [],
        // Bcc: bcc ? bcc.map((email) => ({ Email: email })) : [],
        Subject: "My first Mailjet Email!",
        TextPart: "Greetings from Mailjet!",
        HTMLPart:
          '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
      },
    ],
  });
  const result = await request;
  return res.json(result.body);
}
