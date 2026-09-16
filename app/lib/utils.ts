import { PhoneProps } from "./definitions";

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
  const param = "search%3D";
  let searchTerm = "";
  if (qry.startsWith(param)) {
    searchTerm = qry.replace(param, "");
  }
  return searchTerm;
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
  if (searchTerm) {
    // MUI search bar
    filteredData = filterBySearch(data, searchTerm);
  } else {
    // URL brand filter
    filteredData = data.filter(
      ({ brand }: { brand: string }) => brand.toLowerCase() === catLow,
    );
  }
  return filteredData.length ? filteredData : data; // TODO: this will return all data for manage page
};

export const typeCheck = (obj: Record<string, unknown>) => {
  // Checks type of value in an object (number, string and array only)
  const o: Record<string, unknown> = {};
  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

    const val: unknown = obj[key];
    const valType: string = typeof val;

    if (Number(val) >= 0) {
      o[key] = 0;
    } else if (Array.isArray(val)) {
      o[key] = [];
    } else if (valType === "string") {
      o[key] = "string";
    } else {
      // type object or bool (not using)
    }
  }
  console.log(o);
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

export const uploadImg = async (file: Blob, imgName: string) => {
  const formData = new FormData();
  formData.append("file", file, imgName);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (result.success) {
    return true;
  } else {
    console.log("ManageUpload image FAILED");
    return false;
  }
};

// converts a string to postGres friendly array
export const postGresArr = (str: string) =>
  str
    ? JSON.stringify(str.split(",")).replace("[", "{").replace("]", "}")
    : null;
