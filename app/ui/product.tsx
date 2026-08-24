"use client";

import { useState } from "react";
import { PhoneProps } from "@/app/lib/definitions";
import Img from "@/app/ui/image";
import Price from "@/app/ui/price";
import Link from "next/link";
import Carousel from "@/app/ui/carousel";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";
import styles from "@/app/css/Product.module.css";
import ProductInfo from "./productInfo";
import CartBtn from "./cartBtn";

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
  const winWidth = useWindowWidth();

  // console.log("Product");
  // console.log(winWidth);
  // console.log(cat, id);
  // console.log(data);
  // console.log(Object.keys(data));

  const {
    brand,
    title,
    modelid,
    modelnumber,
    price,
    pricewas,
    colour,
    description,
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
          </h3>{" "}
          <h3 className={styles.title}>
            <span>Colour:</span>
            {colour}
          </h3>
          <Price price={price} pricewas={pricewas} css="product" />
          <div className={styles.desc}>{description}</div>
          {winWidth > 1150 ? (
            <Carousel
              images={images}
              setHeroImage={setHeroImage}
              winWidth={winWidth}
            />
          ) : null}
          <CartBtn
            item={{
              modelid,
              brand,
              title,
              colour,
              image,
              price,
              pricewas,
            }}
          />
        </div>
      </div>
      <ProductInfo
        data={data}
        setHeroImage={setHeroImage}
        winWidth={winWidth}
      />
      <hr />
    </div>
  );
}
