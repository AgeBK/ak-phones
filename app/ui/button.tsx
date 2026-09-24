import { ButtonProps } from "../lib/definitions";
import styles from "@/app/css/Button.module.css";

export default function Button({ children, css, ...rest }: ButtonProps) {
  // generic button
  const className = css || "btn";

  return (
    <button {...rest} className={styles[className]}>
      {children}
    </button>
  );
}
