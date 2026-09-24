// "use client";

// import { ChangeEvent } from "react";
// import { uploadImg } from "@/app/lib/utils";
// // import { ManageUploadProps } from "@/app/lib/definitions";
// import styles from "@/app/css/manage/Form.module.css";

// export default function ManageUpload({
//   image,
//   setNewImage,
//   isDelete,
// }: ManageUploadProps) {
//   const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
//     if (image) {
//       const { files } = event.target;

//       if (files) {
//         const file = files[0];
//         const validImg =
//           file.type === "image/webp" || file.type === "image/jpg";

//         if (validImg) {
//           const isSuccess = await uploadImg(file, image);
//           if (isSuccess) setNewImage(Date.now().toString());
//         } else {
//           console.log("ManageUpload error: Invalid image: ", file.type);
//         }
//       }
//     } else {
//       console.log("ManageUpload error");
//       // console.log("ManageUpload error: Invalid image: ", image);
//     }
//   };

//   return (
//     // <div>
//     //   {image && (
//     <>
//       <label htmlFor="upload">
//         <span className={styles.key}>
//           Upload image
//           {/* <div className={styles.webp}>(.webp format only )</div> */}
//         </span>
//       </label>
//       <input
//         id="upload"
//         type="file"
//         name="file"
//         accept="image/webp"
//         onChange={onChange}
//         disabled={isDelete}
//       />
//     </>
//     //   )}
//     // </div>
//   );
// }
