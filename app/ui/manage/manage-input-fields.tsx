import React from "react";

import {
  alternateName,
  isRequired,
  readOnlyFields,
  numOnlyFields,
} from "@/app/lib/appData.json";
import { ManageProductProps } from "@/app/lib/definitions";
import styles from "@/app/css/manage/Form.module.css";

type ProductValue = string | number;
type ProductRecord = Record<string, ProductValue>;

export default function ManageInputFields({
  product,
  action,
}: ManageProductProps): React.ReactElement {
  const prod: ProductRecord = product as unknown as ProductRecord;

  return (
    <div className={styles.inputContainer}>
      {Object.entries(prod).map(([key, value]: [string, ProductValue]) => {
        const isReq: boolean = isRequired.includes(key);
        const isDisabled: boolean =
          readOnlyFields.indexOf(key) > -1 ||
          (prod.id !== undefined && key === "id") ||
          action === "delete";
        const prodKey: string = (alternateName as Record<string, string>)[key] || key;

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