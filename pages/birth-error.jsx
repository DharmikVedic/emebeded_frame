import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function NatalError() {
  return (
    <>
      <Head>
        <title>Natal report error</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>
      <div className="w-full bg-secondary md:py-20 px-5 py-12 flex relative  justify-center items-center min-h-screen">
        <div className="bg-zinc-50 dark:bg-red-100/10 items-start rounded-md p-6 md:p-10 flex flex-col gap-9 md:gap-12 max-w-3xl w-full">
          <div>
            <img src="/cancel.png" alt="fail" className="h-[80px]" />
          </div>
          <div className="flex flex-col w-full gap-5 ">
            <h1 className="md:text-4xl text-red-500 font-cera_bold text-3xl mb-3">
              {" "}
              Order cancelled!
            </h1>
            <p
              style={{ lineHeight: 1.7 }}
              className="md:text-lg dark:text-zinc-100"
            >
              Sorry, the order has been cancelled as the payment was not
              successful.
            </p>
            <p
              style={{ lineHeight: 1.7 }}
              className="md:text-lg dark:text-zinc-100"
            >
              In case the amount was debited from your account, do write us at{" "}
              <b className="font-cera_medium border-b-[3px] border-red-400 pb-1">
                abc@gmail.com
              </b>{" "}
              or contact us from{" "}
              <a
                className="text-sky-400 border-b-[2px] pb-[1px] border-sky-400 "
                href="#"
              >
                here
              </a>
              . with the transaction and order details. So that we can look and
              do the needful.
            </p>
            <p
              style={{ lineHeight: 1.7 }}
              className="md:text-lg dark:text-zinc-100"
            >
              Thank you.{" "}
            </p>
            {/* <Link href="/">
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
