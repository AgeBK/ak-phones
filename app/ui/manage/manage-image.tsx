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
  // const imgURL = `${imgPath}/${id}.webp`; // TODO: appData?
  const imgURL = `${imgPath}/${image}`; // TODO: image?
  console.log("ManageImage");
  console.log(imgURL);

  validateImage(imgURL).then((isValid) => {
    // check if image exists
    // console.log("validateImage");
    // console.log(isValid);
    // setIsImageFound(isValid);
  });

  return (
    <div className={styles.manageImg}>
      <ManageUpload id={image} setNewImage={setNewImage} isDelete={isDelete} />
      {/* {id && isImageFound && !newImage && ( */}
      {id && isImageFound && !newImage && (
        <div className={styles.existingImage}>
          {/* <ImgFill
            src={`spirits/${id}.webp`}
            alt={"TODO"}
            css="product160h"
            priority={true} // priority = max in view onload
          /> */}
          <Img src={image} alt="manage image" w={160} h={160} l="eager" />
        </div>
      )}

      {/* // TODO: check if fix for caching now? */}
      {/* Next.js image caching stops new uploaded images being shown so using standard img element */}
      {id && newImage && (
        <div className={styles.newImage}>
          <img
            src={`${imgURL}?imgId=${Date.now()}`}
            alt="wine"
            className={styles.uploadImg}
          />
        </div>
      )}
    </div>
  );
}
