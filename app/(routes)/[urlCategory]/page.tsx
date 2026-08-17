import Category from "@/app/ui/category";
import { fetchPhonesByBrand } from "@/app/lib/data";

export default async function Page({
  params,
}: {
  params: Promise<{ urlCategory: string }>;
}) {
  const { urlCategory } = await params;
  const data = await fetchPhonesByBrand(urlCategory);

  return <Category data={data} cat={urlCategory} />;
}
