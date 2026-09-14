"use client";

import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { FormStateProps, ManageProductProps } from "@/app/lib/definitions";
import { addProduct, deleteProduct, updateProduct } from "@/app/lib/actions";
import { useActionState } from "react";
import InputFields from "./manage-input-fields";
import ProductActions from "./manage-product-actions";
import DBMessages from "./manage-db-messages";
import ModalDelete from "./manage-modal-delete";
import styles from "@/app/css/manage/Form.module.css";

const initialState: FormStateProps = {
  message: null,
  errors: {},
  success: false,
};

export default function ManageProduct({ product, action }: ManageProductProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { id, title } = product;
  const isDelete = action === "delete";

  // eslint-disable-next-line
  let currentActionFn: any = null;

  switch (action) {
    case "add":
      currentActionFn = addProduct;
      break;
    case "edit":
      currentActionFn = updateProduct.bind(null, id);
      break;
    case "delete":
      currentActionFn = deleteProduct.bind(null, id);
      break;
    default:
      break;
  }

  // useFormState first arg expects a function that takes 2 arguments (state, formdata)
  // state is the initial state, formData is automatically added
  // const [state, dispatch] = useActionState(currentActionFn, initialState);
  const [state, formAction] = useActionState(currentActionFn, initialState);

  useEffect(() => {
    if (state.success) {
      redirect("/manage");
    }
  }, [state]);

  const enableModal = (e: React.MouseEvent<Element, MouseEvent>): void => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <form action={formAction} className={styles.container}>
      <InputFields product={product} action={action} />
      <ProductActions isDelete={isDelete} enableModal={enableModal} />
      <DBMessages errorMessages={state} />
      {showModal && (
        <ModalDelete id={id} title={title} setShowModal={setShowModal} />
      )}
    </form>
  );
}
