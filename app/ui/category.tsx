"use client";

import { useState } from "react";
import { CategoryProps, PagingProps, PhoneProps } from "../lib/definitions";
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

export default function Category({ data, cat }: CategoryProps) {
  const [, setSortOrder] = useState("");
  const [paging, setPaging] = useState<PagingProps>(pagingSettings);
  const [filter, setFilter] = useState("");
  const catLow = cat?.toLowerCase();
  const blurbMap: Record<string, string> = blurb;
  const intro = blurbMap[catLow || "default"];
  const searchTerm = checkSearch(cat);
  let pagedData: PhoneProps[] = [];

  // TODO: Go through every file: remove unneccassary comments and commented out stuff, & colour red at end
  // TODO: console logs
  // TODO: check server console logs
  // TODO: lighthouse/WAVE
  // TODO: full test again after todo's/mobile view
  // TODO: images to webp??

  // filters phone data by brand or by search term entered by user
  pagedData = filterPageData(data, catLow, searchTerm);

  if (filter) {
    // popular phones can be filtered by subcategory with filter pills that appear (Samsung, Apple, Google, Oppo)
    pagedData = [...data].filter(({ title }) => {
      if (!filter) return true;
      return title.includes(filter);
    });
  }

  const dataLength = pagedData.length;

  // page data results (20, 40, 60, 80 per page)
  pagedData = pagedData.slice(
    paging.page * paging.pageSize,
    (paging.page + 1) * paging.pageSize,
  );

  const updatePaging = (page: number, pageSize: number) => {
    // show data for next/prev page, scroll back to top of page
    if (window) {
      window.scrollTo(0, 0);
      setPaging({ page, pageSize });
    }
  };

  return (
    <>
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
    </>
  );
}
