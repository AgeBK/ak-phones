"use client";

import { useCartStore } from "@/app/store";
import { CartBtnProps, CartItemProps } from "@/app/lib/definitions";
import Btn from "@/app/ui/button";
import Img from "@/app/ui/image";
import styles from "@/app/css/CartBtn.module.css";

export default function CartBtn({ item }: CartBtnProps) {
  const addCartItem = useCartStore((state) => state.addCartItem);
  const { brand, title, modelid, price, image } = item;
  const cartItem: CartItemProps = {
    brand,
    title,
    modelid,
    price,
    image,
    qty: 1,
  };

  return (
    <Btn onClick={() => addCartItem(cartItem)} css="btn">
      <div className={styles.btnCart}>
        <span>ADD TO CART</span>
        <Img
          src="icons/cartEmpty.svg"
          alt="Add to cart"
          w={20}
          h={20}
          l="eager"
          p={true}
        />
      </div>
    </Btn>
  );
}
