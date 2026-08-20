"use client";

import { PhoneProps } from "../lib/definitions";
import { capitalizeFirstLetter } from "../lib/utils";
import { useState } from "react";
import Img from "@/app/ui/image";
import CartBtn from "@/app/ui/cartBtn";
import SortProducts from "@/app/ui/sortProducts";
import Link from "next/link";
import Price from "@/app/ui/price";
import styles from "@/app/css/Category.module.css";

export default function Category({
  data,
  cat,
}: {
  data: PhoneProps[];
  cat: string;
}) {
  const [, setSortOrder] = useState("");
  // TODO: eager above fold?
  // console.log("Category");
  // console.log(data);

  return (
    <div className={styles.category}>
      <h1 className={styles.hdr}>{capitalizeFirstLetter(cat)}</h1>
      <div className={styles.catHdr}>
        <div className={styles.amt}>{data.length} products</div>
        <SortProducts data={data} setSortOrder={setSortOrder} />
      </div>
      <div className={styles.items}>
        {data.map((val: PhoneProps) => {
          const { id, modelid, brand, title, image, price, pricewas } = val;
          const link = `/${brand.toLowerCase()}/${modelid}`;
          return (
            <div className={styles.item} key={id}>
              <Link href={link}>
                <h2>{title}</h2>
                <Img src={image} alt={title} w={100} h={100} l="eager" />
                <Price price={price} pricewas={pricewas} css="" />
              </Link>
              <CartBtn id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
