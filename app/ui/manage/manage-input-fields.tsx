"use client";

// import { InputFieldsProps } from '@/app/lib/definitions';
// import { deCamelise } from '@/app/lib/utils';
import {
  alternateName,
  isRequired,
  readOnlyFields,
} from "@/app/lib/appData.json";
import styles from "@/app/css/manage/Form.module.css";

// loads textboxes on add/edit/delete manage page
export default function ManageInputFields({
  product,
  action,
  handleChange,
}: InputFieldsProps) {
  // console.log("ManageInputFields");
  // console.log(readOnlyFields);
  // console.log(location.pathname);
  const arr = [];

  Array.from({ length: 7 }, (_, i) => arr.push(`31_${i + 1}.webp`));

  // console.log(arr);

  return (
    <div className={styles.inputContainer}>
      {Object.entries(product).map(
        ([key, value]: [string, string | number]) => {
          const isReq = isRequired.includes(key);
          const dataType = typeof value === "number" ? "number" : "text";
          const isDisabled =
            readOnlyFields.indexOf(key) > -1 ||
            (product.id && key === "id") ||
            action === "delete";
          const prodKey = alternateName[key] || key;
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
                onChange={handleChange}
                className={styles.input}
                type={dataType}
                defaultValue={value}
                aria-labelledby={`lbl${key}`}
                disabled={isDisabled}
                required={isReq}
              />
            </div>
          );
        },
      )}
    </div>
  );
}
