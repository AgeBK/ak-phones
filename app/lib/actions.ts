"use server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);
// const sql = neon(process.env.NEON_DATABASE_URL!); TODO:?? https://www.freecodecamp.org/news/nextjs-clerk-neon-fullstack-development/
import { z } from "zod";
const minStr = z.string();
const minNum = z.number();
const minStr3 = z
  .string()
  .min(3, { message: "Must be 3 or more characters long" });
const gt0 = z
  .number()
  .gt(0, { message: "Please enter an amount greater than 0." });
// const nonNeg = z.coerce.number().nonnegative();

const FormSchema = z.object({
  // not null values in db must be checked here
  brand: minStr,
  title: minStr,
  modelid: minStr,
  colour: minStr,
  price: gt0,
  description: minStr,
  image: minStr,
  producttype: minStr,

  // brand: minStr3,
  // title: minStr3,
  // modelnumber: minStr3,
  // modelid: minStr3,
  // price: gt0,
  // pricewas: gt0,
  // producttype: minStr3,
  // colour: minStr3,
  // colour2: minStr3,
  // colours: minStr3,
  // height: minStr3,
  // depth: minStr3,
  // width: minStr3,
  // weight: minStr3,
  // dimensions: minStr3,
  // description: minStr3,
  // descriptions: minStr3,
  // bluetooth: minStr3,
  // memory: minStr3,
  // memorycardmax: minStr3,
  // memorycardtype: minStr3,
  // displaytype: minStr3,
  // warranty: minStr3,
  // os: minStr3,
  // displaysize: minStr3,
  // displayres: minStr3,
  // video: minStr3,
  // primarycam: minStr3,
  // secondarycam: minStr3,
  // ram: minStr3,
  // sim: minStr3,
  // dualsim: minStr3,
  // nfc: minStr3,
  // battery: minStr3,
  // image: minStr3,
  // images: minStr3,
  // wirelessprotocol: minStr3,
  // barcode: gt0,
  // variation: minStr3,
  // capacity: minStr3,
  // launched: minStr3,
});

const UpdateSchema = FormSchema.omit({ id: true });

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
    barcode: Number(formData.get("barcode")),
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

  // console.log("***********");
  console.log("addProduct");
  // console.log(prevState);
  console.log(formData);
  console.log("Brand: " + formData.get("brand"));

  if (!validatedFields.success) {
    console.log("Fields NOT validated?");
    console.log(validatedFields);

    //   return {
    //     errors: validatedFields.error.flatten().fieldErrors,
    //     message: "Failed to add new product. Please check the fields above",
    //   };
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

  console.log("validatedFields.data");
  console.log(validatedFields.data);
  console.log(brand);

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
        ${colours},
        ${height},  
        ${depth},      
        ${width},
        ${weight},
        ${dimensions},
        ${description},
        ${'{"A,B,C"}'},
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
        ${images},
        ${wirelessprotocol},  
        ${barcode},  
        ${variation},
        ${capacity},  
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
  id: string,
  prevState: { message: unknown },
  formData: FormData,
) {
  console.log("updateProduct");
  console.log(prevState);
  console.log(formData);

  const validatedFields = validateFormData(UpdateSchema, formData); // TODO: update schema vs add??
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
        colours = ${colours},
        height = ${height},  
        depth = ${depth},      
        width = ${width},
        weight = ${weight},
        dimensions = ${dimensions},
        description = ${description},
        descriptions = ${descriptions},
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
        images = ${images},
        wirelessprotocol = ${wirelessprotocol},  
        barcode = ${barcode},  
        variation = ${variation},
        capacity = ${capacity},  
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
