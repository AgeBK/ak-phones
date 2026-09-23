import { ImgProps } from "../lib/definitions";
import Image from "next/image";

export default function Img({ src, alt, w, h, l, p }: ImgProps) {
  // interface ImageOptimizationProps {
  //   priority?: boolean;              // Load immediately (LCP critical)
  //   loading?: 'eager' | 'lazy';      // Loading strategy
  //   quality?: number;                // 1-100, default: 75
  //   placeholder?: 'blur' | 'empty';  // Loading state
  //   blurDataURL?: string;            // Base64 blur placeholder
  //   sizes?: string;                  // Responsive breakpoints
  //   fill?: boolean;                  // Container-based sizing
  // }

  return (
    <Image
      src={`/img/${src}`}
      alt={alt}
      width={w}
      height={h}
      loading={l}
      priority={p}
    />
  );
}
