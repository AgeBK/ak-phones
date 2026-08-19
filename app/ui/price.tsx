import { PriceProps } from "../lib/definitions";
import styles from "@/app/css/Price.module.css";

export default function Price({ price, pricewas, css }: PriceProps) {
  return (
    <div className={`${styles.container} ${styles[css]}`}>
      {/* {pricewas && pricewas > price && ( */}
      {pricewas && <div className={styles.normal}>${pricewas}</div>}
      <div className={styles.current}>${price}</div>
    </div>
  );
}
