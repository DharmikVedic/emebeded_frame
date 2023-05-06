const api_url = "https://json.astrologyapi.com/v1";

export async function FetchApi(input) {
  var auth = "Basic NjIwNDU3OjJiYTdhNTRlNDJmMzlmYTZhMDU2MDJkOTYyZmM5ZWRi";
  if (input) {
    const arg = `${input.url ? input.url : api_url}/${input.apiName}`;
    const response = await fetch(arg, {
      method: "POST",
      headers: {
        Authorization:
          "Basic NjIwNDU3OjJiYTdhNTRlNDJmMzlmYTZhMDU2MDJkOTYyZmM5ZWRi",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input.userData),
    });
    return await response.json();
  } else {
    return "loading...";
  }
}

export async function PdfFetchApi(input) {
  var auth =
    "Basic NDU0NTpCeVZPSWFPREg1N1FSVmk2Q3Fzd0hYR2xjcER2ajd0WkJSb29yWQ==";
  if (input) {
    const arg = `https://pdf.astrologyapi.com/v1/${input.apiName}`;
    const response = await fetch(arg, {
      method: "POST",
      headers: {
        Authorization:
          "Basic NDU0NTpCeVZPSWFPREg1N1FSVmk2Q3Fzd0hYR2xjcER2ajd0WkJSb29yWQ==",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input.userData),
    });
    return await response.json();
  } else {
    return "loading...";
  }
}
