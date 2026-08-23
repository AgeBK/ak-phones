import { PhoneProps } from "../lib/definitions";
import Link from "next/link";
import CartBtn from "./cartBtn";
import Img from "./image";
import Price from "./price";
import styles from "@/app/css/CategoryItems.module.css";

export default function CategoryItems({
  pagedData,
}: {
  pagedData: PhoneProps[];
}) {
  return (
    <div className={styles.categoryItems}>
      <div className={styles.items}>
        {pagedData.map((val: PhoneProps) => {
          const { id, modelid, brand, title, image, price, pricewas } = val;
          const link = `/${brand.toLowerCase()}/${modelid}`;
          return (
            <div className={styles.item} key={id}>
              <Link href={link}>
                <h2>{title}</h2>
                <Img src={image} alt={title} w={100} h={100} l="eager" />
                <Price price={price} pricewas={pricewas} css="" />
              </Link>
              <CartBtn id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
