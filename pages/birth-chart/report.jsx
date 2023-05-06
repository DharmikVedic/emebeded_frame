import {
  elements,
  hemisphere1,
  hemisphere2,
  modes,
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
import { DynamicText, Paragraph } from "../../components/utils/dynamicText";
import { useRouter } from "next/router";
import { Loader2 } from "@/components/utils/loader";
import useForm from "@/components/context/useForm";
import DarkModeSwitcher from "@/components/darkModeSwitcher";
import PurchaseCard1 from "@/components/purchaseCard/purchaseCard1";

const d = {
  planets: [
    {
      name: "Sun",
      full_degree: 312.3328,
      norm_degree: 12.3328,
      speed: 1.0153,
      is_retro: "false",
      sign_id: 11,
      sign: "Aquarius",
      house: 2,
    },
    {
      name: "Moon",
      full_degree: 272.1859,
      norm_degree: 2.1859,
      speed: 11.8278,
      is_retro: "false",
      sign_id: 10,
      sign: "Capricorn",
      house: 1,
    },
    {
      name: "Mars",
      full_degree: 352.2338,
      norm_degree: 22.2338,
      speed: 0.7679,
      is_retro: "false",
      sign_id: 12,
      sign: "Pisces",
      house: 4,
    },
    {
      name: "Mercury",
      full_degree: 324.1125,
      norm_degree: 24.1125,
      speed: 1.7357,
      is_retro: "false",
      sign_id: 11,
      sign: "Aquarius",
      house: 3,
    },
    {
      name: "Jupiter",
      full_degree: 28.0664,
      norm_degree: 28.0664,
      speed: 0.1336,
      is_retro: "false",
      sign_id: 1,
      sign: "Aries",
      house: 5,
    },
    {
      name: "Venus",
      full_degree: 279.917,
      norm_degree: 9.917,
      speed: 1.2303,
      is_retro: "false",
      sign_id: 10,
      sign: "Capricorn",
      house: 1,
    },
    {
      name: "Saturn",
      full_degree: 40.6872,
      norm_degree: 10.6872,
      speed: 0.0381,
      is_retro: "false",
      sign_id: 2,
      sign: "Taurus",
      house: 5,
    },
    {
      name: "Uranus",
      full_degree: 316.5426,
      norm_degree: 16.5426,
      speed: 0.0581,
      is_retro: "false",
      sign_id: 11,
      sign: "Aquarius",
      house: 3,
    },
    {
      name: "Neptune",
      full_degree: 304.3665,
      norm_degree: 4.3665,
      speed: 0.0377,
      is_retro: "false",
      sign_id: 11,
      sign: "Aquarius",
      house: 2,
    },
    {
      name: "Pluto",
      full_degree: 252.3914,
      norm_degree: 12.3914,
      speed: 0.0234,
      is_retro: "false",
      sign_id: 9,
      sign: "Sagittarius",
      house: 12,
    },
    {
      name: "Node",
      full_degree: 123.7247,
      norm_degree: 3.7247,
      speed: 0.0155,
      is_retro: "false",
      sign_id: 5,
      sign: "Leo",
      house: 8,
    },
    {
      name: "Chiron",
      full_degree: 254.7887,
      norm_degree: 14.7887,
      speed: 0.0848,
      is_retro: "false",
      sign_id: 9,
      sign: "Sagittarius",
      house: 1,
    },
    {
      name: "Part of Fortune",
      full_degree: 292.9507,
      norm_degree: 22.9507,
      speed: 0,
      is_retro: "false",
      sign_id: 10,
      sign: "Capricorn",
      house: 2,
    },
  ],
  houses: [
    { house: 1, sign: "Sagittarius", degree: 252.8038 },
    { house: 2, sign: "Capricorn", degree: 283.3641 },
    { house: 3, sign: "Aquarius", degree: 316.52902 },
    { house: 4, sign: "Pisces", degree: 350.49251 },
    { house: 5, sign: "Aries", degree: 21.71683 },
    { house: 6, sign: "Taurus", degree: 48.69895 },
    { house: 7, sign: "Gemini", degree: 72.8038 },
    { house: 8, sign: "Cancer", degree: 103.3641 },
    { house: 9, sign: "Leo", degree: 136.52902 },
    { house: 10, sign: "Virgo", degree: 170.49251 },
    { house: 11, sign: "Libra", degree: 201.71683 },
    { house: 12, sign: "Scorpio", degree: 228.69895 },
  ],
  ascendant: 252.80379706576088,
  midheaven: 170.4925122747304,
  vertex: 129.35580290195264,
  lilith: {
    name: "Lilith",
    full_degree: 266.9583,
    norm_degree: 26.9583,
    speed: 0.1112,
    is_retro: "false",
    sign_id: 9,
    sign: "Sagittarius",
    house: 1,
  },
  aspects: [
    {
      aspecting_planet: "Sun",
      aspected_planet: "Saturn",
      aspecting_planet_id: 0,
      aspected_planet_id: 6,
      type: "Square",
      orb: 1.65,
      diff: 88.35,
    },
    {
      aspecting_planet: "Sun",
      aspected_planet: "Uranus",
      aspecting_planet_id: 0,
      aspected_planet_id: 7,
      type: "Conjunction",
      orb: 4.21,
      diff: 4.21,
    },
    {
      aspecting_planet: "Sun",
      aspected_planet: "Neptune",
      aspecting_planet_id: 0,
      aspected_planet_id: 8,
      type: "Conjunction",
      orb: 7.97,
      diff: 7.97,
    },
    {
      aspecting_planet: "Sun",
      aspected_planet: "Pluto",
      aspecting_planet_id: 0,
      aspected_planet_id: 9,
      type: "Sextile",
      orb: 0.06,
      diff: 59.94,
    },
    {
      aspecting_planet: "Sun",
      aspected_planet: "Ascendant",
      aspecting_planet_id: 0,
      aspected_planet_id: 10,
      type: "Sextile",
      orb: 0.47,
      diff: 59.53,
    },
    {
      aspecting_planet: "Moon",
      aspected_planet: "Jupiter",
      aspecting_planet_id: 1,
      aspected_planet_id: 4,
      type: "Trine",
      orb: 4.12,
      diff: 115.88,
    },
    {
      aspecting_planet: "Moon",
      aspected_planet: "Venus",
      aspecting_planet_id: 1,
      aspected_planet_id: 5,
      type: "Conjunction",
      orb: 7.73,
      diff: 7.73,
    },
    {
      aspecting_planet: "Mars",
      aspected_planet: "Midheaven",
      aspecting_planet_id: 2,
      aspected_planet_id: 11,
      type: "Opposition",
      orb: 1.74,
      diff: 178.26,
    },
    {
      aspecting_planet: "Mercury",
      aspected_planet: "Jupiter",
      aspecting_planet_id: 3,
      aspected_planet_id: 4,
      type: "Sextile",
      orb: 3.95,
      diff: 63.95,
    },
    {
      aspecting_planet: "Mercury",
      aspected_planet: "Uranus",
      aspecting_planet_id: 3,
      aspected_planet_id: 7,
      type: "Conjunction",
      orb: 7.57,
      diff: 7.57,
    },
    {
      aspecting_planet: "Jupiter",
      aspected_planet: "Neptune",
      aspecting_planet_id: 4,
      aspected_planet_id: 8,
      type: "Square",
      orb: 6.3,
      diff: 83.7,
    },
    {
      aspecting_planet: "Venus",
      aspected_planet: "Saturn",
      aspecting_planet_id: 5,
      aspected_planet_id: 6,
      type: "Trine",
      orb: 0.77,
      diff: 120.77,
    },
    {
      aspecting_planet: "Saturn",
      aspected_planet: "Uranus",
      aspecting_planet_id: 6,
      aspected_planet_id: 7,
      type: "Square",
      orb: 5.86,
      diff: 84.14,
    },
    {
      aspecting_planet: "Saturn",
      aspected_planet: "Neptune",
      aspecting_planet_id: 6,
      aspected_planet_id: 8,
      type: "Square",
      orb: 6.32,
      diff: 96.32,
    },
    {
      aspecting_planet: "Uranus",
      aspected_planet: "Pluto",
      aspecting_planet_id: 7,
      aspected_planet_id: 9,
      type: "Sextile",
      orb: 4.15,
      diff: 64.15,
    },
    {
      aspecting_planet: "Uranus",
      aspected_planet: "Ascendant",
      aspecting_planet_id: 7,
      aspected_planet_id: 10,
      type: "Sextile",
      orb: 3.74,
      diff: 63.74,
    },
    {
      aspecting_planet: "Pluto",
      aspected_planet: "Ascendant",
      aspecting_planet_id: 9,
      aspected_planet_id: 10,
      type: "Conjunction",
      orb: 0.41,
      diff: 0.41,
    },
    {
      aspecting_planet: "Ascendant",
      aspected_planet: "Midheaven",
      aspecting_planet_id: 10,
      aspected_planet_id: 11,
      type: "Square",
      orb: 7.69,
      diff: 82.31,
    },
  ],
  ascendant_ruler:
    "You pour a lot of energy into hobbies, children, or creative endeavors. Having a good time is important to you! You need to express yourself creatively, thrive on attention, and you are likely very romantic and proud. ",
  moon_phase: {
    moon_phase_name: "Balsamic Moon",
    moon_phase_id: 8,
    moon_phase_calc: "You were born under a Balsamic Moon.",
    moon_phase_description:
      "You have a natural ability to boil down ideas into their most precise form. Ahead of your time in some regard, you most likely find it frustrating to deal with systems that make no sense. ",
  },
  hemisphere: {
    east_west: {
      description:
        "Eastern hemisphere is emphasised in your birth chart. You are self motivated, action oriented, and self-assertive. You tend to believe strongly in free will.",
      id: 1,
    },
    north_south: {
      description:
        "Northern hemisphere is emphasised in your birth chart which is the personal and subjective portion of the chart. Therefore, you tend to be private and more subjective.",
      id: 1,
    },
  },
  elements: {
    elements: [
      { name: "Fire", percentage: 25 },
      { name: "Earth", percentage: 41.666 },
      { name: "Air", percentage: 25 },
      { name: "Water", percentage: 8.333 },
    ],
    description:
      "You have preponderence of Earth element in your birth chart. It suggests that you are cautious, premeditative, conventional, and dependable. You are the type of person who lives by a practical and common sense code.",
    dominant_element_id: 2,
  },
  modes: {
    modes: [
      { name: "Cardinal", percentage: 33.333 },
      { name: "Fixed", percentage: 33.333 },
      { name: "Mutable", percentage: 33.333 },
    ],
    description:
      "You have preponderence of Cardinal mode in your birth chart. This suggests that you are a person who is inclined toward constant activity, with efforts directed at the here and now.",
    dominant_mode_id: 1,
  },
  polarity: {
    positive: 30.769,
    negative: 76.923,
    report:
      "The negative polarity is more introverted and low-key, focused on interior experience. You tend to be a more introverted type; the inner world of physical sensation and emotional experience is more natural to you than the buzz and noise of the outside world.",
  },
  dominant_sign: { sign_id: 11, sign_name: "Aquarius", percentage: 25 },
};

export default function NatalCalculator2({}) {
  const [detail, setdetail] = useState(d);
  const [loader, setLoader] = useState(false);
  const [userDetail, setuserdetail] = useState({});
  const { natal, deleteuserdata } = useForm();
  const router = useRouter();
  const [svg, setsvg] = useState(
    "https://s3.ap-south-1.amazonaws.com/western-chart/5ea6e380-ea67-11ed-8419-bb6b83619ec6.svg"
  );

  useEffect(() => {
    if (natal) {
      setuserdetail(natal);
      //API(userdata);
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
    <div className=" bg-white dark:bg-darkprimary md:pt-10 w-full">
      <div className="max-w-4xl px-5 w-full flex justify-end py-4 mx-auto">
        <DarkModeSwitcher />
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

      {Object.keys(detail).length !== 0 ? (
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
      ) : (
        <Loader2 />
      )}
    </div>
  );
}
