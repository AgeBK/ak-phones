"use client";

import { useState } from "react";
// import { ManageImageProps } from "@/app/lib/definitions";
import { validateImage } from "@/app/lib/utils";
import { imgPath } from "@/app/lib/appData.json";
import Img from "../image";
import ManageUpload from "./manage-upload";
import styles from "@/app/css/manage/Form.module.css";

export default function ManageImage({ id, image, isDelete }: ManageImageProps) {
  const [isImageFound, setIsImageFound] = useState(false);
  const [newImage, setNewImage] = useState("");
  const phoneImg = `${imgPath}${image}`; // TODO: image?
  
  console.log("ManageImage");
  console.log(id, image, phoneImg);

  validateImage(phoneImg).then((isValid) => {
    // check if image exists
    console.log("validateImage");
    console.log(isValid);
    setIsImageFound(isValid);
  });

  return (
    <div className={styles.manageImg}>
      <ManageUpload id={image} setNewImage={setNewImage} isDelete={isDelete} />
      {/* edit */}
      {id && isImageFound && !newImage && (
        <div className={styles.existingImage}>
          <Img src={image} alt="manage image" w={160} h={160} l="eager" />
        </div>
      )}

      {/* // TODO: check if fix for caching now? */}
      {/* Next.js image caching stops new uploaded images being shown so using standard img element */}
      {id && newImage && (
        <div className={styles.newImage}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            // src={`${phoneImg}?imgId=${Date.now()}`}
            src={phoneImg}
            alt="phone"
            className={styles.uploadImg}
          />
        </div>
      )}
    </div>
  );
}
