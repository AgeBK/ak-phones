import { fetchNavBrands } from "../lib/data";
import { priority } from "@/app/lib/appData.json";
import Img from "./image";
import Link from "next/link";
import styles from "@/app/css/NavBrands.module.css";

export default async function NavBrands() {
  const data = await fetchNavBrands();
  data.sort((a, b) => priority.indexOf(b.brand) - priority.indexOf(a.brand)); // popular brands first

  return (
    <div className={styles.brands}>
      <div className={styles.items}>
        {data.map((val) => {
          const { brand, image } = val;
          return (
            <div className={styles.item} key={brand}>
              <Link href={`${brand.toLowerCase()}`}>
                <div className={styles.img}>
                  <Img src={image} alt={brand} w={200} h={200} l="eager" />
                </div>
                <h2 className={styles.hdr}>{brand}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
