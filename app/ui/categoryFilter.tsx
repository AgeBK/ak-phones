import { PhoneProps } from "../lib/definitions";
import { filters } from "../lib/appData.json";
import Button from "./button";
import styles from "@/app/css/CategoryFilter.module.css";

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
  // console.log(filterBy);
  // console.log(filterBy.length);

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
