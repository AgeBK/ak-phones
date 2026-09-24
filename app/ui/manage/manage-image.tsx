import { ManageImageProps } from "@/app/lib/definitions";
import Img from "@/app/ui/image";
import styles from "@/app/css/manage/ManageImage.module.css";

export default function ManageImage({ product }: ManageImageProps) {
  const { image, images } = product;

  return (
    <div className={styles.manageImg}>
      {image ? (
        <>
          <h2 className={styles.hdr}>Main image:</h2>
          <div className={styles.img}>
            <Img
              src={image}
              alt="main image"
              w={100}
              h={100}
              l="eager"
              p={true}
            />
          </div>
          <h2 className={styles.hdr}>Other images:</h2>
          <div className={styles.imgs}>
            {images?.map((val: string) =>
              val ? (
                <Img
                  src={val}
                  alt={val}
                  w={100}
                  h={100}
                  l="eager"
                  p={true}
                  key={val}
                />
              ) : null,
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
