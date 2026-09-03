import ManageProduct from "@/app/ui/manage/manage-product";
import { productKeys } from "@/app/lib/appData.json";
import { fetchPhoneById } from "@/app/lib/data";
import { PhoneProps } from "@/app/lib/definitions";
import styles from "@/app/css/manage/ManagePage.module.css";

// import notFound from "@/app/(routes)/[urlCategory]/[urlVariety]/[urlId]/not-found";

export default async function ManagePage({ params }: ManagePageProps) {
  //  console.log("ManagePage");
  // console.log(productKeys);
  // const o = {};
  // // console.log(Object.keys(productKeys));

  // const a = Object.keys(productKeys).map((val) => `${val}`);
  // // console.log(a);

  // Object.keys(productKeys).forEach(
  //   (val) => (o[val] = `formData.get("${val}")`),
  // );
  // // console.log(o);

  const { action, id } = await params;
  // console.log(action, id ? id[0] : "no ID");

  const product: PhoneProps | undefined = id
    ? await fetchPhoneById(id[0]) // TODO: test for no result (wrong id)
    : { ...productKeys }; // fetch product or product shape

  // console.log("product");
  // console.log(product);

  if (product) {
    return (
      <div className={styles.container}>
        <h1 className={styles.hdr}>{`${action} Product`}</h1>
        <div className={styles.product}>
          <span className={styles.csv}>
            * CSV fields: For multiple values enter comma seperated values
          </span>
          <ManageProduct data={product} action={action} />
        </div>
      </div>
    );
  }
  // notFound(); // TODO: test this
}
