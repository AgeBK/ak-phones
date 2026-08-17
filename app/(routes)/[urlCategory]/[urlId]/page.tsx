import { fetchPhoneById } from "@/app/lib/data";
import Product from "@/app/ui/product";

// The 'params' object contains dynamic segments from the URL
export default async function Page({
  params,
}: {
  params: { urlCategory: string; urlId: string };
}) {
  const urlParams = await params; // TODO:
  const { urlCategory, urlId } = urlParams;
  // console.log("Product");
  // console.log(urlCategory, urlId);
  // console.log(typeof urlId);

  const data = await fetchPhoneById(urlId);
  // console.log(data);

  return <Product data={data} cat={urlCategory} id={urlId} />;
}
