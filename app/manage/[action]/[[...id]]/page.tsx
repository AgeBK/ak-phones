import { productKeys } from "@/app/lib/appData.json";
import { fetchPhoneById } from "@/app/lib/data";
import { ManagePageParams, PhoneProps } from "@/app/lib/definitions";
import ErrorMain from "@/app/ui/errorMain";
import ManageProduct from "@/app/ui/manage/manage-product";
import ManageNav from "@/app/ui/manage/manage-nav";
import styles from "@/app/css/manage/ManagePage.module.css";

export default async function ManagePage({ params }: ManagePageParams) {
  const { action, id } = await params;
  const product: PhoneProps | PhoneProps = id
    ? await fetchPhoneById(id[0])
    : { ...productKeys }; // fetch product or product shape

  return (
    <div className={styles.container}>
      <ManageNav />
      <h1 className={styles.hdr}>{`${action} Product`}</h1>
      {product ? (
        <div className={styles.product}>
          <span className={styles.csv}>
            * CSV fields: For multiple values enter comma seperated values
          </span>
          <ManageProduct product={product} action={action} />
        </div>
      ) : (
        <ErrorMain message="Sorry, product not found" />
      )}
    </div>
  );
}
