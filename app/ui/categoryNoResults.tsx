import Link from "next/link";
import { CategoryNoResultProps } from "@/app/lib/definitions";
import CategoryList from "@/app/ui/categoryList";
import { uniqueBrands } from "@/app/lib/utils";
import styles from "@/app/css/Category.module.css";

export default function CategoryNoResults({
  data,
  searchTerm,
  cat,
}: CategoryNoResultProps) {
  const brands = uniqueBrands(data);
  const onSale = data.filter(({ pricewas }) => pricewas).slice(0, 10);

  return (
    <div className={styles.category}>
      <div className={styles.noResults}>
        <h1>No results for “{searchTerm || cat}”</h1>
        <p>Check your spelling or browse a brand instead.</p>
        <div className={styles.brandLinks}>
          {brands.map((b) => (
            <Link key={b} href={`/${b.toLowerCase()}`}>
              {b}
            </Link>
          ))}
        </div>
      </div>
      {onSale.length > 0 && (
        <section className={styles.specials}>
          <h2>Phones on special</h2>
          <CategoryList data={onSale} cat="special" />
        </section>
      )}
    </div>
  );
}
