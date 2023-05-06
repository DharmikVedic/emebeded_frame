import { colortext, PlanetColor, typeTextColor } from "../utils/colors";

import {
  ampmconvertor,
  convert24hoursto12hours,
  date,
  numberSufix,
  Time,
} from "../utils/dateutils";
import { zodiacSigns } from "../utils/sign";

export const FetureCard = (props) => {
  return (
    <div
      className={` mx-auto rounded-lg flex flex-col ${props.bg} justify-between items-start gap-5 md:p-7 p-5`}
    >
      <div>
        <img src={props.img} alt={props.img_alt} className="w-[70px] mx-auto" />
      </div>
      <div className="flex flex-col gap-1 w-full my-auto text-dark_para">
        {props.title && (
          <p style={{ lineHeight: 1.2 }} className="md:text-base">
            {props.title}
          </p>
        )}
        <p className="md:text-base ">{props.desc}</p>
      </div>
    </div>
  );
};

export function PlanetCard2({ title, desc, response, hideborder }) {
  return (
    <div className="w-full  flex max-w-4xl mx-auto flex-col  md:gap-10">
      <div className="w-full">
        <h2
          className={`${
            !hideborder
              ? "dark:border-darkheading/40 border-heading/40 border-b pb-3"
              : ""
          } font-semibold md:text-4xl text-3xl mb-5 text-heading dark:text-darkheading`}
        >
          {title}
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-y-4 gap-x-10 md:px-10">
        {response.map((item, i) => (
          <div
            key={i}
            style={{ lineHeight: 1 }}
            className={`flex gap-3 dark:text-darkparagraph text-paragraph rounded items-center`}
          >
            <Sign
              name={item.name}
              color={PlanetColor[item.name.toLowerCase()]}
            />
            {item.name} in {getDMS(item.norm_degree)} {item.sign}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProfileDetailCard2({
  userDetail,
  hidebtn,
  children,
  handleForm,
}) {
  return (
    <div className="relative flex dark:bg-darksecondary bg-secondary flex-col gap-3 md:p-10 rounded-lg p-5 w-full ">
      <h3 className="font-semibold md:border-transparent md:pb-0 pb-3 md:mb-0 mb-2 md:text-2xl text-xl text-zinc-800">
        {userDetail?.name}
      </h3>
      <p className=" flex items-center gap-3 text-para">
        <svg
          fill="currentColor"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current"
          viewBox="0 0 64.000000 64.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M100 615 c0 -20 -5 -25 -25 -25 -14 0 -37 -11 -50 -25 l-25 -24 0
-246 0 -246 25 -24 24 -25 271 0 271 0 24 25 25 24 0 246 0 246 -25 24 c-13
14 -36 25 -50 25 -20 0 -25 5 -25 25 0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25
l0 -25 -160 0 -160 0 0 25 c0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25z m0 -100
c0 -21 5 -25 30 -25 25 0 30 4 30 25 l0 25 160 0 160 0 0 -25 c0 -21 5 -25 30
-25 26 0 30 4 30 26 0 21 4 25 22 22 19 -2 24 -10 26 -40 l3 -38 -270 0 -271
0 0 33 c0 38 6 47 32 47 13 0 18 -7 18 -25z m488 -287 l-3 -173 -265 0 -265 0
-3 173 -2 172 270 0 270 0 -2 -172z"
            />
            <path
              d="M92 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
            />
            <path
              d="M192 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M292 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M392 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M492 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M92 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
            />
            <path
              d="M192 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M292 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M392 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M492 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M92 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
            />
            <path
              d="M192 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M292 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M392 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
          </g>
        </svg>
        {date(userDetail?.month, userDetail?.day)}, {userDetail?.year} at{" "}
        {Time(convert24hoursto12hours(userDetail?.hour), userDetail?.min)}{" "}
        {ampmconvertor(userDetail?.hour)}
      </p>
      <p className=" flex gap-3  items-center text-para">
        <svg
          version="1.0"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 "
          viewBox="0 0 64.000000 64.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M223 622 c-109 -39 -178 -112 -210 -221 -29 -102 4 -228 82 -306 122
-121 328 -121 450 0 91 92 118 241 64 356 -69 146 -241 223 -386 171z m77 -86
l0 -64 -42 5 c-24 3 -45 7 -47 9 -7 6 31 103 42 108 40 16 47 8 47 -58z m84
58 c13 -5 53 -101 45 -108 -2 -2 -23 -6 -46 -9 l-43 -5 0 64 c0 66 5 73 44 58z
m-200 -62 c-7 -32 -25 -40 -52 -23 -10 6 -6 15 19 35 17 15 33 25 35 23 2 -2
1 -18 -2 -35z m320 -1 c18 -20 18 -20 -8 -27 -32 -8 -32 -8 -41 34 -6 31 -5
33 12 24 10 -6 27 -19 37 -31z m-369 -63 c20 -9 25 -18 25 -47 0 -74 -6 -81
-67 -81 l-55 0 7 36 c9 49 36 104 51 104 7 0 25 -5 39 -12z m438 -22 c8 -19
19 -50 22 -70 l7 -36 -55 0 c-61 0 -67 7 -67 81 0 27 5 38 23 47 37 18 53 13
70 -22z m-307 -6 l34 0 0 -50 0 -50 -55 0 c-61 0 -61 0 -48 73 4 28 10 37 20
33 8 -4 30 -6 49 -6z m178 -27 c12 -73 12 -73 -49 -73 l-55 0 0 49 0 50 43 4
c23 2 45 4 48 5 4 1 9 -15 13 -35z m-290 -135 c3 -13 6 -39 6 -59 0 -29 -5
-38 -25 -47 -14 -7 -32 -12 -39 -12 -15 0 -42 55 -51 104 l-7 36 55 0 c48 0
55 -3 61 -22z m146 -27 l0 -49 -47 -4 c-27 -3 -49 -4 -50 -4 -1 1 -5 25 -9 54
l-7 52 57 0 56 0 0 -49z m146 -3 c-4 -29 -8 -53 -9 -54 -1 0 -23 1 -49 4 l-48
4 0 49 0 49 56 0 57 0 -7 -52z m149 16 c-9 -49 -36 -104 -51 -104 -7 0 -25 5
-39 12 -20 9 -25 18 -25 47 0 74 6 81 67 81 l55 0 -7 -36z m-295 -159 c0 -55
-3 -65 -17 -65 -29 0 -42 13 -58 59 -20 59 -20 59 23 64 20 2 40 4 45 5 4 1 7
-27 7 -63z m129 49 c8 -7 -32 -103 -45 -108 -39 -15 -44 -8 -44 58 l0 64 43
-5 c23 -3 44 -7 46 -9z m-245 -46 c3 -17 4 -33 2 -35 -2 -2 -18 8 -35 23 -25
20 -29 29 -19 35 27 17 45 9 52 -23z m324 23 c10 -6 6 -15 -19 -35 -17 -15
-33 -25 -35 -23 -2 2 -1 18 2 35 7 32 25 40 52 23z"
            />
          </g>
        </svg>
        {userDetail?.place}
      </p>
      {children}

      {hidebtn ? (
        ""
      ) : (
        <button
          onClick={handleForm}
          className="text-sm flex flex-row-reverse gap-2 items-center px-3 md:px-5 py-2 border border-current  absolute  right-3 md:right-5 top-3 md:top-5"
        >
          <span>EDIT</span>
          <svg viewBox="0 0 48 48" fill="currentColor" className="w-4 h-4">
            <path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function AspectCard({ response, title, desc, hideborder }) {
  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col gap-5 md:gap-10">
      <div className="w-full">
        <h2
          className={`${
            !hideborder
              ? "dark:border-darkheading/40 border-heading/40 border-b pb-3"
              : ""
          } font-semibold md:text-4xl text-3xl mb-5 text-heading dark:text-darkheading`}
        >
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 border md:grid-cols-2 border-zinc-300 dark:border-darksecondary/60 max-w-4xl mx-auto w-full text-paragraph dark:text-darkparagraph">
        {response.map((item, i) => (
          <div
            key={i}
            className={`${
              i % 2 == 0
                ? "border-r-0 border-l-0  border-b-0"
                : "border-b-0 md:border-l  border-l-0 border-r-0"
            } dark:border-darksecondary/60 border border-zinc-300 flex w-full text-center px-5 py-3.5 items-center `}
          >
            <div
              className={`text-[15px] overflow-x-auto text-left items-center flex gap-2`}
            >
              {item.sr && "SR"}{" "}
              <Sign
                size="text-[25px]"
                color={PlanetColor[item.aspecting_planet.toLowerCase()]}
                name={item.aspecting_planet}
              />{" "}
              {item.aspecting_planet}{" "}
              <Sign
                size="text-[25px]"
                color={typeTextColor[item.type]}
                name={item.type}
              />
              {item.type}
              <Sign
                size="text-[25px]"
                color={PlanetColor[item.aspected_planet.toLowerCase()]}
                name={item.aspected_planet}
              />
              {item.aspected_planet}{" "}
              <span className="text-xs whitespace-nowrap border border-current py-[2px] px-[5px] rounded-full  text-[#9DCDE4]/80">
                Orb {item.orb}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const OneFeture2 = (props) => {
  return (
    <div className={`flex  py-3  items-center gap-3`}>
      <p className={`dark:text-darkparagraph text-paragraph md:text-[16px]`}>
        {" "}
        {numberSufix(props.data.house)} House starts at{" "}
        <b
          className={`${colortext[props.number]} border-current text-light_bg `}
        >
          {getDMS(props.data.degree)}
        </b>{" "}
        {props.data.sign}
      </p>
    </div>
  );
};

export const PlanetHouse = ({ title, desc, detail, hideborder }) => {
  return (
    <section className="max-w-4xl mx-auto w-full pb-14 md:pb-20">
      <h2
        className={`${
          !hideborder
            ? "dark:border-darkheading/40 border-heading/40 border-b pb-3"
            : ""
        } font-semibold md:text-4xl text-3xl mb-5  text-heading dark:text-darkheading`}
      >
        {title}
      </h2>
      <div className="flex justify-between md:pt-5 flex-col gap-10">
        {/* <div className="w-full">
          <p className=" text-dark_bg p-5 bg-light_bg text-sm sm:text-base leading-7 rounded-md ">
            {desc}
          </p>
        </div> */}
        <div className="md:px-10">
          <div className="w-full  justify-between grid grid-cols-1 md:grid-cols-2">
            {detail.map((item, i) => (
              <OneFeture2 number={i} key={i} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export function CommonConfirm({ userDetail }) {
  return (
    <div className=" text-paragraph w-full    flex flex-col gap-2 mt-5">
      <span> {userDetail?.name}</span>
      <span>
        {date(userDetail?.month, userDetail?.day)}, {userDetail?.year} at{" "}
        {Time(convert24hoursto12hours(userDetail?.hour), userDetail?.min)}{" "}
        {ampmconvertor(userDetail?.hour)}
      </span>
      <span>{userDetail?.place}</span>
    </div>
  );
}

export const subDays = (date, day) => {
  const d = date.getDate() - day;
  const m = date.getMonth();
  const y = date.getFullYear();
  return new Date(y, m, d);
};

export const addDays = (date, day) => {
  const d = date.getDate() + day;
  const m = date.getMonth();
  const y = date.getFullYear();
  return new Date(y, m, d);
};

export let month = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function Sign({ name, color, size }) {
  const c = color || "text-zinc-800";
  return (
    <span className={`${c} ${size ? size : "text-[30px]"} font-zodiac`}>
      {name ? zodiacSigns[name.split(" ").join("").toLowerCase()] : ""}
    </span>
  );
}

export function getDMS(de) {
  let deg = fix30(de);
  let d = Math.floor(deg);
  let minfloat = (deg - d) * 60;
  let m = Math.floor(minfloat);
  let secfloat = (minfloat - m) * 60;
  let s = Math.round(secfloat);
  if (s === 60) {
    m++;
    s = 0;
  }
  if (m === 60) {
    d++;
    m = 0;
  }
  return d + "°" + m + "′";
}

function fix30(d) {
  let num = d;
  while (num > 30) {
    num -= 30;
  }
  return num;
}
