"use client";

import { useState } from "react";
import { DataProps } from "@/app/lib/definitions";
import Category from "@/app/ui/category";
import ManageSideNav from "@/app/ui/manage/manage-sidenav";
import styles from "@/app/css/manage/ManagePage.module.css";

export default function ManageHome({ data }: DataProps) {
  // Manage home page
  // CategoryMain component used for category page and main manage page
  // TODO: check spirits manage
  const [manageData, setManageData] = useState(data);
  const arr: string[] = [];

  data.forEach(({ brand }) => arr.indexOf(brand) < 0 && arr.push(brand));

  const handleChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    const arr = [...data].filter(({ brand }) => brand.startsWith(value));
    setManageData(arr);
  };

  return (
    <div className={styles.home}>
      <div className={styles.manageHdr}>
        <ManageSideNav data={arr} handleChange={handleChange} />
      </div>
      <Category data={manageData} cat="manage" />
    </div>
  );
}
