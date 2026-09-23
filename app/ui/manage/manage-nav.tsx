"use client";

import { ChangeEvent } from "react";
import Link from "next/link";
import Select from "@/app/ui/select";
import Img from "@/app/ui/image";
import styles from "@/app/css/manage/ManageNav.module.css";

export default function ManageNav({
  data,
  handleChange,
}: {
  data?: string[];
  handleChange?: (event: ChangeEvent<HTMLSelectElement, Element>) => void;
}) {
  return (
    <nav className={styles.manageNav}>
      <ul className={styles.navItems}>
        <li>
          <Link href="/">
            <Img
              src="logos/AK.png"
              alt="AK Phones"
              w={36}
              h={26}
              l="eager"
              p={true}
            />
          </Link>
        </li>
        <li>
          <Link href="/manage">Manage Home</Link>
        </li>
        <li className={styles.add}>
          <Link href="/manage/add">
            <span>+</span>Add Product
          </Link>
        </li>
        <li className={styles.sales}>
          <Link href="/manage">Sales Data</Link>
        </li>
        <li>
          {data && handleChange && (
            <Select
              data={data}
              id="Brands"
              hdr="Filter brands"
              handleChange={handleChange}
            />
          )}
        </li>
      </ul>
    </nav>
  );
}
