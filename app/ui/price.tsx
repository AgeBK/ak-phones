import { PriceProps } from "../lib/definitions";
import styles from "@/app/css/Price.module.css";

export default function Price({
  price_current,
  price_normal,
  css,
}: PriceProps) {
  return (
    <div className={`${styles.container} ${styles[css]}`}>
      {price_normal && price_normal > price_current && (
        <div className={styles.normal}>${price_normal}</div>
      )}
      <div className={styles.current}>${price_current}</div>
    </div>
  );
}
