import React from "react";
import { DynamicText, Paragraph } from "../utils/dynamicText";
import CommonInput from "../forms/form1";
import DarkModeSwitcher from "../darkModeSwitcher";

export default function CommonForm({ jsonData, handleData, userData }) {
  const initialvalue = {
    name: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    min: "",
    time: "AM",
    country: "United States",
    current_country: "United States",
    place: "",
    current_location: "",
    tzone: "",
    solar_year: new Date().getFullYear(),
    current_tzone: "",
    lat: "",
    lon: "",
    current_lat: "",
    email: "",
    current_lon: "",
  };

  return (
    <div className="md:py-24  py-0 flex flex-col gap-14 md:px-5">
      <div className="max-w-xl mx-auto items-end  flex flex-col gap-5">
        <div className="dark:bg-darkprimary bg-white flex flex-col gap-5 md:p-8 p-5">
          <DynamicText value={jsonData?.content?.title}>
            <h1
              dangerouslySetInnerHTML={{
                __html: jsonData?.content?.title,
              }}
              className="md:text-3xl text-2xl text-heading dark:text-darksecondary"
            ></h1>
          </DynamicText>
          <Paragraph
            text={jsonData?.content?.description}
            style="max-w-2xl dark:text-darkparagraph text-paragraph mx-auto text-sm"
          />
          <div className={`w-full mt-3`}>
            <CommonInput
              // solar={solar}
              // transit={transit}
              label={true}
              email_status={jsonData?.config?.email_status}
              userdata={userData}
              passData={handleData}
              formKeys={jsonData?.config?.form_label}
              initialvalue={initialvalue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
