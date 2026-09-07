import { SelectProps } from "../lib/definitions";
import styles from "@/app/css/SortProducts.module.css";

export default function Select({ data, id, hdr, handleChange }: SelectProps) {
  // renders an array of strings as a drop down
  return (
    <div className={styles.sortCont}>
      {/* <label htmlFor={id}>{hdr}:</label> */}
      <label htmlFor={id}></label>
      <select
        className={styles.sortBy}
        name={id}
        id={id}
        onChange={handleChange}
      >
        <option value="">-- Brand --</option>
        {data.map((val: string) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}
