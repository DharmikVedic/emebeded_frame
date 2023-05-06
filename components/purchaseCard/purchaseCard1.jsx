import React, { useState } from "react";
import { DynamicText } from "../utils/dynamicText";
import { CommonConfirm } from "../natalChart/utils";
import { Error } from "../utils/error";
import { LoginLoader } from "../utils/loader";

export default function PurchaseCard1({
  loader,
  content,
  userDetail,
  passData,
}) {
  const data = {
    content: {
      title: "Unlock Premium Natal Report",
      image: "https://upastrology.com/book-covers/style-1/natal.png",
      description:
        "Your birth chart is sacrosanct and governs your life events. Would you like to keep a detailed report handy? Generate a beautiful PDF that reveals your character and temperament, motivations and desires, potential skills and talents.",
      left_right_section_1: {
        title: "Know what it is",
        description:
          "Natal reports are blueprints based on your birth date, time and location. They show the exact positions of the planetary bodies and their influence on your personality as well as life ahead.",
        image: "https://upastrology.com/feature/know.png",
      },
      left_right_section_2: {
        title: "Detailed report",
        description:
          "We bring you 50+ pages report based on your simple birth details like time, date and location. It covers every aspect of your natal chart, without being too cluttered or too complex.",
        image: "https://upastrology.com/feature/know.png",
      },
      sale_promote: {
        title:
          "Get 60% Off on Your Exclusive Natal Report PDF - Limited Time Offer",
        description:
          "Seize this rare chance to unlock your destiny with our comprehensive Natal Report PDF, now available at an unbeatable price of only $9, reduced from $25. Don’t let this unique opportunity pass you by! Gain invaluable insights into your life’s path and take control of your future. Act fast, as this exceptional offer won’t last long!",
        total_amount: "9",
        discount_amount: "25",
      },
    },
  };
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePassData = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter valid email");
    } else {
      passData(email);
    }
  };

  return (
    <>
      <div className=" w-full bg-secondary  dark:bg-darksecondary">
        <div className="rotate-[180deg]">
          <svg
            className="dark:fill-darkprimary fill-white"
            viewBox="0 0 1920 110"
            style={{ display: "block" }}
          >
            <path d="M0 0s460.5 112.09 960.5 112.001C1460.5 111.912 1920 0 1920 0v112.001H.001L0 0z"></path>
          </svg>
        </div>
        <section className="max-w-6xl px-5 py-14 mx-auto">
          <div className="max-w-5xl mx-auto flex  flex-col gap-14 md:gap-24">
            <div className="flex flex-col gap-5 justify-center text-center mx-auto max-w-3xl">
              <DynamicText value={data?.content?.title}>
                <h2
                  dangerouslySetInnerHTML={{ __html: data.content.title }}
                  className="md:text-5xl text-3xl font-cera_bold "
                ></h2>
              </DynamicText>
              <DynamicText value={data?.content?.description}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data?.content?.description,
                  }}
                  className="md:text-lg"
                ></p>
              </DynamicText>
            </div>
            <div className="grid grid-cols-1 gap-10 md:gap-14 md:grid-cols-2">
              {data?.content?.left_right_section_1 && (
                <div className="flex border border-hightlight/50  p-5 md:p-10 items-center rounded-xl gap-10 flex-col">
                  <div className="flex w-full flex-col gap-2">
                    <DynamicText
                      value={data?.content?.left_right_section_1?.title}
                    >
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: data?.content?.left_right_section_1?.title,
                        }}
                        className="font-semibold md:text-3xl text-2xl text-zinc-800"
                      ></h3>
                    </DynamicText>
                    <DynamicText
                      value={data?.content?.left_right_section_1?.description}
                    >
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            data?.content?.left_right_section_1?.description,
                        }}
                        className="md:text-lg"
                      ></p>
                    </DynamicText>
                  </div>
                  <div className="w-full">
                    <DynamicText
                      value={data?.content?.left_right_section_1?.image}
                    >
                      <img
                        src={data?.content?.left_right_section_1?.image}
                        alt="know"
                        className="w-full"
                      />
                    </DynamicText>
                  </div>
                </div>
              )}
              <div className="flex border border-hightlight/50  p-5 md:p-10 items-center rounded-xl gap-10 flex-col">
                <div className="flex w-full flex-col gap-2">
                  <DynamicText
                    value={data?.content?.left_right_section_2?.title}
                  >
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: data?.content?.left_right_section_2?.title,
                      }}
                      className="font-semibold md:text-3xl text-2xl text-zinc-800"
                    ></h3>
                  </DynamicText>
                  <DynamicText
                    value={data?.content?.left_right_section_2?.description}
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          data?.content?.left_right_section_2?.description,
                      }}
                      className="md:text-lg"
                    ></p>
                  </DynamicText>
                </div>
                <div className="w-full">
                  <DynamicText
                    value={data?.content?.left_right_section_2?.image}
                  >
                    <img
                      src={data?.content?.left_right_section_2?.image}
                      alt="know"
                      className="w-full"
                    />
                  </DynamicText>
                </div>
              </div>
            </div>
            <div className="py-12 md:py-24  bg-gray-50 dark:bg-white rounded-[50px] flex flex-col gap-10 md:gap-20">
              <div className="flex max-w-4xl mx-auto flex-col gap-5 justify-center text-center px-5">
                <DynamicText value={data?.content?.sale_promote?.title}>
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: data?.content?.sale_promote?.title,
                    }}
                    className=" font-bold  md:text-4xl text-2xl sm:text-3xl text-center px-6"
                  ></h2>
                </DynamicText>
                <DynamicText value={data?.content?.sale_promote?.description}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data?.content?.sale_promote?.description,
                    }}
                    className=" max-w-2xl mx-auto "
                  ></p>
                </DynamicText>
              </div>

              <div className="flex flex-col gap-3 text-center mx-auto">
                <h3 className=" font-bold md:text-4xl text-3xl flex gap-2 justify-center items-end">
                  Price{" "}
                  <span className="dark:text-yellow-500  md:text-5xl text-4xl">
                    ${data?.content?.sale_promote?.total_amount}
                  </span>
                  <span className=" line-through font-cera_medium dark:text-gray-300 text-gray-400">
                    {" "}
                    ${data?.content?.sale_promote?.discount_amount}
                  </span>
                </h3>
                <p className="text-green-500 md:text-lg font-cera_medium mt-2">
                  You save $
                  {valToINt(data?.content?.sale_promote?.discount_amount) -
                    valToINt(data?.content?.sale_promote?.total_amount)}
                </p>
              </div>
            </div>
            {/*price section*/}
            <div className="flex w-full max-w-4xl mx-auto gap-14 md:flex-row flex-col items-center">
              <div className="flex flex-col gap-4 items-center w-[500px]">
                <img
                  src={data?.content?.image}
                  alt="natal-chart"
                  className="w-[170px] md:w-10/12"
                />
              </div>

              <div className="w-full pb-10  border-2 border-dark/50 px-5 pt-8 md:px-10 md:pt-10 rounded-[50px]">
                <h5 className="font-medium md:text-2xl text-xl mb-5 border-b pb-3 border-dark/50   ">
                  Confirm Your Bitrh Detail
                </h5>
                <CommonConfirm userDetail={userDetail} />
                {/* <form onSubmit={handlePassData}> */}
                <div className="flex flex-col mt-5 pt-5 border-t border-dark/50 gap-3">
                  <label
                    htmlFor="email"
                    className="text-zinc-800 w-full text-[16px] font-cera_medium"
                  >
                    Enter your email to receive the Natal Report
                  </label>
                  <input
                    required
                    value={email}
                    onChange={handleInput}
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="py-2 outline-none bg-transparent border-dark/50 placeholder:text-current text-zinc-800  border-b"
                  />
                </div>
                <Error error={error} />
                <button
                  onClick={handlePassData}
                  type="submit"
                  className="mt-7 bg-hightlight text-white rounded-md py-3 px-10 hover:scale-[1.03] ease-in duration-100 w-full"
                >
                  {loader ? <LoginLoader /> : "Download Your Natal Report"}
                </button>
                {/* </form> */}
                {/* <PaymentButton
                    email={emaild}
                    profile={userDetail}
                    mode={"natal"}
                    language={"en"}
                  /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export function valToINt(val) {
  return parseInt(val);
}
