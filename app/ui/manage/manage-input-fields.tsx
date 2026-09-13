"use client";

import {
  alternateName,
  isRequired,
  readOnlyFields,
  numOnlyFields,
} from "@/app/lib/appData.json";
import { ManageProductProps } from "@/app/lib/definitions";
import styles from "@/app/css/manage/Form.module.css";

// loads textboxes on add/edit/delete manage page
export default function ManageInputFields({
  product,
  action,
}: ManageProductProps) {
  return (
    <div className={styles.inputContainer}>
      {Object.entries(product).map(
        ([key, value]: [string, string | number]) => {
          const isReq = isRequired.includes(key);
          // const dataType = typeof productKeys[key];
          const isDisabled =
            readOnlyFields.indexOf(key) > -1 ||
            (product.id && key === "id") ||
            action === "delete";
          const prodKey = alternateName[key] || key;
          // console.log("Input");
          // console.log(key);
          // console.log(numOnlyFields.indexOf(key));

          return (
            <div key={key}>
              <label htmlFor={key} id={`lbl${key}`}>
                <span className={styles.key}>
                  {prodKey}
                  {isReq && <span className={styles.required}>*</span>}
                </span>
              </label>
              <input
                id={key}
                name={key}
                // onChange={handleChange}
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
        },
      )}
    </div>
  );
}
