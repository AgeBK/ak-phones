import Link from "next/link";
import Img from "./image";
import styles from "@/app/css/Footer.module.css";

export default function Footer() {
  const yr = new Date().getFullYear();
  // TODO: height/widths in appData
  return (
    <footer className={styles.container}>
      <div className={styles.ak}>
        © {yr}
        <a
          href="https://github.com/AgeBK/ak-spirits?tab=readme-ov-file#about"
          target="_blank"
        >
          AK Spirits
        </a>
        All rights reserved.
        <div>
          <span className={styles.manage}>
            <Link href="/manage">Manage</Link>
          </span>
        </div>
      </div>
      <div className={styles.payment}>
        <Img
          src={`payment/payment2.png`}
          alt="payment methods"
          w={200}
          h={20}
          l="eager"
        />
      </div>
    </footer>
  );
}
