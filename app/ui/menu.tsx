import { DataProps, PhoneProps } from "../lib/definitions";
import styles from "@/app/css/Menu.module.css";
import Link from "next/link";

export default function Menu({ data }: DataProps) {
  const spirits = data.map((val: PhoneProps) => val.brand);
  const menuItems: string[] = [...new Set(spirits)].sort();

  return (
    <div className={styles.menu}>
      <div className={styles.burger}>
        <div></div>
      </div>
      <div className={styles.nav}>
        <div className={styles.wrapper}>
          <div className={styles.test}>
            <ul>
              <li className={styles.menuItem} key="All">
                <Link href={`/all`}>All</Link>
              </li>
              {menuItems.map((val: string) => (
                <li className={styles.menuItem} key={val}>
                  <Link href={`/${val.toLowerCase()}`}>{val}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
