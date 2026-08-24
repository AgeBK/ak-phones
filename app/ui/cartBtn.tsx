"use client";

import { useCartStore } from "../store";
import { CartItemProps } from "../lib/definitions";
import Btn from "@/app/ui/button";
import Img from "@/app/ui/image";
import styles from "@/app/css/CartBtn.module.css";

export default function CartBtn({ item }: CartItemProps) {
  const addCartItem = useCartStore((state) => state.addCartItem);
  const { modelid, brand, title, colour, image, price, pricewas } = item;

  return (
    <Btn
      onClick={() =>
        addCartItem({
          modelid,
          brand,
          title,
          colour,
          image,
          price,
          pricewas,
        })
      }
      css="btn"
    >
      ADD TO CART
      <span className={styles.btnCart}>
        <Img
          src={`icons/cartEmpty.svg`}
          alt="Add to cart"
          w={20}
          h={20}
          l="eager"
        />
      </span>
    </Btn>
  );
}
