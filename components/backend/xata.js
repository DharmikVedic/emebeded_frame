import dotenv from "dotenv";
dotenv.config();
const XATA_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.XATA_API_KEY}`,
};

export async function callXata(method, db, ep, body) {
  let url = `${process.env.XATA_DB_URL}${db + ":main/"}${ep}`;

  let xata = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: XATA_HEADER,
  });
  return await xata.json();
}

export async function getPages(pageId, tableName, dbName) {
  let ep = `tables/${tableName}/query`;
  let body = {
    filter: {
      id: pageId,
    },
  };
  let data = await callXata("POST", dbName, ep, body);
  return data.records;
}

export async function updatePageById(pageId, dbName, tableName, body) {
  let ep = `tables/${tableName}/data/` + pageId;
  let data = await callXata("PATCH", dbName, ep, body);
  return data;
}

export async function insertData(tableName, data, dbName) {
  let ep = "tables/" + tableName + "/data";
  return await callXata("POST", dbName, ep, data);
}

export async function getTableSchema(tableName, dbName) {
  let ep = "tables/" + tableName + "/schema";
  return await callXata("GET", dbName, ep, null);
}

// https://{your-workspace-slug}.{region}.xata.sh/db/db_branch_name/tables/table_name/schema
