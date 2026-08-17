import Category from "@/app/ui/category";
import { fetchPhonesByBrand } from "@/app/lib/data";

export default async function Page({
  params,
}: {
  params: Promise<{ urlCategory: string; urlVariety: string[] }>;
}) {
  const { urlCategory, urlVariety } = await params;
  const data = await fetchPhonesByBrand(urlCategory);

  return <Category data={data} />;
}
