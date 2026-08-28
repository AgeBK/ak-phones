"use client";

import { PagingProps, PhoneProps } from "../lib/definitions";
import {
  capitalizeFirstLetter,
  checkSearch,
  filterBySearch,
  filterPageData,
} from "../lib/utils";
import { pagingSettings, blurb, filters } from "../lib/appData.json";
import { useState } from "react";
import Img from "@/app/ui/image";
import CartBtn from "@/app/ui/cartBtn";
import SortProducts from "@/app/ui/sortProducts";
import Link from "next/link";
import Price from "@/app/ui/price";
import styles from "@/app/css/Category.module.css";
import Paging from "./paging";
import CategoryItems from "./categoryItems";
import ItemsPerPage from "./itemsPerPage";
import Button from "./button";
import CategoryFitler from "./categoryFilter";
import CategoryFilter from "./categoryFilter";

export default function Category({
  data,
  cat,
}: {
  data: PhoneProps[];
  cat: string;
}) {
  const [, setSortOrder] = useState("");
  const [paging, setPaging] = useState<PagingProps>(pagingSettings);
  const [filter, setFilter] = useState("");
  const catLow = cat.toLowerCase(); // TODO:
  const searchTerm = checkSearch(cat);
  const intro = blurb[catLow] || blurb["default"];
  let pagedData: PhoneProps[] = [];

  // TODO: eager above fold?
  // TODO: appData phone intros?
  // TODO: error page (no internet, turn off hotspot)

  console.log("Category");
  console.log(cat);
  console.log(searchTerm);
  // console.log(filter);
  // console.log(paging);
  // console.log("=========");

  // filters phone data by brand or by users search term
  pagedData = filterPageData(data, catLow, searchTerm);

  if (filter) {
    // popular phones can be filtered by subcategory with filter pills that appear (Samsung, Apple, Google, Oppo)
    pagedData = [...data].filter(({ title }) => {
      if (!filter) return true;
      return title.includes(filter);
    });
  }

  const dataLength = pagedData.length;

  pagedData = pagedData.slice(
    paging.page * paging.pageSize,
    (paging.page + 1) * paging.pageSize,
  );

  // dataLength = pagedData.length;

  const updatePaging = (page: number, pageSize: number) => {
    if (window) {
      window.scrollTo(0, 0);
      setPaging({ page, pageSize });
    }
  };
  console.log("pagedData");
  console.log(pagedData);

  return (
    <div className={styles.category}>
      {/* <h1 className={styles.hdr}>{capitalizeFirstLetter(searchTerm || cat)}</h1> */}
      <div className={styles.intro}>{intro}</div>
      <div className={styles.catHdr}>
        <div className={styles.amt}>
          {dataLength} results for{" "}
          <b>{capitalizeFirstLetter(searchTerm || cat)}</b>
        </div>
        <CategoryFilter catLow={catLow} setFilter={setFilter} filter={filter} />
        <SortProducts data={data} setSortOrder={setSortOrder} />
      </div>
      <CategoryItems pagedData={pagedData} />
      <div className={styles.pageCont}>
        <Paging
          dataLength={dataLength}
          updatePaging={updatePaging}
          paging={paging}
        />
        <ItemsPerPage
          updatePaging={updatePaging}
          paging={paging}
          dataLength={dataLength}
        />
      </div>
    </div>
  );
}
