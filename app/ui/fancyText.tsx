import { Dancing_Script } from "next/font/google";
import { KeyStringProps } from "@/app/lib/definitions";
import styles from "@/app/css/FancyText.module.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export default function FancyText({ text, css }: KeyStringProps) {
  return (
    <div className={`${dancingScript.className} ${styles[css]}`}>{text}</div>
  );
}
