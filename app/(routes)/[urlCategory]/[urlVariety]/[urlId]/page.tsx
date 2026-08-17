import Product from "@/app/ui/product";

// The 'params' object contains dynamic segments from the URL
export default async function Page({
  params,
}: {
  params: { urlCategory: string; urlVariety: string; urlId: string };
}) {
  const urlParams = await params; // TODO:
  const { urlId, urlVariety } = urlParams;
  console.log("Product");
  console.log(urlId, urlVariety);

  return <Product />;
}
