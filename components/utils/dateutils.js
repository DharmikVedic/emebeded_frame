export let mL = [
  ",",
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

export function date(month, date) {
  return mL[month] + " " + date;
}
// + "," + date < 10 ? (0 + "" + date) : date
export function Time(hour, min) {
  return (
    (hour < 10 ? 0 + "" + hour : hour) + ":" + (min < 10 ? 0 + "" + min : min)
  );
}

export function convert24hoursto12hours(val) {
  if (val > 12) {
    return parseInt(val) - 12;
  } else {
    return val;
  }
}

export function ampmconvertor(val) {
  if (parseInt(val) >= 12) {
    return "PM";
  } else {
    return "AM";
  }
}

export const numberSufix = (num) => {
  return num === 1 ? "1st" : num === 2 ? "2nd" : num === 3 ? "3rd" : `${num}th`;
};

// + "," + date < 10 ? (0 + "" + date) : date
