import { neon } from "@neondatabase/serverless";
import { PhoneProps } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import { capitalizeFirstLetter } from "./utils";
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}
const sql = neon(process.env.DATABASE_URL);

export async function fetchPhones() {
  // noStore() prevents the response from being cached. (good for dev) TODO
  noStore();
  // console.log("fetchPhones");

  try {
    const data = await sql`
      SELECT *
      FROM phones
      WHERE producttype = 'Mobile Phone'
      `;

    return data as PhoneProps[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch phones.");
  }
}

export async function fetchPhonesManage() {
  // Same as fetchPhones except ordered by created date
  // noStore() prevents the response from being cached. (good for dev) TODO

  noStore(); // TODO: google Next 16 noStore()

  try {
    const data = await sql`
      SELECT *
      FROM phones
      WHERE producttype = 'Mobile Phone'
      ORDER BY created desc
      `;

    return data as PhoneProps[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch phones.");
  }
}

export async function fetchPhonesByQry(query: string) {
  // noStore() prevents the response from being cached. (good for dev) TODO

  noStore();
  console.log("fetchPhonesByQry: " + query);

  try {
    const data = await sql`
      SELECT *
      FROM phones
      WHERE producttype = 'Mobile Phone'
      AND brand=${capitalizeFirstLetter(query)}
      `;
    console.log(data);

    return data as PhoneProps[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch phones by query.");
  }
}

export async function fetchPhoneById(query: string) {
  // noStore() prevents the response from being cached. (good for dev) TODO
  noStore();
  // console.log("fetchPhoneById");
  // console.log(query);

  try {
    const data = await sql`
      SELECT *
      FROM phones
      WHERE producttype = 'Mobile Phone'
      AND modelid=${query}
      `;

    return data[0] as PhoneProps;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch phones.");
  }
}

export async function fetchPhonesByBrand(query: string) {
  // noStore() prevents the response from being cached. (good for dev) TODO
  noStore();
  // console.log("fetchPhonesByBrand");
  // console.log(query);
  let q = "";
  if (query === "oppo") {
    // This brand is all uppercase
    q = query.toUpperCase();
  } else {
    q = capitalizeFirstLetter(query);
  }

  try {
    const data = await sql`
      SELECT *
      FROM phones
      WHERE producttype = 'Mobile Phone'
      AND brand=${q}
      `;

    return data as PhoneProps[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch phones by brand.");
  }
}

export async function fetchNavBrands() {
  // noStore() prevents the response from being cached. (good for dev) TODO
  noStore();
  // console.log("fetchNavBrands");

  try {
    const data = await sql`
      SELECT DISTINCT ON (brand) 
          brand, 
          image
      FROM phones
      WHERE producttype = 'Mobile Phone'
      `;
    // console.log(data);

    return data as PhoneProps[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch navigation brands.");
  }
}
