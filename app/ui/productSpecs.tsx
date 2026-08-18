import { specs, alternateName } from "@/app/lib/appData.json";
import { DataProps, PhoneProps } from "../lib/definitions";
import styles from "@/app/css/ProductSpecs.module.css";

export default function ProductSpecs({ data }: DataProps) {
  //   console.log("ProductSpecs");
  //   console.log(data);

  return (
    <>
      <h3 className={styles.features}>Specs</h3>
      <div className={styles.grid}>
        {(specs as Array<keyof PhoneProps>).map((val: keyof PhoneProps) => (
          <>
            {data[val] ? (
              <div className={styles.item} key={val}>
                <b>{alternateName[val] ? alternateName[val] : val}:</b>
                <br />
                {data[val]}
              </div>
            ) : null}
          </>
        ))}
      </div>
    </>
  );
}
