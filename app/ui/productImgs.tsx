import Img from "@/app/ui/image";
import Btn from "@/app/ui/button";
import { ProductImgsProps } from "@/app/lib/definitions";
import styles from "@/app/css/ProductImgs.module.css";

export default function ProductImgs({ data, setHeroImage }: ProductImgsProps) {
  return (
    <div className={styles.productImgs}>
      <div className={styles.items}>
        {data.map((val) => {
          return (
            <Btn onClick={() => setHeroImage(val)} css="btnProdImg" key={val}>
              <div className={styles.item}>
                <div className={styles.img}>
                  <Img src={val} alt={val} w={80} h={80} l="eager" p={true} />
                </div>
              </div>
            </Btn>
          );
        })}
      </div>
    </div>
  );
}
