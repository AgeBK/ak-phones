"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { addProduct, deleteProduct, updateProduct } from "@/app/lib/actions";
import { useActionState } from "react";
import InputFields from "./manage-input-fields";
import ManageProductActions from "./manage-product-actions";
import ManageDBMessages from "./manage-db-messages";
import ModalDelete from "./manage-modal-delete";
import ManageImage from "./manage-image";
// import { FormStateProps, ManageProductProps } from "@/app/lib/definitions";
import styles from "@/app/css/manage/Form.module.css";

const initialState: FormStateProps = {
  message: null,
  errors: {},
  success: false,
};

export default function ManageProduct({ product, action }: ManageProductProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [, setProductId] = useState<string>("");
  const { id, image, name } = product;
  const isDelete = action === "delete"; // TODO: can I just use action??

  // TODO: looks a bit bland??
  // TODO:
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
      window.location.href = "/manage";
    }
  }, [state]);

  // product id used for image name when adding product
  const handleChange = ({
    target: { value, id },
  }: ChangeEvent<HTMLInputElement>) => {
    if (id === "id") {
      if (value.length >= 5) {
        // TODO: 5
        setProductId(value);
      } else {
        setProductId("");
      }
    }
  };

  const enableModal = (e: React.MouseEvent<Element, MouseEvent>): void => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <form action={formAction} className={styles.container}>
      <InputFields
        product={product}
        action={action}
        handleChange={handleChange}
      />
      {/* <ManageImage id={id} image={image} isDelete={isDelete} /> */}
      <ManageProductActions isDelete={isDelete} enableModal={enableModal} />
      <ManageDBMessages errorMessages={state} />
      {showModal && (
        <ModalDelete
          id={id}
          name={name}
          initialState={initialState}
          setShowModal={setShowModal}
        />
      )}
      {/* {state.errors && <p>{state.errors}</p>} */}
    </form>
  );
}
