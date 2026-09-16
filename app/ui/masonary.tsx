import { JSX, ReactNode } from "react";
import { PhoneProps } from "../lib/definitions";
import { specKeysArr, alternateName } from "@/app/lib/appData.json";
import styles from "@/app/css/Masonary.module.css";

// renders phone specifications in a masonary style format
// specKeysArr = hard coded array of db column names to render for specification table
// val = each key
// altName = hard coded alternate name for some keys where val not suitable
export default function Masonary({ data }: { data: PhoneProps }): JSX.Element {
  const checkVals = (val: string | number | boolean | string[]) => {
    // specification values can be either strings or arrays
    // render array values in seperate divs
    let jsx: ReactNode = val;
    if (Array.isArray(val)) {
      jsx = val.map((v: string) => <div key={v}>{v}</div>);
    }
    return jsx;
  };

  return (
    <>
      <h3 className={styles.features}>Specs</h3>
      <div className={styles.grid}>
        {(specKeysArr as Array<keyof PhoneProps>).map((val) => {
          const specValue = data[val];
          const altName = (alternateName as Record<string, string>)[
            val as string
          ];
          if (specValue) {
            return (
              <div key={val as string} className={styles.item}>
                <div>
                  <b>{altName || val}:</b>
                  <br />
                  {checkVals(specValue)}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
