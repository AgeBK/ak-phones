"use client";

import { useState } from "react";
import { itemsToShow } from "@/app/lib/utils";
import Img from "./image";
import Btn from "./button";
import Skeleton from "./skeleton";
import styles from "@/app/css/Carousel.module.css";

export default function Carousel({
  images,
  setHeroImage,
  winWidth,
}: {
  images: string[];
  setHeroImage: (heroImage: string) => void;
  winWidth: number | null;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsCnt = itemsToShow(winWidth);

  console.log("Carousel");
  console.log(itemsCnt);

  const handleNext = () => {
    if (currentIndex < images.length - itemsCnt) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.carouselContainer}>
      {winWidth ? (
        <>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
            className={styles.button}
          >
            &#9664;
          </button>
          <div className={styles.window}>
            <div
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsCnt)}%)`,
              }}
              className={styles.track}
            >
              {images.map((val, index) => (
                <div
                  key={index}
                  style={{ flex: `0 0 ${100 / itemsCnt}%` }}
                  className={styles.item}
                >
                  <Btn
                    onClick={() => setHeroImage(val)}
                    css="btnProdImg"
                    key={val}
                  >
                    <Img
                      src={val}
                      alt={val}
                      w={140}
                      h={140}
                      l="eager"
                      p={index < 5}
                    />
                  </Btn>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            disabled={currentIndex >= images.length - itemsCnt}
            style={{
              opacity: currentIndex >= images.length - itemsCnt ? 0.5 : 1,
            }}
            className={styles.button}
          >
            &#9654;
          </button>
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}
