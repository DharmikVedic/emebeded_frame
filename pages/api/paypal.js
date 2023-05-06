// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const base_url = "https://api-m.sandbox.paypal.com/v2";
import { v4 as uuidv4 } from "uuid";

const CLIENT_ID =
  "AdNITJj1ejfo3qmN6q1l2n6aAechI97WlhNdrpH4auawcLKaKeaMvvcZScfsRDG0lFcZ6NfCb-D_0dZh";
const CLIENT_SECRET =
  "EECh50_arpU4bA1wVl17jxTXIX1wj46-Z-LoNJKUIOcUNiTy7ZQhLcyJxoQhNfWmMTyrGj7A7n_TfHQg";

// const headers = {
//   "Content-Type": "application/json",
//   Authorization:
//     "Basic QVNtR05CY0FhOV9ZTDNLVDJMQ0gtTWdIQURZWHVlM3hiWm9KbWdwTlBoNEtXSEpnbHlIcnVpcXNtY1V1U0w4YXA2NDFCaG04V182Vjl4SHU6RUtTX2JwSUZnQXBSd29XNkFPUFc1cjZCSDIzdnczM2VNVlhlMnFIcXBETzFBVlRoX2hIdEdSWGhfclFqbm00WHdfc0lJMW5NQy1LUzBPd2w=",
// };

export default async function handler(req, res) {
  var auth =
    "Basic " + new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64");

  const order = await createOrder(CLIENT_ID, CLIENT_SECRET);
  return res.status(200).json({ order });
}

async function createOrder(CLIENT_ID, CLIENT_SECRET) {
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
            amount: { currency_code: "USD", value: "100.00" },
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
              return_url: "https://example.com/returnUrl",
              cancel_url: "https://example.com/cancelUrl",
            },
          },
        },
      }),
    }
  );
  const res = await req.json();
  return res;
}
