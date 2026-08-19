import React, { useRef } from "react";
import styles from "@/app/css/C.module.css";

export default function C() {
  const scrollRef = useRef(null);

  const scrollByOne = (direction) => {
    console.log(direction);

    if (scrollRef.current) {
      // Find one card's width plus the gap
      const card = scrollRef.current.querySelector(".carouselCard");
      console.log("card");
      console.log(card);

      if (card) {
        const cardStyle = window.getComputedStyle(card);
        const cardWidth =
          card.offsetWidth + parseInt(cardStyle.marginRight || 16, 10);
        scrollRef.current.scrollBy({
          left: direction === "left" ? -cardWidth : cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const items = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className={styles.carouselContainer}>
      <button
        className={styles.carouselBtn}
        onClick={() => scrollByOne("left")}
      >
        &lt;
      </button>

      <div className={styles.carouselTrack} ref={scrollRef}>
        {items.map((item) => (
          <div className={styles.carouselCard} key={item}>
            <h3>Item {item}</h3>
          </div>
        ))}
      </div>

      <button
        className={styles.carouselBtn}
        onClick={() => scrollByOne("right")}
      >
        &gt;
      </button>
    </div>
  );
}
