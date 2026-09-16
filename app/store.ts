import { create } from "zustand";
import { CartItemProps, PhoneProps } from "./lib/definitions";

const checkCartExisting = (
  arr: CartItemProps[],
  item: PhoneProps,
  itemQty: number,
) => {
  // check if new item or existing
  console.log("checkCartExisting");
  console.log(item);

  const { modelid, brand, title, image, price } = item;

  const cartItem: CartItemProps = {
    modelid,
    brand,
    title,
    image,
    price,
    qty: 1,
  };

  const itemExists = arr.find((val) => val.modelid === item.modelid);
  if (itemExists && itemExists.qty) {
    itemExists.qty += itemQty;
  } else {
    // item.qty = itemQty;
    arr.push(cartItem);
  }
  return arr;
};

export const useCartStore = create<{
  cartItems: CartItemProps[];
  addCartItem: (item: PhoneProps) => void;
  removeItem: (modelid: string) => void;
  deleteItem: (modelid: string) => void;
  clearCart: () => void;
  totalPrice: () => number;
  totalItems: () => number;
}>((set, get) => ({
  cartItems: [],
  addCartItem: (item: PhoneProps) => {
    set((state) => ({
      cartItems: checkCartExisting(state.cartItems, item, 1),
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
