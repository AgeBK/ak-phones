import Img from "./image";
import Btn from "./button";
import styles from "@/app/css/ProductImgs.module.css";

export default function ProductImgs({
  data,
  setHeroImage,
}: {
  data: string[];
  setHeroImage: (heroImage: string) => void;
}) {
  console.log("ProductImgs");
  console.log(data);

  return (
    <div className={styles.productImgs}>
      <div className={styles.items}>
        {data.map((val, i) => {
          return (
            <Btn onClick={() => setHeroImage(val)} css="btnProdImg" key={val}>
              <div className={styles.item}>
                <div className={styles.img}>
                  <Img src={val} alt={val} w={80} h={80} l="eager" />
                </div>
              </div>
            </Btn>
          );
        })}
      </div>
    </div>
  );
}
