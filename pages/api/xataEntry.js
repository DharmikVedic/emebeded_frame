import sendEmail from "@/components/backend/email";
import paypal from "@/components/backend/paypal";
import {
  getPages,
  getTableSchema,
  insertData,
  updatePageById,
} from "@/components/backend/xata";

export default async function XataIntegrate(req, res) {
  const TABLE_NAME = "orders";
  const DB_NAME = "ap_emmy";

  let response;

  if (req.body) {
    const body = JSON.parse(req.body);
    const mode = body.mode;
    let order_id;

    switch (mode) {
      case "CREATE_ORDER":
        const entry = body.entry;
        const order = await insertData(TABLE_NAME, entry, DB_NAME);
        response = {
          status: true,
          ...order,
        };
        break;
      case "PAYMENT":
        order_id = body.order_id;
        const payment = await paypal(order_id);
        const updateXataEntry = await updatePageById(
          order_id,
          DB_NAME,
          TABLE_NAME,
          {
            payment_meta_data: JSON.stringify({
              paypal_id: payment.id,
            }),
          }
        );
        response = {
          ...updateXataEntry,
          url: payment.links[1].href,
        };
        break;
      case "SEND_EMAIL":
        order_id = body.order_id;
        const getOrderData = await getPages(order_id, TABLE_NAME, DB_NAME);
        // console.log(getOrderData);
        if (getOrderData.length > 0) {
          if (
            getOrderData[getOrderData.length - 1]?.payment_status == "success"
          ) {
            response = {
              status: false,
              msg: "Mail already send",
            };
            break;
          } else {
            const mail = await sendEmail({
              order_id,
              email_id: getOrderData[getOrderData.length - 1]?.email_id,
            });
            const updateSuccessXataEntry = await updatePageById(
              order_id,
              DB_NAME,
              TABLE_NAME,
              {
                payment_status: "success",
              }
            );
            response = {
              ...updateSuccessXataEntry,
              ...mail,
            };
          }
        } else {
          response = {
            status: false,
            msg: "No order found",
          };
        }
        break;
      default:
        const test = await getTableSchema(TABLE_NAME, DB_NAME);
        return res.json({
          status: true,
          msg: "No mode found",
          test,
        });
    }
    return res.json({ response });
  } else {
    return res.json({
      status: false,
      message: "No body",
    });
  }
}
