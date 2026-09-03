"use server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);
// const sql = neon(process.env.NEON_DATABASE_URL!); TODO:?? https://www.freecodecamp.org/news/nextjs-clerk-neon-fullstack-development/
import { z } from "zod";
import { postGresArr } from "./utils";

const zStrNull = z.string().nullable().optional();
const zNumNull = z.number().nullable().optional();
const zStr = z.string();
const minNum = z.number();
const zStr3 = z
  .string()
  .min(3, { message: "Must be 3 or more characters long" });
const zStr10 = z
  .string()
  .min(3, { message: "Must be 3 or more characters long" });
const gt0 = z
  .number()
  .gt(0, { message: "Please enter an amount greater than 0." });
// const nonNeg = z.coerce.number().nonnegative();

// TODO: SIM, NFC types in DB?

const FormSchema = z.object({
  brand: zStr3,
  title: zStr3,
  modelid: zStr3,
  colour: zStr3,
  price: gt0,
  producttype: zStr3,
  description: zStr3,
  image: zStr3,
  barcode: zStr10,

  descriptions: zStrNull,
  modelnumber: zStr,
  pricewas: zNumNull,
  colour2: zStr,
  colours: zStrNull,
  height: zStr,
  depth: zStr,
  width: zStr,
  weight: zStr,
  dimensions: zStr,
  bluetooth: zStr,
  memory: zStr,
  memorycardmax: zStr,
  memorycardtype: zStr,
  displaytype: zStr,
  warranty: zStr,
  os: zStr,
  displaysize: zStr,
  displayres: zStr,
  video: zStr,
  primarycam: zStr,
  secondarycam: zStr,
  ram: zStr,
  sim: zStr,
  dualsim: zStr,
  nfc: zStr,
  battery: zStr,
  images: zStrNull,
  wirelessprotocol: zStr,
  variation: zStr,
  capacity: zStrNull,
  launched: zStrNull,
});

// const UpdateSchema = FormSchema.omit({ id: true });

const validateFormData = (Schema: SchemaProps, formData: FormData) => {
  return Schema.safeParse({
    brand: formData.get("brand"),
    title: formData.get("title"),
    modelnumber: formData.get("modelnumber"),
    modelid: formData.get("modelid"),
    price: Number(formData.get("price")),
    pricewas: Number(formData.get("pricewas")),
    producttype: formData.get("producttype"),
    colour: formData.get("colour"),
    colour2: formData.get("colour2"),
    colours: formData.get("colours"),
    height: formData.get("height"),
    depth: formData.get("depth"),
    width: formData.get("width"),
    weight: formData.get("weight"),
    dimensions: formData.get("dimensions"),
    description: formData.get("description"),
    descriptions: formData.get("descriptions"),
    bluetooth: formData.get("bluetooth"),
    memory: formData.get("memory"),
    memorycardmax: formData.get("memorycardmax"),
    memorycardtype: formData.get("memorycardtype"),
    displaytype: formData.get("displaytype"),
    warranty: formData.get("warranty"),
    os: formData.get("os"),
    displaysize: formData.get("displaysize"),
    displayres: formData.get("displayres"),
    video: formData.get("video"),
    primarycam: formData.get("primarycam"),
    secondarycam: formData.get("secondarycam"),
    ram: formData.get("ram"),
    sim: formData.get("sim"),
    dualsim: formData.get("dualsim"),
    nfc: formData.get("nfc"),
    battery: formData.get("battery"),
    image: formData.get("image"),
    images: formData.get("images"),
    wirelessprotocol: formData.get("wirelessprotocol"),
    barcode: formData.get("barcode"),
    variation: formData.get("variation"),
    capacity: formData.get("capacity"),
    launched: formData.get("launched"),
  });
};

export async function addProduct(
  prevState: FormStateProps,
  formData: FormData,
) {
  const validatedFields = validateFormData(FormSchema, formData);

  console.log("***********");
  console.log("addProduct");
  console.log(validatedFields);
  console.log(formData);
  console.log("Brand: " + formData.get("brand"));

  // if (!validatedFields.success) {
  //   console.log("Fields NOT validated?");
  //   console.log(validatedFields);

  //   //   return {
  //   //     errors: validatedFields.error.flatten().fieldErrors,
  //   //     message: "Failed to add new product. Please check the fields above",
  //   //   };
  // }

  const {
    brand,
    title,
    modelnumber,
    modelid,
    price,
    pricewas,
    producttype,
    colour,
    colour2,
    colours,
    height,
    depth,
    width,
    weight,
    dimensions,
    description,
    descriptions,
    bluetooth,
    memory,
    memorycardmax,
    memorycardtype,
    displaytype,
    warranty,
    os,
    displaysize,
    displayres,
    video,
    primarycam,
    secondarycam,
    ram,
    sim,
    dualsim,
    nfc,
    battery,
    image,
    images,
    wirelessprotocol,
    barcode,
    variation,
    capacity,
    launched,
  } = validatedFields.data;

  console.log("validatedFields.data");
  console.log(validatedFields.data);
  console.log(brand);

  // TODO: barcode not number in edit but is add??
  // TODO: edit = all strings no numbers??

  // Insert data into the database
  try {
    await sql`
      INSERT INTO "phones" (
        "brand",
        "title",
        "modelnumber",
        "modelid",
        "price",
        "pricewas",
        "producttype",
        "colour",
        "colour2",
        "colours",
        "height",
        "depth",
        "width",
        "weight",
        "dimensions",
        "description",
        "descriptions",
        "bluetooth",
        "memory",
        "memorycardmax",
        "memorycardtype",
        "displaytype",
        "warranty",
        "os",
        "displaysize",
        "displayres",
        "video",
        "primarycam",
        "secondarycam",
        "ram",
        "sim",
        "dualsim",
        "nfc",
        "battery",
        "image",
        "images",
        "wirelessprotocol",
        "barcode",
        "variation",
        "capacity",
        "launched"
       )

      VALUES(
        ${brand},
        ${title},
        ${modelnumber},
        ${modelid},
        ${price},
        ${pricewas},
        ${producttype},
        ${colour},
        ${colour2},
        ${postGresArr(colours)},
        ${height},  
        ${depth},      
        ${width},
        ${weight},
        ${dimensions},
        ${description},
        ${postGresArr(descriptions)},
        ${bluetooth},
        ${memory},
        ${memorycardmax},
        ${memorycardtype},  
        ${displaytype},      
        ${warranty},  
        ${os},
        ${displaysize},
        ${displayres},
        ${video},
        ${primarycam},
        ${secondarycam},
        ${ram},
        ${sim},  
        ${dualsim}, 
        ${nfc},
        ${battery},  
        ${image},  
        ${postGresArr(images)},
        ${wirelessprotocol},  
        ${barcode},  
        ${postGresArr(variation)},
        ${postGresArr(capacity)},
        ${launched})
    `;
  } catch (error) {
    console.log("Failed to add new product: " + error);
    return {
      message: "Database Error - Failed to add new product: \n" + error,
      errors: JSON.parse(JSON.stringify(error)),
    };
  }
  return {
    success: true,
  };
}

export async function updateProduct(
  id: number,
  prevState: { message: unknown },
  formData: FormData,
) {
  console.log("updateProduct");
  // console.log(prevState);
  // console.log(formData);
  // console.log(id);

  // TODO: 

  const validatedFields = validateFormData(FormSchema, formData); // TODO: update schema vs add??
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to update product. Please check the fields above",
    };
  }
  const {
    brand,
    title,
    modelnumber,
    modelid,
    price,
    pricewas,
    producttype,
    colour,
    colour2,
    colours,
    height,
    depth,
    width,
    weight,
    dimensions,
    description,
    descriptions,
    bluetooth,
    memory,
    memorycardmax,
    memorycardtype,
    displaytype,
    warranty,
    os,
    displaysize,
    displayres,
    video,
    primarycam,
    secondarycam,
    ram,
    sim,
    dualsim,
    nfc,
    battery,
    image,
    images,
    wirelessprotocol,
    barcode,
    variation,
    capacity,
    launched,
  } = validatedFields.data;

  // Insert data into the database
  try {
    await sql`
      UPDATE phones
        SET 
        brand = ${brand},
        title = ${title},
        modelnumber = ${modelnumber},
        modelid = ${modelid},
        price = ${price},
        pricewas = ${pricewas},
        producttype = ${producttype},
        colour = ${colour},
        colour2 = ${colour2},
        colours = ${postGresArr(colours)},
        height = ${height},  
        depth = ${depth},      
        width = ${width},
        weight = ${weight},
        dimensions = ${dimensions},
        description = ${description},
        descriptions = ${postGresArr(descriptions)},
        bluetooth = ${bluetooth},
        memory = ${memory},
        memorycardmax = ${memorycardmax},
        memorycardtype = ${memorycardtype},  
        displaytype = ${displaytype},      
        warranty = ${warranty},
        os = ${os},
        displaysize = ${displaysize},
        displayres = ${displayres},
        video = ${video},
        primarycam = ${primarycam},
        secondarycam = ${secondarycam},
        ram = ${ram},
        sim = ${sim},  
        dualsim = ${dualsim}, 
        nfc = ${nfc},
        battery = ${battery},  
        image = ${image},  
        images = ${postGresArr(images)},
        wirelessprotocol = ${wirelessprotocol},  
        barcode = ${barcode},  
        variation = ${postGresArr(variation)},
        capacity = ${postGresArr(capacity)},  
        launched = ${launched}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.log("Failed to update product: " + error);
    return {
      message: "Database Error - Failed to update product: \n" + error,
    };
  }
  return {
    success: true,
  };
}

export async function deleteProduct(id: string) {
  console.log("delete Product");
  console.log(id);

  try {
    await sql`DELETE FROM phones WHERE id = ${id}`;
    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to delete product: " + error);
    return {
      message: "Database Error - Failed to delete product:" + error,
    };
  }
}
