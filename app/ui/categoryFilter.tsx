import { filters } from "../lib/appData.json";
import Button from "./button";
import styles from "@/app/css/CategoryFilter.module.css";

// For popular phones with more products,
// Samsung, Apple, OPPO
// pill style filters will render on Category page
export default function CategoryFilter({
  catLow,
  setFilter,
  filter,
}: {
  catLow: string;
  setFilter: (filter: string) => void;
  filter: string;
}) {
  const filterBy = filters[catLow];

  // console.log("CategoryFilter");
  // console.log(filters);
  // console.log(filterBy);

  const handleFilter = (val: string) =>
    filter === val ? setFilter("") : setFilter(val);

  return (
    <div className={styles.filterCont}>
      {filterBy
        ? filterBy.map((val: string) => (
            <div
              className={`${styles.filters} ${filter === val && styles.selected}`}
              key={val}
            >
              <Button onClick={() => handleFilter(val)} css="filters">
                {val}
              </Button>
            </div>
          ))
        : null}
    </div>
  );
}
