import { SortBrandProps } from "@/app/lib/definitions";
import styles from "@/app/css/SortProducts.module.css";

export default function SortBrands({ data, handleChange }: SortBrandProps) {
  // renders an array of strings as a drop down

  return (
    <>
      <label className={styles.srOnly} htmlFor="brands">
        Filter brands:
      </label>
      <div className={styles.sortCont}>
        <select
          className={styles.sortBy}
          name="brands"
          id="brands"
          onChange={handleChange}
        >
          <option value="">-- Brands --</option>
          {data.map((val: string) => (
            <option value={val} key={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
