import ManageProduct from "@/app/ui/manage/manage-product";
import { productKeysForm } from "@/app/lib/appData.json";
import { fetchPhoneById } from "@/app/lib/data";
import { PhoneProps } from "@/app/lib/definitions";
import styles from "@/app/css/manage/ManagePage.module.css";

// import notFound from "@/app/(routes)/[urlCategory]/[urlVariety]/[urlId]/not-found";

export default async function ManagePage({ params }: ManagePageProps) {
  // console.log("ManagePage");
  // console.log(productKeysForm);
  // const o = {};
  // // console.log(Object.keys(productKeysForm));

  // const a = Object.keys(productKeysForm).map((val) => `${val}`);
  // // console.log(a);

  // Object.keys(productKeysForm).forEach(
  //   (val) => (o[val] = `formData.get("${val}")`),
  // );
  // // console.log(o);

  const { action, id } = await params;
  const product: PhoneProps | undefined = id
    ? await fetchPhoneById(id[0])
    : { ...productKeysForm }; // fetch product or product shape

  if (product) {
    return (
      <div className={styles.container}>
        <h1 className={styles.hdr}>{`${action} Product`}</h1>
        <div className={styles.product}>
          <span className={styles.csv}>
            * CSV fields: For multiple values enter comma seperated values
          </span>
          <ManageProduct product={product} action={action} />
        </div>
      </div>
    );
  }
  // notFound(); // TODO: test this
}
