import { create } from "zustand";
import { CartItemProps } from "./lib/definitions";
// TODO: CartProps??

const checkCartExisting = (
  arr: CartItemProps[],
  item: CartItemProps,
  itemQty: number,
) => {
  console.log("checkCartExisting");
  console.log(item);

  const itemExists = arr.find((val) => val.modelid === item.modelid);
  console.log("itemExists");
  console.log(itemExists ? "Yes" : "No");

  if (itemExists && itemExists.qty) {
    itemExists.qty += itemQty;
  } else {
    item.qty = itemQty;
    arr.push(item);
  }
  // check if product is part of a 2 for deal
  console.log("cart");
  console.log(arr);

  return arr;
};

export const useCartStore = create<{
  cartItems: CartItemProps[];
  addCartItem: (item: CartItemProps, qty?: number) => void;
  removeItem: (modelid: string) => void;
  deleteItem: (modelid: string) => void;
  clearCart: () => void;
  totalPrice: () => number;
  totalItems: () => number;
}>((set, get) => ({
  cartItems: [],
  addCartItem: (item: CartItemProps, qty = 1) => {
    set((state) => ({
      cartItems: checkCartExisting(state.cartItems, item, qty),
    }));
  },
  removeItem: (modelid: string) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) => {
        if (item.modelid === modelid) {
          item.qty--;
        }
        return item;
      }),
    })),
  deleteItem: (modelid: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.modelid !== modelid),
    })),
  clearCart: () => set({ cartItems: [] }),
  totalPrice: (): number => {
    return get().cartItems.reduce(
      (total, item) => total + item.price * item.qty,
      0,
    );
  },
  totalItems: (): number => {
    return get().cartItems.reduce((acc, item) => acc + item.qty, 0);
  },
}));
