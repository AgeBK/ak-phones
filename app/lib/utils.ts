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
