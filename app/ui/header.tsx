"use client";

import Link from "next/link";
import styles from "@/app/css/Header.module.css";
import Img from "./image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <Link href="/">
            <Img src="logos/AK.png" alt="AK Phones" w={64} h={42} l="eager" />
          </Link>
        </div>
        <h1 className={styles.hdr}>Best phones, Best prices</h1>
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
