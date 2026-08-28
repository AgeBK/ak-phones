import { PhoneProps } from "./definitions";

export const capitalizeFirstLetter = (val: string) =>
  val.charAt(0).toUpperCase() + val.slice(1);

export const itemsToShow = (winWidth: number) => {
  let items = 0;
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
  return items;
};

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const checkSearch = (qry: string) => {
  console.log("checkSearch");
  console.log(qry);

  const param = "search%3D";
  let searchTerm = "";
  if (qry.startsWith(param)) {
    searchTerm = qry.replace(param, "");
  }
  return searchTerm;
};

export const filterBySearch = (arr: PhoneProps[], searchTerm: string) => {
  // const searchTerm = checkSearch(filter);
  // if (searchTerm) {
  //   console.log("searchTerm");
  //   console.log(searchTerm);
  //   console.log(arr);

  arr = arr.filter(({ title, brand }) => {
    if (
      title.toLowerCase().indexOf(searchTerm) > -1 ||
      brand.toLowerCase().indexOf(searchTerm) > -1
    ) {
      return true;
    }
    return false;
  });
  //}
  console.log("arr");
  console.log(arr);

  return arr;
};

export const filterPageData = (data: PhoneProps[], catLow: string, searchTerm: string) => {
  let filteredData = [...data];
  if (searchTerm) {
    // MUI search bar
    filteredData = filterBySearch(data, searchTerm);
  } else {
    // URL brand filter
    filteredData = data.filter(
      ({ brand }: { brand: string }) => brand.toLowerCase() === catLow,
    );
    console.log("pagedData");
    console.log(filteredData);
  }
  return filteredData;
};
