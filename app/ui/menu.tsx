import { DataProps } from "@/app/lib/definitions";
import Link from "next/link";
import { uniqueBrands } from "@/app/lib/utils";
import styles from "@/app/css/Menu.module.css";

export default function Menu({ data }: DataProps) {
  const brands = uniqueBrands(data);

  return (
    <div className={styles.menu}>
      <div className={styles.burger}>
        <div></div>
      </div>
      <div className={styles.nav}>
        <div className={styles.wrapper}>
          <div className={styles.test}>
            <ul>
              <li key="all">
                <Link href={`/all`}>All</Link>
              </li>
              {brands.map((val: string) => (
                <li key={val}>
                  <Link href={`/${val.toLowerCase()}`}>{val}</Link>
                </li>
              ))}
              <li className={styles.light} key="manage">
                <Link href={`/manage`}>Manage</Link>
              </li>
              <li className={styles.light} key="about">
                <Link
                  href="https://github.com/AgeBK/ak-phones?tab=readme-ov-file#about"
                  target="_blank"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
