"use client";

import { useState } from "react";
import { DataProps } from "@/app/lib/definitions";
import Category from "@/app/ui/category";
import ManageNav from "@/app/ui/manage/manage-nav";
import styles from "@/app/css/manage/ManagePage.module.css";

export default function ManageHome({ data }: DataProps) {
  // Manage home page
  // CategoryMain component used for category page and main manage page
  // TODO: check spirits manage
  const [manageData, setManageData] = useState(data);
  const brandArr: string[] = [];
  data.forEach(
    ({ brand }) => brandArr.indexOf(brand) < 0 && brandArr.push(brand),
  );

  console.log("ManageHome");
  console.log(brandArr);

  const handleChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    const brandArr = [...data].filter(({ brand }) => brand.startsWith(value));
    setManageData(brandArr);
  };

  return (
    <div className={styles.home}>
      <div className={styles.manageHdr}>
        <ManageNav data={brandArr} handleChange={handleChange} />
      </div>
      <Category data={manageData} cat="manage" />
    </div>
  );
}
