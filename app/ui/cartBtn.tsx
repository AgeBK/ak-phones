"use client";

import Btn from "@/app/ui/button";
import Img from "@/app/ui/image";
import styles from "@/app/css/CartBtn.module.css";
import { KeyNumberProps } from "../lib/definitions";

export default function CartBtn({ id }: KeyNumberProps) {
  const addCartItem = (id: number) => {
    console.log(id);
  };

  return (
    <Btn onClick={() => addCartItem(id)} css="btn">
      ADD TO CART
      <span className={styles.btnCart}>
        <Img
          src={`icons/cartEmpty.svg`}
          alt="cart empty"
          w={20}
          h={20}
          l="eager"
        />
      </span>
    </Btn>
  );
}
