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
    if (query.has("oid")) {
      setOrderId(query.get("oid"));
    } else {
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
    if (resStatus?.response?.status) {
      await router.push(resStatus?.response?.url);
    }
  };

  return (
    <>
      {orderId ? (
        <div className="bg-secondary overflow-x-hidden md:py-24 py-14 h-screen w-full px-5">
          <div className="w-full overflow-hidden flex flex-col gap-14 bg-white p-[40px] rounded-[20px] shadow-md max-w-4xl mx-auto">
            <div className="flex flex-col">
              <div className="md:text-xl pb-3 text-lg flex justify-between w-full items-center">
                <div className="flex flex-col gap-1">
                  <h6 className="text-zinc-500 text-lg">Your Order</h6>
                  <h6 className="">Birth Chart</h6>
                </div>
                <h6>
                  <span className="line-through text-zinc-500">$25</span> $9
                </h6>
              </div>
              <div className="md:text-xl  relative before:absolute before:top-0 before:left-[-40px] before:w-[100vw]  z-[1] before:z-[-1] before:bg-indigo-50 before:h-full py-3 text-lg flex justify-between w-full items-center">
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
              <div className="flex gap-2 justify-center  items-center text-zinc-500">
                <svg
                  version="1.0"
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64.000000 64.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M186 572 l-118 -66 4 -131 c3 -118 6 -136 31 -187 34 -70 101 -137
166 -167 l49 -23 61 32 c74 40 124 93 159 169 23 48 27 73 30 181 l4 126 -126
67 c-69 37 -129 67 -133 66 -4 -1 -61 -31 -127 -67z m245 -19 l109 -57 0 -113
c0 -138 -20 -200 -84 -267 -45 -46 -112 -86 -144 -86 -23 0 -99 49 -134 86
-15 16 -39 56 -54 89 -25 53 -28 71 -28 174 l-1 114 105 58 c58 32 109 58 114
59 5 0 58 -26 117 -57z"
                    />
                    <path
                      d="M357 334 l-68 -57 -35 34 c-18 18 -37 30 -40 26 -8 -8 43 -76 62 -84
14 -5 164 111 164 128 0 18 -16 9 -83 -47z"
                    />
                  </g>
                </svg>

                <p>Secure Payment Guaranteed</p>
              </div>
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
