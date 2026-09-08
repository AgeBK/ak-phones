"use client";

import { ChangeEvent } from "react";
import Link from "next/link";
import Select from "../select";
import styles from "@/app/css/manage/ManageSidneNav.module.css";
import Img from "../image";

export default function ManageManageNav({
  data,
  handleChange,
}: {
  data: string[];
  handleChange: (event: ChangeEvent<HTMLSelectElement, Element>) => void;
}) {
  return (
    // <>
    //   {true ? (
    <nav className={styles.manageNav}>
      <ul className={styles.navItems}>
        <Link href="/">
          <Img src="logos/AK.png" alt="AK Phones" w={36} h={22} l="eager" />
        </Link>
        <li>
          <Link href="/manage/add">
            <span>+</span>Add Product
          </Link>
        </li>
        <li>
          <Link href="/manage">Manage Home</Link>
        </li>
        <li>
          <Link href="/manage">Sales Data</Link>
        </li>
        <li>
          <Select
            data={data}
            id="Brands"
            hdr="Filter brands"
            handleChange={handleChange}
          />
        </li>
      </ul>
    </nav>
  );

  // : (
  //   <h1>
  //     <span
  //       className={styles.burger}
  //       onClick={() => setIsShow(!isShow)}
  //       onKeyDown={() => setIsShow(!isShow)}
  //       role="button"
  //       tabIndex={0}
  //     >
  //       ☰
  //     </span>
  //   </h1>
  // )}
  // </>
}
