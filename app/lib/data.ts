import { neon } from "@neondatabase/serverless";
import { PhoneProps } from "./definitions";
import { checkOppo } from "./utils";
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}
const sql = neon(process.env.DATABASE_URL);

export async function fetchPhones() {
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
  // Same as fetchPhones except ordered by created date descending (most recently added appear first)
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
    throw new Error("Failed to fetch phones manage.");
  }
}

export async function fetchPhoneById(query: string) {
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
    throw new Error("Failed to fetch phones by id.");
  }
}

export async function fetchPhonesByBrand(query: string) {
  const qry = checkOppo(query);

  try {
    const data = await sql`
      SELECT *
      FROM phones
      WHERE producttype = 'Mobile Phone'
      AND brand=${qry}
      `;

    return data as PhoneProps[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch phones by brand.");
  }
}

export async function fetchNavBrands() {
  try {
    const data = await sql`
      SELECT DISTINCT ON (brand)
      brand,
      image
      FROM phones
      WHERE producttype = 'Mobile Phone'
      `;

    return data as PhoneProps[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch navigation brands.");
  }
}
