"use client";

import { useCartStore } from "../store";
import { CartItemProps } from "../lib/definitions";
import Btn from "@/app/ui/button";
import Img from "@/app/ui/image";
import styles from "@/app/css/CartBtn.module.css";

// type CartBtnProps = {
//   item: PhoneProps;
// };

export default function CartBtn({ item }: CartItemProps) {
  const addCartItem = useCartStore((state) => state.addCartItem);

  console.log(Object.keys(item));

  return (
    <Btn onClick={() => addCartItem(item)} css="btn">
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
