import Link from "next/link";
import { productKeys } from "@/app/lib/appData.json";
import { fetchPhoneById } from "@/app/lib/data";
import { ManagePageParams, PhoneProps } from "@/app/lib/definitions";
import ErrorMain from "@/app/ui/errorMain";
import ManageProduct from "@/app/ui/manage/manage-product";
import Img from "@/app/ui/image";
import styles from "@/app/css/manage/ManagePage.module.css";

export default async function ManagePage({ params }: ManagePageParams) {
  const { action, id } = await params;
  const product: PhoneProps | PhoneProps = id
    ? await fetchPhoneById(id[0])
    : { ...productKeys }; // keys only, no values

  return (
    <div className={styles.container}>
      <div className={styles.hdr}>
        <Link href="/manage">
          <Img
            src="icons/home.png"
            alt="home"
            w={16}
            h={16}
            l="eager"
            p={true}
          />
        </Link>
        <span className={styles.chevron}></span>
        <span className={styles.chevron}></span>
        <h1>{`${action} Product`}</h1>
      </div>
      {product ? (
        <div className={styles.product}>
          <span className={styles.csv}>
            * Required <br />^ CSV fields: For multiple values enter comma
            seperated values
          </span>
          <ManageProduct product={product} action={action} />
        </div>
      ) : (
        <ErrorMain />
      )}
    </div>
  );
}
