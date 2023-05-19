import useForm from "@/components/context/useForm";
import DarkModeSwitcher from "@/components/darkModeSwitcher";
import CommonForm from "@/components/natalChart/form";
import NatalCalculator2 from "@/components/natalChart/report";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function NatralChart() {
  const { natal, adduserdata } = useForm();
  const [userData, setUserdata] = useState({});
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (natal) {
      setUserdata(natal);
    }
  }, [natal]);

  const handleData = (data) => {
    setLoader(true);
    adduserdata({ natal: data });
    setLoader(false);
    router.push("/birth-chart/report");
  };

  const staticData = {
    component_id: "natal_form_with_text",
    config: {
      email_status: "0",
      form_label: {
        date: "Select Your Birth Date",
        time: "Select Your Birth Time",
        place: "Select Your Birth Place",
        email: "Enter Your Email",
        name: "Enter Your Full Name",
        btn: "Calculate Your Natal Chart",
      },
    },
    content: {
      description:
        "Calculate the position of the planets at your birth and unlock the hidden patterns and potentials that shape your life's journey. Gain valuable insight into your purpose, personality, and opportunities for growth and transformation today",
      title: "Natal Chart Calculator",
    },
  };

  return (
    <div className="bg-secondary dark:bg-dark items-center  flex flex-col  gap-3 md:gap-10">
      {/* <div className="max-w-4xl w-full flex justify-end py-4 mx-auto px-5">
        <DarkModeSwitcher />
      </div> */}
      <div>
        <CommonForm
          loader={loader}
          userData={userData}
          jsonData={staticData}
          handleData={handleData}
        />
      </div>
    </div>
  );
}
