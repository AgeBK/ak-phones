"use client";

import Link from "next/link";
import Img from "@/app/ui/image";
import { DataProps, PhoneProps } from "@/app/lib/definitions";
import styles from "@/app/css/manage/ManageProducts.module.css";

// renders each row products main manage page (uses CategoryList)
export default function ManageProducts({ data }: DataProps) {
  return (
    <div className={styles.table}>
      <header className={styles.row}>
        <div>Id</div>
        <div>Name</div>
        <div className={styles.brand}>Brand</div>
        <div>Price</div>
        <div>Actions</div>
      </header>
      {data.map((val: PhoneProps) => {
        const { modelid, title, brand, price } = val;
        return (
          <div key={modelid} className={styles.row}>
            <div>{modelid}</div>
            <div className={`${styles.col} ${styles.title}`}>{title}</div>
            <div className={`${styles.col} ${styles.brand}`}>{brand}</div>
            <div className={`${styles.col} ${styles.price}`}>
              <span>{price}</span>
            </div>
            <div className={`${styles.col} ${styles.actions}`}>
              <Link href={`/${brand.toLowerCase()}/${modelid}`}>
                <Img src="icons/eye.svg" alt="view" w={24} h={24} l="eager" />
              </Link>
              <Link href={`/manage/edit/${modelid}`}>
                <Img
                  src="icons/pencil.svg"
                  alt="edit"
                  w={24}
                  h={24}
                  l="eager"
                />
              </Link>
              <Link href={`/manage/delete/${modelid}`}>
                <Img src="icons/trash.svg" alt="view" w={24} h={24} l="eager" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
