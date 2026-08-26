import { DataProps, PhoneProps } from "../lib/definitions";
import { specKeys, alternateName } from "@/app/lib/appData.json";
import styles from "@/app/css/Masonary.module.css";
// TODO: not always masonary??

export default function Masonary({ data }: DataProps) {
  return (
    <>
      <h3 className={styles.features}>Specs</h3>
      <div className={styles.grid}>
        {(specKeys as Array<keyof PhoneProps>).map((val) => {
          // specKeys = hard coded list of phone obj keys to render for specification table
          // val = each key
          // altName = hard coded alternate name for some keys where val not suitable)
          const specValue = data[val];
          const altName = alternateName[val];

          const checkVals = (val: string | number | true | string[]) => {
            // specification values can be either strings or arrays
            let jsx = val;
            if (Array.isArray(val)) {
              jsx = val.map((v: string) => <div key={v}>{v}</div>);
            }
            return jsx;
          };
          return (
            <>
              {specValue ? (
                <div className={styles.item} key={val}>
                  <b>{altName || val}:</b>
                  <br />
                  {checkVals(specValue)}
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
}
