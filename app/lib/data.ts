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

export async function fetchPhonesByBrand(query: string) {
  // noStore() prevents the response from being cached. (good for dev) TODO
  noStore();
  // console.log("fetchPhonesByBrand");
  // console.log(query);
  const q = capitalizeFirstLetter(query);

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
