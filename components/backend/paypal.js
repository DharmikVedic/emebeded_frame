const base_url = "https://api-m.sandbox.paypal.com/v2";
import { v4 as uuidv4 } from "uuid";

const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

export default async function paypal(orderId) {
  if (orderId) {
    const order = await createOrder(CLIENT_ID, CLIENT_SECRET, orderId);
    return { status: true, ...order };
  } else {
    return { status: false, msg: "No order id found" };
  }
}

async function createOrder(CLIENT_ID, CLIENT_SECRET, orderId) {
  const uuid = uuidv4();

  const req = await fetch(
    "https://api-m.sandbox.paypal.com/v2/checkout/orders",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "PayPal-Request-Id": uuid,
        Authorization: `Basic ${Buffer.from(
          CLIENT_ID + ":" + CLIENT_SECRET
        ).toString("base64")}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            // reference_id: "d9f80740-38f0-11e8-b467-0ed5f89f718b",
            amount: { currency_code: "USD", value: "9.00" },
          },
        ],
        payment_source: {
          paypal: {
            experience_context: {
              payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
              payment_method_selected: "PAYPAL",
              brand_name: "EXAMPLE INC",
              locale: "en-US",
              landing_page: "LOGIN",
              // shipping_preference: "SET_PROVIDED_ADDRESS",
              user_action: "PAY_NOW",
              return_url: `https://emebeded-frame.vercel.app/birth-thank-you?oid=${orderId}`,
              cancel_url: "https://emebeded-frame.vercel.app/birth-error",
            },
          },
        },
      }),
    }
  );
  const res = await req.json();
  return res;
}
