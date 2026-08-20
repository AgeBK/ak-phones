import React from "react";
import Carousel from "@/app/ui/carousel";
import ProductFeatures from "@/app/ui/ProductFeatures";
import Masonary from "@/app/ui/masonary";
import { PhoneProps } from "../lib/definitions";

import styles from "@/app/css/ProductInfo.module.css";

export default function ProductInfo({
  data,
  setHeroImage,
  winWidth,
}: {
  data: PhoneProps;
  setHeroImage: (heroImage: string) => void;
  winWidth: number;
}) {
  const { descriptions, images } = data;
  return (
    <div className={styles.productInfo}>
      {winWidth < 1151 ? (
        <Carousel
          images={images}
          setHeroImage={setHeroImage}
          winWidth={winWidth}
        />
      ) : null}
      <ProductFeatures descriptions={descriptions} />
      <Masonary data={data} />
    </div>
  );
}
