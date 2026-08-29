import { DataProps, PhoneProps } from "../lib/definitions";
import { specKeysArr, alternateName } from "@/app/lib/appData.json";
import styles from "@/app/css/Masonary.module.css";
// TODO: not always masonary??

// renders phone specifications in a masonary style format
// specKeysArr = hard coded array of db column names to render for specification table
// val = each key
// altName = hard coded alternate name for some keys where val not suitable
export default function Masonary({ data }: DataProps) {
  const checkVals = (val: string | number | true | string[]) => {
    // specification values can be either strings or arrays
    // render array values in seperate divs
    let jsx = val;
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
          const altName = alternateName[val];
          if (specValue) {
            return (
              <div key={val} className={styles.item}>
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
