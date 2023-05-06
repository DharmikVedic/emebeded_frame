import { Loader2, LoginLoader } from "@/components/utils/loader";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Payment() {
  const [orderId, setOrderId] = useState(null);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const { asPath } = router;
    const query = new URLSearchParams(asPath.split("?")[1]);
    //console.log(query.has("oid"), query.get("oid"));
    if (query.has("oid")) {
      setOrderId(query.get("oid"));
    } else {
      router.push("/birth-chart");
    }
  }, []);

  const handlePament = async () => {
    setLoader(true);
    const detail = {
      mode: "PAYMENT",
      order_id: orderId,
    };
    const res = await fetch("/api/xataEntry", {
      method: "POST",
      body: JSON.stringify(detail),
    });
    const resStatus = await res.json();
    setLoader(false);
    console.log(resStatus);
    if (resStatus?.response?.status) {
      await router.push(resStatus?.response?.url);
    }
  };

  return (
    <>
      {orderId ? (
        <div className="bg-secondary md:py-24 py-14 h-screen w-full px-5">
          <div className="w-full flex flex-col gap-14 bg-white p-[40px] rounded-[20px] shadow-md max-w-4xl mx-auto">
            <div className="flex flex-col divide-y">
              <div className="md:text-xl pb-3 text-lg flex justify-between w-full items-center">
                <h6>Subtotal</h6>
                <h6>
                  <span className="line-through text-zinc-500">$25</span> $9
                </h6>
              </div>
              <div className="md:text-xl pt-3 text-lg flex justify-between w-full items-center">
                <h6>Total</h6>
                <h6>$9</h6>
              </div>
            </div>

            <div className="flex max-w-lg w-full mx-auto flex-col gap-5">
              <button
                onClick={handlePament}
                disabled={loader}
                className="max-w-lg hover:bg-yellow-400 duration-100 ease-in flex justify-center mx-auto py-3 rounded-md px-10 w-full bg-yellow-500 "
              >
                {loader ? (
                  <LoginLoader />
                ) : (
                  <img className="h-[30px]" src="/paypal.png" alt="Paypal" />
                )}
              </button>
              <div className="max-w-sm mx-auto w-full">
                <img src="/solution-graphics.png" className="w-full" />
              </div>
              {/* <div className="max-w-lg mx-auto w-full border border-indigo-400/30 rounded-md p-5">
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div> */}
            </div>
          </div>
        </div>
      ) : (
        <Loader2 />
      )}
    </>
  );
}
