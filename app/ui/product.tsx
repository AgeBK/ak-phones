"use client";

import { PhoneProps } from "../lib/definitions";
import Img from "./image";
import Price from "./price";
import styles from "@/app/css/Product.module.css";
import ProductImgs from "./productImgs";
import { useState } from "react";

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
  console.log(heroImage);

  // console.log(Product);
  // console.log(cat, id);
  // console.log(data);
  // console.log(Object.keys(data));

  const {
    brand,
    title,
    modelnumber,
    modelid,
    price,
    pricewas,
    producttype,
    colour,
    colour2,
    colourvar,
    colours,
    height,
    depth,
    width,
    weight,
    dimensions,
    description,
    descriptions,
    bluetooth,
    memory,
    memorycardmax,
    memorycardtype,
    displaytype,
    warranty,
    os,
    displaysize,
    displayres,
    video,
    primarycam,
    secondarycam,
    ram,
    sim,
    dualsim,
    nfc,
    battery,
    image,
    images,
    wirelessprotocol,
    barcode,
    variation,
    capacity,
    launched,
  } = data;

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.Img}>
          <Img src={heroImage || image} alt={title} w={400} h={400} l="eager" />
        </div>
        <div className={styles.details}>
          <h2 className={styles.hdr}>{title}</h2>
          <h3 className={styles.title}>
            <span>Brand:</span> {brand}
          </h3>
          <h3 className={styles.title}>
            <span>Product Code:</span> {modelnumber}
          </h3>
          <Price price_current={price} price_normal={pricewas} css="product" />
          <div className={styles.desc}>{description}</div>
          <ProductImgs data={images} setHeroImage={setHeroImage} />
        </div>
      </div>
      <div className={styles.descs}>
        <h3 className={styles.features}>Features</h3>
        {descriptions.map((val, i) => (
          <div className={styles.desc} key={i}>
            {val}
          </div>
        ))}
      </div>
    </div>
  );
}
