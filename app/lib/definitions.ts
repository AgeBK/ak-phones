import { z } from "zod";
import { ChangeEvent, ReactNode } from "react";

export type PhoneProps = {
  id: number;
  brand: string;
  title: string;
  modelnumber: string;
  modelid: string;
  price: number;
  pricewas: number;
  producttype: string;
  colour: string;
  colour2: string;
  colours: string[];
  bluetooth: string;
  height: string;
  depth: string;
  width: string;
  weight: string;
  memory: string;
  launched: string;
  warranty: string;
  barcode: string;
  os: string;
  dimensions: string;
  sim: string;
  dualsim: string;
  nfc: string;
  wirelessprotocol: string;
  displaysize: string;
  displayres: string;
  video: string;
  primarycam: string;
  secondarycam: string;
  ram: string;
  memorycardmax: string;
  memorycardtype: string;
  description: string;
  descriptions: string[];
  image: string;
  images: string[];
  battery: string;
  displaytype: string;
  variation: string[];
  capacity: string[];
};

export type CategoryProps = {
  data: PhoneProps[];
  cat: string;
};

export type ImgProps = {
  src: string;
  alt: string;
  w: number;
  h: number;
  l: "eager" | "lazy" | undefined;
  p: boolean;
};

export type ContainerProps = {
  children: ReactNode;
};

export type DataProps = {
  data: PhoneProps[];
};

export type PriceProps = {
  price: number;
  pricewas: number;
  css: string;
};

export type ButtonProps = {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  id?: string;
  css?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

export type CartProps = Pick<
  PhoneProps,
  "modelid" | "brand" | "title" | "price" | "pricewas" | "image"
>;

export type CartItemProps = {
  brand: string;
  title: string;
  modelid: string;
  price: number;
  image: string;
  qty: number;
};

export type SelectProps = {
  data: string[];
  id: string;
  hdr: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export type ManagePageParams = {
  params: KeyStringProps;
};

export type ManageProductProps = {
  product: PhoneProps;
  action: string;
};

export type FormStateProps = {
  message: string | null;
  errors: KeyStringProps;
  success: boolean | null;
};

export type ModalDeleteProps = {
  id: number;
  title: string;
  setShowModal: (show: boolean) => void;
};

export type ManageProductActionsProps = {
  enableModal: (e: React.MouseEvent<Element, MouseEvent>) => void;
  isDelete: boolean;
};

export type SearchChangeProps = {
  title: string;
  modelid: string;
  brand: string;
  image: string;
  price: number;
} | null;

// TODO: research interface
// export interface CartItemProps extends PhoneProps {
//   qty: number;
// }

export type SchemaProps = z.ZodObject<
  {
    brand: z.ZodString;
    title: z.ZodString;
    modelid: z.ZodString;
    colour: z.ZodString;
    price: z.ZodNumber;
    producttype: z.ZodString;
    description: z.ZodString;
    image: z.ZodString;
    barcode: z.ZodString;
    descriptions: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelnumber: z.ZodString;
    pricewas: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    colour2: z.ZodString;
    colours: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    height: z.ZodString;
    depth: z.ZodString;
    width: z.ZodString;
    weight: z.ZodString;
    dimensions: z.ZodString;
    bluetooth: z.ZodString;
    memory: z.ZodString;
    memorycardmax: z.ZodString;
    memorycardtype: z.ZodString;
    displaytype: z.ZodString;
    warranty: z.ZodString;
    os: z.ZodString;
    displaysize: z.ZodString;
    displayres: z.ZodString;
    video: z.ZodString;
    primarycam: z.ZodString;
    secondarycam: z.ZodString;
    ram: z.ZodString;
    sim: z.ZodString;
    dualsim: z.ZodString;
    nfc: z.ZodString;
    battery: z.ZodString;
    images: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    wirelessprotocol: z.ZodString;
    variation: z.ZodString;
    capacity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    launched: z.ZodOptional<z.ZodNullable<z.ZodString>>;
  },
  z.core.$strip
>;

export type PagingProps = { page: number; pageSize: number };

export type KeyStringProps = Record<string, string>; // same as { [key: string]: string };

export type StringPair = [string, string];
