import { PhoneProps } from "../lib/definitions";
import Img from "@/app/ui/image";
import CartBtn from "@/app/ui/cartBtn";
import styles from "@/app/css/Category.module.css";
import Link from "next/link";
import { capitalizeFirstLetter } from "../lib/utils";

export default async function Category({
  data,
  cat,
}: {
  data: PhoneProps[];
  cat: string;
}) {
  // console.log("Category");
  // console.log(data);

  return (
    <div className={styles.category}>
      <h1 className={styles.hdr}>{capitalizeFirstLetter(cat)}</h1>
      <div className={styles.amt}>{data.length} products</div>

      <div className={styles.items}>
        {data.map((val: PhoneProps) => {
          const { id, modelid, brand, title, image, price } = val;
          return (
            <div className={styles.item} key={id}>
              <Link href={`/${brand}/${modelid}`}>
                <h2>{title}</h2>
                <Img src={image} alt={title} w={100} h={100} l="lazy" />
                <div className={styles.price}>${price}</div>
              </Link>
              <CartBtn id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
