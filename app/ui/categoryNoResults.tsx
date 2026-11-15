import { CategoryNoResultProps } from "../lib/definitions";
import CategoryList from "./categoryList";
import styles from "@/app/css/Category.module.css";
import Img from "./image";
import Link from "next/link";

export default function CategoryNoResults({
  data,
  searchTerm,
  cat,
}: CategoryNoResultProps) {
  const onSale = data.filter(({ pricewas }) => pricewas).slice(0, 8);
  return (
    <div className={styles.category}>
      <div className={styles.noResults}>
        <h1>No results for “{searchTerm || cat}”</h1>
        <p>Check your spelling or browse a brand instead.</p>
        <div className={styles.brandLinks}>
          {["Samsung", "Apple", "Google", "Oppo"].map((b) => (
            <Link key={b} href={`/${b.toLowerCase()}`}>
              {b}
            </Link>
          ))}
        </div>
      </div>
      <section className={styles.specials}>
        <h2>Phones on special</h2>
        <CategoryList data={onSale} cat="special" />
      </section>
    </div>
  );
}
