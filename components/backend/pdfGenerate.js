import { FetchApi, PdfFetchApi } from "../utils/fetchAPI";

function generatePDFReq(data) {
  const pdf = {
    name: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    latitude: "",
    longitude: "",
    language: "",
    timezone: "",
    place: "",
    footer_link: "",
    logo_url: "",
    company_name: "",
    company_info: "",
    domain_url: "",
    company_email: "",
    company_landline: "",
    company_mobile: "",
  };
  pdf.name = data.name;
  pdf.day = data.day;
  pdf.month = data.month;
  pdf.year = data.year;
  pdf.hour = data.hour;
  pdf.minute = data.min;
  pdf.latitude = data.lat;
  pdf.longitude = data.lon;
  pdf.language = "en";
  pdf.timezone = data.tzone;
  pdf.place = data.place;
  return pdf;
}

export async function generatePDF(data) {
  if (data) {
    const ApiCall = await PdfFetchApi({
      url: "https://pdf.astrologyapi.com/v1/",
      apiName: "natal_horoscope_report/tropical",
      userData: {
        ...generatePDFReq(JSON.parse(data)),
      },
    });
    return {
      ...ApiCall,
    };
  } else {
    return false;
  }
}
