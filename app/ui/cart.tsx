"use client";

import { useCartStore } from "../store";
import { useState } from "react";
import { formatCurrency } from "@/app/lib/utils";
import Img from "@/app/ui/image";
import Button from "@/app/ui/button";
import styles from "@/app/css/Cart.module.css";

export default function Cart() {
  const {
    cartItems,
    removeItem,
    deleteItem,
    addCartItem,
    totalPrice,
    totalItems,
  } = useCartStore();
  const [showCart, setShowCart] = useState(false);
  const cartTotalPrice = totalPrice();
  const cartTotalItems = totalItems();

  console.log("Cart");
  console.log(cartItems);

  // console.log("cartTotalPrice: " + cartTotalPrice);
  // console.log("cartTotalItems: " + cartTotalItems);

  return (
    <div className={styles.container}>
      <div className={`${styles.cartDetails} ${showCart && styles.showCart}`}>
        {cartTotalItems > 0 && (
          <div className={styles.cartHdr}>
            <span>
              {cartTotalItems} item{cartTotalItems !== 1 ? "s" : ""} in your
              shopping cart
            </span>
            <span className={styles.close}>
              <Button onClick={() => setShowCart(!showCart)} css="cartToggle">
                <Img
                  src={`icons/close.png`}
                  alt="close"
                  w={18}
                  h={18}
                  l="eager"
                />
              </Button>
            </span>
          </div>
        )}
        {cartItems.map((item) => {
          const { modelid, brand, title, colour, image, price, pricewas, qty } =
            item;
          return (
            <div className={styles.cartItem} key={modelid}>
              <div className={styles.imgCont}>
                <Img src={`${image}`} alt={title} w={50} h={50} l="eager" />
              </div>
              <div className={styles.details}>
                <h3 className={styles.brand}>{brand}</h3>
                <div className={styles.sName}>{title}</div>
                <div className={styles.qtyCont}>
                  <span className={styles.qtyUpdate}>
                    <Button
                      onClick={() =>
                        qty === 1 ? deleteItem(modelid) : removeItem(modelid)
                      }
                      css="cartUpdate"
                    >
                      -
                    </Button>
                  </span>
                  <span className={styles.qty}>{qty}</span>
                  <span className={styles.qtyUpdate}>
                    <Button onClick={() => addCartItem(item)} css="cartUpdate">
                      +
                    </Button>
                  </span>
                </div>
              </div>
              <div className={styles.price}>
                <Button onClick={() => deleteItem(modelid)} css="cartDel">
                  <Img
                    src={`icons/bin.png`}
                    alt="delete"
                    w={18}
                    h={18}
                    l="eager"
                  />
                </Button>
                <div className={styles.price}>${price * qty}</div>
              </div>
            </div>
          );
        })}
        {cartTotalPrice > 0 && (
          <div className={styles.total}>
            <span>
              Total Items: <b>{cartTotalItems}</b>
            </span>
            <span>
              Total: <b>${cartTotalPrice}</b>
            </span>
          </div>
        )}
      </div>
      <>
        <div
          className={styles.cartCont}
          onClick={() => (cartTotalItems ? setShowCart(!showCart) : null)}
        >
          {cartTotalItems ? (
            <span className={styles.cartLight}>
              <Img src={`icons/cart.jpg`} alt="cart" w={30} h={30} l="eager" />
            </span>
          ) : (
            <span className={styles.cartLight}>
              <Img
                src={`icons/cartEmpty.jpg`}
                alt="cart"
                w={30}
                h={30}
                l="eager"
              />
            </span>
          )}
          <span className={styles.itemCnt}>{cartTotalItems}</span>
        </div>
        {cartTotalPrice > 0 && (
          <span className={styles.cartTotal}>
            {formatCurrency(cartTotalPrice)}
          </span>
        )}
      </>
    </div>
  );
}
