"use client";

import { SortProductProps } from "@/app/lib/definitions";
import { sortBy } from "@/app/lib/appData.json";
import styles from "@/app/css/SortProducts.module.css";

export default function SortProducts({
  sortOrder,
  setSortOrder,
}: SortProductProps) {
  return (
    <div className={styles.sortCont}>
      <label htmlFor="sort" className={styles.srOnly}>
        Sort:
      </label>
      <select
        className={styles.sortBy}
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        id="sort"
      >
        {sortBy.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
