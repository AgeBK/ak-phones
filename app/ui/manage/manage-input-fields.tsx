import {
  alternateName,
  isRequired,
  readOnlyFields,
  numOnlyFields,
  csv,
} from "@/app/lib/appData.json";
import { ManageProductProps } from "@/app/lib/definitions";
import styles from "@/app/css/manage/Form.module.css";

export default function ManageInputFields({
  product,
  action,
}: ManageProductProps) {
  return (
    <div className={styles.inputContainer}>
      {Object.entries(product).map(([key, value]) => {
        const isReq = isRequired.includes(key);
        const isCSV = csv.includes(key);
        const isDisabled =
          readOnlyFields.indexOf(key) > -1 ||
          (product.id !== undefined && key === "id") ||
          action === "delete";
        const prodKey: string =
          (alternateName as Record<string, string>)[key] || key;

        return (
          <div key={key}>
            <label htmlFor={key} id={`lbl${key}`}>
              <span className={styles.key}>
                {prodKey}
                {isReq && <span className={styles.required}>*</span>}
                {isCSV && <span className={styles.required}>^</span>}
              </span>
            </label>
            <input
              id={key}
              name={key}
              className={styles.input}
              type="text"
              defaultValue={value}
              aria-labelledby={`lbl${key}`}
              disabled={isDisabled}
              required={isReq}
              pattern={
                numOnlyFields.indexOf(key) > -1 ? "^[1-9][0-9]*$" : "[^]*"
              }
            />
          </div>
        );
      })}
    </div>
  );
}
