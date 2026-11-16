import { PhoneProps } from "@/app/lib/definitions";

export const capitalizeFirstLetter = (val: string) =>
  val.charAt(0).toUpperCase() + val.slice(1);

export const itemsToShow = (winWidth: number | null) => {
  let items = 0;
  if (winWidth !== null) {
    switch (true) {
      case winWidth < 400:
        items = 1;
        break;
      case winWidth < 600:
        items = 2;
        break;
      case winWidth < 800:
        items = 3;
        break;
      case winWidth < 1151:
        items = 5;
        break;
      case winWidth < 1400:
        items = 4;
        break;
      case winWidth >= 1400:
        items = 5;
        break;
    }
  }
  return items;
};

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const checkSearch = (qry: string) => {
  if (qry) {
    const param = "search%3D";
    let searchTerm = "";
    if (qry.startsWith(param)) {
      searchTerm = qry.replace(param, "");
    }
    try {
      return decodeURIComponent(searchTerm);
    } catch (error) {
      return "";
    }
  }
  return "";
};

export const filterBySearch = (arr: PhoneProps[], searchTerm: string) => {
  arr = arr.filter(({ title, brand }) => {
    if (
      title.toLowerCase().indexOf(searchTerm) > -1 ||
      brand.toLowerCase().indexOf(searchTerm) > -1
    ) {
      return true;
    }
    return false;
  });
  return arr;
};

export const filterPageData = (
  data: PhoneProps[],
  catLow: string,
  searchTerm: string,
) => {
  // filters category data by url (eg: samsung) or by search term (MUI search box)
  let filteredData = [...data];
  if (catLow !== "manage" && catLow !== "all") {
    if (searchTerm) {
      // MUI search bar
      filteredData = filterBySearch(data, searchTerm.toLowerCase());
    } else {
      // URL brand filter
      filteredData = data.filter(
        ({ brand }: { brand: string }) => brand.toLowerCase() === catLow,
      );
    }
  }
  return filteredData;
};

export const validateImage = async (strUrl: string) => {
  try {
    await new Promise((resolve, reject) => {
      const img = new Image();
      img.src = strUrl;
      img.onload = () => resolve(strUrl);
      img.onerror = () => {
        reject();
      };
    });
    return true;
  } catch {
    return false;
  }
};

// converts a string to postGres friendly array
export const postGresArr = (str: string | null | undefined) =>
  str && typeof str === "string"
    ? JSON.stringify(str.split(",")).replace("[", "{").replace("]", "}")
    : null;

export const sortPhones = (arr: PhoneProps[], sortOrder: string) => {
  const sorted = [...arr];
  switch (sortOrder) {
    case "$":
      return sorted.sort((a, b) => Number(a.price) - Number(b.price));
    case "$$$":
      return sorted.sort((a, b) => Number(b.price) - Number(a.price));
    case "Sale":
      return sorted.sort((a, b) => Number(!!b.pricewas) - Number(!!a.pricewas));
    case "A-Z":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "Z-A":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sorted;
  }
};

export const uniqueBrands = (data: PhoneProps[]) => {
  const brands = data.reduce((acc, { brand }) => {
    if (acc.indexOf(brand) === -1) {
      acc.push(brand);
    }
    return acc;
  }, [] as string[]);
  return brands;
};
