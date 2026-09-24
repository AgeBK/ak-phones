import { PhoneProps } from "@/app/lib/definitions";
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
  winWidth: number | null;
}) {
  const { descriptions, images } = data;
  return (
    <div className={styles.productInfo}>
      <div className={styles.carousel}>
        <Carousel
          images={images}
          setHeroImage={setHeroImage}
          winWidth={winWidth}
        />
      </div>
      <hr />
      <ProductFeatures descriptions={descriptions} />
      <hr />
      <Masonary data={data} />
    </div>
  );
}
