// import { CategoryListProps } from "@/app/lib/definitions";
// import ProductItem from "@/app/ui/product/product-item";
import CategoryItems from "./categoryItems";
import ManageProducts from "./manage/manage-products";
// import ManageHeader from '../manage/manage-header';
// import Loading from './loading';
import styles from "@/app/css/CategoryList.module.css";

export default function CategoryList({ data, cat }: CategoryListProps) {
  // Loads product lists on Category page and Manage products page
  const style = cat === "manage" ? "table" : "categoryList";
  const List = cat === "manage" ? ManageProducts : CategoryItems;

  return data.length > 0 ? (
    <div className={styles[style]}>
      <List data={data} css="" hdr="" />
    </div>
  ) : (
    <div>No results.</div>
  );
}
