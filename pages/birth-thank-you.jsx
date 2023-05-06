import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function NatalThankYou() {
  const [orderId, setOrderId] = useState(null);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const [response, setresponse] = useState({});

  useEffect(() => {
    const { asPath } = router;
    const query = new URLSearchParams(asPath.split("?")[1]);
    //console.log(query.has("oid"), query.get("oid"));
    if (query.has("oid")) {
      setOrderId(query.get("oid"));
      handleTHankYou(query.get("oid"));
    } else {
      router.push("/birth-chart");
    }
  }, []);

  const handleTHankYou = async (orderId) => {
    setLoader(true);
    const detail = {
      mode: "SEND_EMAIL",
      order_id: orderId,
    };
    const res = await fetch("/api/xataEntry", {
      method: "POST",
      body: JSON.stringify(detail),
    });
    const resStatus = await res.json();
    setLoader(false);
    if (resStatus?.response?.status) {
      setresponse({ pdf_url: resStatus?.response?.pdf_url });
    }
  };

  return (
    <>
      <Head>
        <title>Natal report thank you</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>
      <div className="w-full bg-secondary px-5 md:py-20 py-12 flex relative   justify-center items-center min-h-screen">
        <div className="bg-zinc-50  items-start rounded-md p-6 md:p-10 flex flex-col gap-9 md:gap-12 max-w-3xl w-full">
          <div>
            <img src="/checked.png" alt="success" className="h-[80px]" />
          </div>
          <div className="flex flex-col gap-5 ">
            <h2 className="md:text-4xl font-cera_bold text-green-600 text-3xl mb-3">
              {" "}
              Your order is successful!
            </h2>
            <p style={{ lineHeight: 1.7 }} className="md:text-lg text-zinc-700">
              Thank you for purchasing the Personalised Natal PDF. You shall
              receive the mail containing the PDF link on the provided email
              address shortly.{" "}
              {response?.pdf_url && (
                <>
                  Or you can directly download the PDF from the link{" "}
                  <a
                    className="text-sky-400 border-b-[2px] pb-[1px] border-sky-400 "
                    href={response?.pdf_url ? response?.pdf_url : "#"}
                  >
                    here
                  </a>
                </>
              )}
              .
            </p>
            <p style={{ lineHeight: 1.7 }} className="md:text-lg ">
              P.S. The email shall arrive from{" "}
              <b className="font-medium border-b-[3px] pb-1 border-green-500">
                abc@gmail.com
              </b>{" "}
              so do make it white list in your email contacts.
            </p>
            <p
              style={{ lineHeight: 1.7 }}
              className="md:text-lg text-zinc-700 "
            >
              Thanks Again!
            </p>
            {/* <Link href="/" legacyBehavior>
              <a className="mt-5  bg-sky-500 hover:bg-sky-600  text-white text-center text-lg  p-3 rounded-md max-w-sm">
                Continue with Upastrology
              </a>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
