"use client";

import { useState } from "react";
import { PhoneProps } from "@/app/lib/definitions";
import Img from "./image";
import Price from "./price";
import styles from "@/app/css/Product.module.css";
import ProductImgs from "./productImgs";
import Carousel from "./carousel";
import ProductSpecs from "./productSpecs";
import ProductFeatures from "./ProductFeatures";
import Link from "next/link";
import Masonary from "./masonary";

// http://localhost:3000/Samsung/S26U256WT TODO: (some images wider than others)

export default function Product({
  data,
  cat,
  id,
}: {
  data: PhoneProps;
  cat: string;
  id: string;
}) {
  const [heroImage, setHeroImage] = useState<string>("");
  console.log("Product");
  // console.log(Product);
  // console.log(cat, id);
  // console.log(data);
  // console.log(Object.keys(data));

  const {
    brand,
    title,
    modelnumber,
    price,
    pricewas,
    description,
    descriptions,
    image,
    images,
  } = data;

  return (
    <div className={styles.productCont}>
      <div className={styles.product}>
        <div className={styles.imgCont}>
          <Img src={heroImage || image} alt={title} w={400} h={400} l="eager" />
        </div>
        <div className={styles.details}>
          <h2 className={styles.hdr}>{title}</h2>
          <h3 className={styles.title}>
            <span>Brand:</span>
            <Link href={`/${brand.toLowerCase()}`} className={styles.brand}>
              {brand}
            </Link>
          </h3>
          <h3 className={styles.title}>
            <span>Product Code:</span>
            {modelnumber}
          </h3>
          <Price price_current={price} price_normal={pricewas} css="product" />
          <div className={styles.desc}>{description}</div>
          {/* <ProductImgs data={images} setHeroImage={setHeroImage} /> */}
          {/* <Carousel data={images} setHeroImage={setHeroImage} /> */}
        </div>
      </div>
      <ProductFeatures descriptions={descriptions} />
      <hr />
      {/* <ProductSpecs data={data} /> */}
      <hr /> <Masonary />
    </div>
  );
}

// const specs = [
//   "modelid",
//   "producttype",
//   "colour",
//   "colour2",
//   "colourvar",
//   "colours",
//   "height",
//   "depth",
//   "width",
//   "weight",
//   "dimensions",
//   "bluetooth",
//   "memory",
//   "memorycardmax",
//   "memorycardtype",
//   "displaytype",
//   "warranty",
//   "os",
//   "displaysize",
//   "displayres",
//   "video",
//   "primarycam",
//   "secondarycam",
//   "ram",
//   "sim",
//   "dualsim",
//   "nfc",
//   "battery",
//   "wirelessprotocol",
//   "barcode",
//   "variation",
//   "capacity",
//   "launched",
// ];
