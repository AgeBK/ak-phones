import { SelectProps } from "../lib/definitions";
import styles from "@/app/css/SortProducts.module.css";

export default function Select({ data, id, hdr, handleChange }: SelectProps) {
  // renders an array of strings as a drop down
  return (
    <>
      {" "}
      <label className={styles.label} htmlFor={id}>
        {hdr}:
      </label>
      <div className={styles.sortCont}>
        <select
          className={styles.sortBy}
          name={id}
          id={id}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
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
