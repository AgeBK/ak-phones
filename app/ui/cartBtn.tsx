"use client";

import { useCartStore } from "../store";
import { CartBtnProps } from "../lib/definitions";
import Btn from "@/app/ui/button";
import Img from "@/app/ui/image";
import styles from "@/app/css/CartBtn.module.css";

export default function CartBtn({ item }: CartBtnProps) {
  const addCartItem = useCartStore((state) => state.addCartItem);

  return (
    <Btn onClick={() => addCartItem(item)} css="btn">
      <span className={styles.btnCart}>
        ADD TO CART
        <Img
          src="icons/cartEmpty.svg"
          alt="Add to cart"
          w={20}
          h={20}
          l="eager"
          p={true}
        />
      </span>
    </Btn>
  );
}
