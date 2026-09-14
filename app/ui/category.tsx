"use client";

import { useState } from "react";
import { PagingProps, PhoneProps } from "../lib/definitions";
import {
  capitalizeFirstLetter,
  checkSearch,
  filterPageData,
} from "../lib/utils";
import { pagingSettings, blurb } from "../lib/appData.json";
import SortProducts from "@/app/ui/sortProducts";
import Paging from "./paging";
import ItemsPerPage from "./itemsPerPage";
import CategoryFilter from "./categoryFilter";
import CategoryList from "./categoryList";
import styles from "@/app/css/Category.module.css";

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
  const catLow = cat?.toLowerCase(); // TODO:
  const searchTerm = cat && checkSearch(cat);
  const intro = blurb[catLow] || blurb["default"];
  let pagedData: PhoneProps[] = [];

  // TODO: eager above fold?
  // TODO: appData phone intros?
  // TODO: error page (no internet, turn off hotspot)
  // TODO: deal badge like officeworks
  // TODO: remove unneccassary comments and commented out stuff, & colour red at end
  // TODO: console logs

  // console.log("Category");
  // console.log(cat);
  // console.log(data);
  // console.log(searchTerm);
  // console.log(filter);
  // console.log(paging);
  // console.log("=========");
  // const prodObj = data[1];

  // console.log(Object.keys(data[1]));
  // console.log("BEFORE filter paged data");
  // console.log(pagedData);

  // filters phone data by brand or by users search term
  pagedData = filterPageData(data, catLow, searchTerm);

  if (filter) {
    // popular phones can be filtered by subcategory with filter pills that appear (Samsung, Apple, Google, Oppo)
    pagedData = [...data].filter(({ title }) => {
      if (!filter) return true;
      return title.includes(filter);
    });
  }

  // console.log("AFTER filter paged data");
  // console.log(pagedData);

  const dataLength = pagedData.length;

  // page data results (20, 40, 60, 80 per page)
  pagedData = pagedData.slice(
    paging.page * paging.pageSize,
    (paging.page + 1) * paging.pageSize,
  );

  // dataLength = pagedData.length;

  const updatePaging = (page: number, pageSize: number) => {
    // show data for next/prev page, scroll back to top of page
    if (window) {
      window.scrollTo(0, 0);
      setPaging({ page, pageSize });
    }
  };
  // console.log("pagedData");
  // console.log(pagedData);

  return (
    <div className={styles.category}>
      {/* <h1 className={styles.hdr}>{capitalizeFirstLetter(searchTerm || cat)}</h1> */}
      <div className={styles.intro}>{intro}</div>
      <div className={styles.catHdr}>
        <div className={styles.amt}>
          {dataLength} results
          {cat !== "manage" && (
            <span>
              for <b>{capitalizeFirstLetter(searchTerm || cat)}</b>
            </span>
          )}
        </div>
        <CategoryFilter catLow={catLow} setFilter={setFilter} filter={filter} />
        <SortProducts data={data} setSortOrder={setSortOrder} />
      </div>
      <CategoryList data={pagedData} cat={cat} />
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
