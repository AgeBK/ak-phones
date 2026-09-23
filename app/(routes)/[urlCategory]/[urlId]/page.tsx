import { fetchPhoneById } from "@/app/lib/data";
import Product from "@/app/ui/product";

// The 'params' object contains dynamic segments from the URL
export default async function Page({
  params,
}: {
  params: Promise<{ urlId: string }>;
}) {
  const { urlId } = await params;
  const data = await fetchPhoneById(urlId);

  return <Product data={data} />;
}
