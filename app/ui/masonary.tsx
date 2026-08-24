import { DataProps, PhoneProps } from "../lib/definitions";
import { specs, alternateName } from "@/app/lib/appData.json";
import styles from "@/app/css/Masonary.module.css";

// TODO: not always masonary??

export default function Masonary({ data }: DataProps) {
  return (
    <>
      <h3 className={styles.features}>Specs</h3>
      <div className={styles.grid}>
        {(specs as Array<keyof PhoneProps>).map((val: keyof PhoneProps) => {
          const specsProp = data[val];
          const altName = alternateName[val];
          return (
            <>
              {specsProp ? (
                <div className={styles.item} key={val}>
                  <b>{altName || val}:</b>
                  <br />
                  {specsProp}
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
}
