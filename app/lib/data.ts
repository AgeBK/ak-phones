import { neon } from "@neondatabase/serverless";
import { PhoneProps } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}
const sql = neon(process.env.DATABASE_URL);

// Promise<Record<string, string | number>>[]
export async function fetchPhones() {
  // noStore() prevents the response from being cached. (good for dev) TODO
  noStore();
  console.log("fetchPhones");

  try {
    const data = [];
    // const data: Record<string, string | number>[] = await sql`
    const dataAll = await sql`
      SELECT *
      FROM phones
      WHERE producttype = 'Mobile Phone'
      `;

    const dataDistinct = await sql`
      SELECT DISTINCT brand
      FROM phones
      WHERE producttype = 'Mobile Phone'
      `;

    // console.log(data);
    data.push(dataAll, dataDistinct);

    return data as [PhoneProps[], PhoneProps];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch phones.");
  }
}
