import Link from "next/link";
import { ManageProps, SpiritProps } from "@/app/lib/definitions";
import Img from "@/app/ui/image";
import styles from "@/app/css/manage/ManageProducts.module.css";

// renders each row products main manage page (uses CategoryList)
export default function ManageProducts({ data }: ManageProps) {
  return (
    <div className={styles.list}>
      <div className={styles.table}>
        <header className={styles.row}>
          <div>Id</div>
          <div>Name</div>
          <div className={styles.brand}>Brand</div>
          {/* <div className={styles.spirit}>Price was</div> */}
          <div>Price</div>
          <div>Actions</div>
        </header>
        {data.map((val: SpiritProps) => {
          const {
            modelid,
            // category,
            // sub_category,
            title,
            brand,
            pricewas,
            price,
          } = val;
          return (
            <div key={modelid} className={styles.row}>
              <div>{modelid}</div>
              <div className={`${styles.col} ${styles.title}`}>{title}</div>
              <div className={`${styles.col} ${styles.brand}`}>{brand}</div>
              {/* <div className={`${styles.col} ${styles.spirit}`}>
                <span>{pricewas}</span>
              </div> */}
              <div className={`${styles.col} ${styles.price}`}>
                <span>{price}</span>
              </div>
              <div className={`${styles.col} ${styles.actions}`}>
                <Link
                  // href={`/${category.toLowerCase()}/${sub_category.toLowerCase()}/${modelid}`}
                  href={`/${brand.toLowerCase()}/${modelid}`}
                >
                  <Img src="icons/eye.svg" alt="view" w={24} h={24} l="eager" />
                </Link>
                <Link href={`/manage/edit/${modelid}`}>
                  <Img
                    src="icons/pencil.svg"
                    alt="view"
                    w={24}
                    h={24}
                    l="eager"
                  />
                </Link>
                <Link href={`/manage/delete/${modelid}`}>
                  <Img
                    src="icons/trash.svg"
                    alt="view"
                    w={24}
                    h={24}
                    l="eager"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
