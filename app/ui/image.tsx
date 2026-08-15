import { ImgProps } from "../lib/definitions";
import Image from "next/image";

export default function Img({ src, alt, w, h, l }: ImgProps) {
  // use this for images with set height/width
  // TODO: loading?
  const imgPath = "/img/";
  return (
    <Image
      src={`${imgPath}${src}`}
      alt={alt}
      width={w}
      height={h}
      loading={l}
    />
  );
}
