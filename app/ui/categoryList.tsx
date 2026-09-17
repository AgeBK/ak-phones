import { CategoryProps } from "@/app/lib/definitions";
import CategoryItems from "./categoryItems";
import ManageProducts from "./manage/manage-products";
import styles from "@/app/css/CategoryList.module.css";

export default function CategoryList({ data, cat }: CategoryProps) {
  // Loads product lists on Category page and Manage products page
  const style = cat === "manage" ? "table" : "categoryList";
  const List = cat === "manage" ? ManageProducts : CategoryItems;

  return (
    <div className={styles[style]}>
      <List data={data} />
    </div>
  );
}
