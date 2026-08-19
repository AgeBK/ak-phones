"use client";

import { PhoneProps } from "@/app/lib/definitions";
import { sortBy } from "@/app/lib/appData.json";
import styles from "@/app/css/SortProducts.module.css";

export default function SortProducts({
  data,
  setSortOrder,
}: {
  data: PhoneProps[]; // TODO:
  setSortOrder: (value: string) => void;
}) {
  const price = (value?: string) => {
    data.sort((a, b) => {
      const priceA = Number(a.price);
      const priceB = Number(b.price);
      return value ? priceA - priceB : priceB - priceA;
    });
  };

  const saleItemsFirst = () => {
    data.sort(({ pricewas }) => (pricewas ? -1 : 1));
    return data;
  };

  const handleChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setSortOrder(value);

    switch (value) {
      case "$":
        price(value);
        break;
      case "$$$":
        price();
        break;
      case "Sale":
        saleItemsFirst();
        break;
      case "A-Z":
        data.sort((a, b) => {
          const titleA = a.title;
          const titleB = b.title;
          return titleA.localeCompare(titleB);
        });
        break;
      case "Z-A":
        data.sort((a, b) => {
          const titleA = String(a.title);
          const titleB = String(b.title);
          return titleB.localeCompare(titleA);
        });
        break;
      default:
    }
  };

  return (
    <div className={styles.container}>
      <select className={styles.sortBy} onChange={handleChange}>
        {sortBy.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
