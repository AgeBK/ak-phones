export type PhoneProps = {
  id: number;
  brand: string;
  title: string;
  modelNumber: string;
  modelID: string;
  price: number;
  priceWas: number;
  producttype: string;
  colour: string;
  colour2: string;
  colourVar: string[];
  colours: string;
  blueTooth: string;
  productCode: string;
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
  dualSim: boolean;
  NFC: boolean;
  wirelessProtocol: string;
  displaySize: string;
  displayRes: string;
  video: string;
  primaryCam: string;
  secondaryCam: string;
  ram: string;
  memoryCardMax: string;
  memoryCardType: string;
  description: string;
  descriptions: string[];
  image: string;
  images: string[];
  battery: string;
  displayType: string;
};

export type ImgProps = {
  src: string;
  alt: string;
  w: number;
  h: number;
  l: "eager" | "lazy" | undefined;
};

export type KeyStringProps = { [key: string]: string };

export type KeyNumberProps = { [key: string]: number };

export type StringPair = [string, string];
