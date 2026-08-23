import { fetchPhones } from "@/app/lib/data";
import Img from "@/app/ui/image";
import NavBrands from "@/app/ui/navBrands";
import CartBtn from "@/app/ui/cartBtn";
import styles from "@/app/css/Home.module.css";

// 279 phones
// 134 accessories
// 413 total

export default async function Home() {
  const dataAll = await fetchPhones();
  console.log(dataAll);

  return (
    <div className={styles.home}>
      <h1 className={styles.hdr}>Mobile Phones</h1>
      <div className={styles.homeIntro}>
        Chasing the latest smartphone tech around? Good. AK’s collection of
        mobile phones lines them all up, from the Google Pixel 11 Series to the
        best Apple iPhone, Samsung Galaxy, Google, OPPO, Motorola and many
        more!! Think proper grunt, clever AI and cameras that punch above their
        weight. Which one’s making your shortlist?
      </div>

      <NavBrands />
      <div className={styles.items}>
        {dataAll.map((val) => {
          const {
            id,
            modelID,
            brand,
            title,
            producttype,
            image,
            price,
            colour,
            os,
          } = val;

          return (
            <div className={styles.item} key={id}>
              <h2>{title}</h2>
              {/* <Img src={image} alt={title} w={100} h={100} l="lazy" />
              <div className={styles.price}>${price}</div>
              <CartBtn id={id} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
