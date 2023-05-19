import {
  elements,
  hemisphere1,
  hemisphere2,
  moonPhase,
} from "../../components/natalChart/icon";
import {
  AspectCard,
  FetureCard,
  PlanetCard2,
  PlanetHouse,
  ProfileDetailCard2,
} from "../../components/natalChart/utils";

import { FetchApi } from "../../components/utils/fetchAPI";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loader2 } from "@/components/utils/loader";
import useForm from "@/components/context/useForm";
import PurchaseCard1 from "@/components/purchaseCard/purchaseCard1";

export default function NatalCalculator2({}) {
  const [detail, setdetail] = useState({});
  const [loader, setLoader] = useState(false);
  const [userDetail, setuserdetail] = useState({});
  const { natal, deleteuserdata } = useForm();
  const router = useRouter();
  const [svg, setsvg] = useState(null);

  useEffect(() => {
    if (natal) {
      setuserdetail(natal);
      API(natal);
    } else {
      //router.push("/birth-chart");
    }
  }, [natal]);

  const API = async (userdata) => {
    const ApiCall = await FetchApi({
      apiName: "natal_wheel_chart",
      userData: {
        ...userdata,
        theme_name: "WHEEL_CHART_THEME_UPASTROLOGY",
      },
    });
    const ApiDetail = await FetchApi({
      apiName: "natal_chart_interpretation",
      userData: userdata,
    });
    if (ApiCall.status) {
      setdetail(ApiDetail);
      setsvg(ApiCall.chart_url);
    }
  };

  const handleForm = () => {
    setdetail({});
    setsvg(null);
    deleteuserdata({ natal: null });
    router.push("/birth-chart");
  };

  const handleReport = async (email) => {
    setLoader(true);
    const detail = {
      mode: "CREATE_ORDER",
      entry: {
        email_id: email,
        user_data: JSON.stringify(userDetail),
        order_id: "1",
        order_for: "NATAL",
        payment_channel: "paypal",
        payment_status: "process",
        payment_meta_data: null,
      },
    };
    const res = await fetch("/api/xataEntry", {
      method: "POST",
      body: JSON.stringify(detail),
    });
    const resStatus = await res.json();
    setLoader(false);
    if (resStatus?.response?.status) {
      router.push({
        pathname: "/payment",
        query: { oid: resStatus?.response?.id },
      });
    }
  };

  return (
    <>
      {Object.keys(detail).length !== 0 ? (
        <div className=" bg-white dark:bg-darkprimary  pt-14 md:pt-10 w-full">
          {/* <div className="max-w-4xl px-5 w-full flex justify-end py-4 mx-auto">
        <DarkModeSwitcher />
      </div> */}
          <div
            onClick={() => router.push("/birth-chart")}
            className="absolute cursor-pointer top-4 md:top-10 left-5 md:left-10 flex gap-0 items-center text-blue-500 hover:underline"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Back
          </div>
          <div className="flex flex-col gap-10 w-full">
            <div className="max-w-3xl md:pb-5 mx-auto flex flex-col gap-5">
              <h1 className="md:text-5xl text-4xl text-center text-zinc-800 dark:text-white font-bold">
                Your Birth Chart Report
              </h1>
            </div>

            <div className="flex mx-auto justify-center md:flex-row flex-col items-center gap-14 md:gap-20 w-full">
              <div className="w-full max-w-md">
                <ProfileDetailCard2
                  userDetail={userDetail}
                  handleForm={handleForm}
                />
              </div>

              {svg !== null ? (
                <div className="w-full max-w-lg px-5">
                  <img
                    className="w-full bg-white rounded-full"
                    src={svg}
                    alt="Natal chart"
                  />
                </div>
              ) : (
                <Loader2 />
              )}
            </div>
          </div>

          {Object.keys(detail).length !== 0 && (
            <div className="flex flex-col gap-10 w-full items-center">
              {/* planet data */}
              <div className="md:pt-20 pt-10 px-5">
                <div className="mx-auto  flex flex-col gap-16">
                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 max-w-5xl w-full mx-auto">
                    <FetureCard
                      bg="bg-gradient-to-r from-blue-300 to-violet-300"
                      title={detail["moon_phase"].moon_phase_calc}
                      img={`/natal/${
                        moonPhase[detail["moon_phase"].moon_phase_id]
                      }.png`}
                      desc={detail["moon_phase"].moon_phase_description}
                    />
                    <FetureCard
                      bg="bg-gradient-to-r from-pink-200 to-rose-200"
                      img={`/natal/${
                        elements[detail["elements"].dominant_element_id]
                      }.png`}
                      desc={detail["elements"].description}
                    />
                    {/* <FetureCard
                    bg="bg-gradient-to-r from-green-200 to-lime-200"
                    img={`/natal/${
                      modes[detail["modes"].dominant_mode_id]
                    }.png`}
                    desc={detail["modes"].description}
                  /> */}
                    <FetureCard
                      bg="bg-gradient-to-r from-sky-200 to-blue-200"
                      img={`/natal/${
                        hemisphere1[detail["hemisphere"].east_west.id]
                      }.png`}
                      desc={detail["hemisphere"].east_west.description}
                    />
                    <FetureCard
                      bg="bg-gradient-to-r from-green-200 to-lime-200"
                      img={`/natal/${
                        hemisphere2[detail["hemisphere"].north_south.id]
                      }.png`}
                      desc={detail["hemisphere"].north_south.description}
                    />
                  </div>
                </div>
                <div className="md:py-20 py-14">
                  <PlanetCard2
                    title="Planetary Position"
                    response={detail.planets}
                  />
                </div>
                <PlanetHouse title="House Cups" detail={detail.houses} />
                <div className="md:pb-20 pb-14">
                  <AspectCard title="Natal Aspect" response={detail.aspects} />
                </div>
              </div>
              <PurchaseCard1
                loader={loader}
                passData={handleReport}
                userDetail={userDetail}
              />
            </div>
          )}
        </div>
      ) : (
        <Loader2 />
      )}
    </>
  );
}
