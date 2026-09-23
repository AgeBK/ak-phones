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
    // TODO: css instead of winWidth??
    <div className={styles.productInfo}>
      <div className={styles.carousel}>
        {/* {winWidth && winWidth < 1151 ? ( */}
        <Carousel
          images={images}
          setHeroImage={setHeroImage}
          winWidth={winWidth}
        />
        {/* ) : null} */}
      </div>
      <hr />
      <ProductFeatures descriptions={descriptions} />
      <hr />
      <Masonary data={data} />
    </div>
  );
}
