import { PhoneProps } from "../lib/definitions";
import Carousel from "@/app/ui/carousel";
import ProductFeatures from "@/app/ui/productFeatures";
import Masonary from "@/app/ui/masonary";
import styles from "@/app/css/ProductInfo.module.css";

export default function ProductInfo({
  data,
  setHeroImage,
  winWidth,
}: {
  data: PhoneProps;
  setHeroImage: (heroImage: string) => void;
  winWidth: number;
}) {
  const { descriptions, images } = data;
  return (
    // TODO: css instead of winWidth??
    <div className={styles.productInfo}>    
      {winWidth && winWidth < 1151 ? (
        <Carousel
          images={images}
          setHeroImage={setHeroImage}
          winWidth={winWidth}
        />
      ) : null}
      <hr />
      <ProductFeatures descriptions={descriptions} />
      <hr />
      <Masonary data={data} />
    </div>
  );
}
