import React, { useState } from "react";
import styles from "@/app/css/Carousel.module.css";

const Carousel = () => {
  // Sample data array with 10 dummy items
  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;

  // Handler to move to the next item
  const handleNext = () => {
    if (currentIndex < items.length - itemsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Handler to move to the previous item
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
        className={styles.button}
      >
        &#9664;
      </button>

      {/* Main Track Window */}
      <div className={styles.window}>
        <div
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
          className={styles.track}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{ flex: `0 0 ${100 / itemsToShow - 2}%` }}
              className={styles.item}
            >
              <div className={styles.card}>{item}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentIndex >= items.length - itemsToShow}
        style={{
          opacity: currentIndex >= items.length - itemsToShow ? 0.5 : 1,
        }}
        className={styles.button}
      >
        &#9654;
      </button>
    </div>
  );
};

// Inline styles for zero-dependency implementation
// const styles = {
//   carouselContainer: {
//     display: "flex",
//     alignItems: "center",
//     width: "100%",
//     maxWidth: "1000px",
//     margin: "0 auto",
//   },
//   window: {
//     overflow: "hidden",
//     width: "100%",
//     margin: "0 10px",
//   },
//   track: {
//     display: "flex",
//     transition: "transform 0.4s ease-in-out",
//     width: "100%",
//   },
//   item: {
//     boxSizing: "border-box",
//     padding: "0 5px",
//   },
//   card: {
//     background: "#3b82f6",
//     color: "#fff",
//     height: "150px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: "8px",
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//   },
//   button: {
//     background: "#1f2937",
//     color: "#fff",
//     border: "none",
//     padding: "10px 15px",
//     fontSize: "18px",
//     cursor: "pointer",
//     borderRadius: "4px",
//   },
// };

export default Carousel;
