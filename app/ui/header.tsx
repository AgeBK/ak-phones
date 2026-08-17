"use client";

import Link from "next/link";
import styles from "@/app/css/Header.module.css";
import Img from "./image";
import FancyText from "@/app/ui/fancyText";

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
        <Img
          src={`icons/cartEmpty.png`}
          alt="cart empty"
          w={20}
          h={20}
          l="eager"
        />
      </div>
    </header>
  );
}
