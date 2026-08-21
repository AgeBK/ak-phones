import { ReactNode } from "react";

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
  colourvar: string[];
  colours: string;
  bluetooth: string;
  productcode: string;
  height: string;
  depth: string;
  width: string;
  weight: string;
  memory: string;
  launched: string;
  manufacturer: string;
  warranty: string;
  barcode: string;
  os: string;
  dimensions: string;
  sim: string;
  dualsim: boolean;
  nfc: boolean;
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

export type ImgProps = {
  src: string;
  alt: string;
  w: number;
  h: number;
  l: "eager" | "lazy" | undefined;
};

export type ContainerProps = {
  children: ReactNode;
};

export type DataProps = {
  data: PhoneProps;
};

export type PriceProps = {
  price: number;
  pricewas: number;
  css: string;
};

export type PagingProps = { page: number; pageSize: number };

export type KeyStringProps = { [key: string]: string };

export type KeyNumberProps = { [key: string]: number };

export type StringPair = [string, string];
