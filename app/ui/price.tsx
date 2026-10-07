import { PriceProps } from "@/app/lib/definitions";
import styles from "@/app/css/Price.module.css";

export default function Price({ price, pricewas, css }: PriceProps) {
  return (
    <div className={`${styles.container} ${css && styles[css]}`}>
      {pricewas && <div className={styles.normal}>${pricewas}</div>}
      <div className={styles.current}>${price}</div>
    </div>
  );
}
