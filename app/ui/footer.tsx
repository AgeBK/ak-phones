import Link from "next/link";
import Img from "@/app/ui/image";
import styles from "@/app/css/Footer.module.css";

export default function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer className={styles.container}>
      <div className={styles.ak}>
        © {yr}
        <Link
          href="https://github.com/AgeBK/ak-phones?tab=readme-ov-file#about"
          target="_blank"
        >
          AK Phones
        </Link>
        All rights reserved.
        {/* <div>
          <span className={styles.manage}>
            <Link href="/manage">Manage</Link>
          </span>
        </div> */}
      </div>
      <div className={styles.payment}>
        <Img
          src="payment/payment2.png"
          alt="payment methods"
          w={200}
          h={20}
          l="eager"
          p={false}
        />
      </div>
    </footer>
  );
}
