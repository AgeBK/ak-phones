"use client";

import Link from "next/link";
import Cart from "@/app/ui/cart";
import Img from "@/app/ui/image";
import FancyText from "@/app/ui/fancyText";
import styles from "@/app/css/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <Link href="/">
            <Img src="logos/AK.png" alt="AK Phones" w={90} h={60} l="eager" />
          </Link>
        </div>
        <h1 className={styles.hdr}>
          <FancyText text="Your phone shop" css="logoHdr"></FancyText>
        </h1>
      </div>
      <div className={styles.items}>
        <Cart />
      </div>
    </header>
  );
}
