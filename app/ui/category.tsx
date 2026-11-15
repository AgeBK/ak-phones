"use client";

import { useState } from "react";
import { CategoryProps, PageProps, PhoneProps } from "@/app/lib/definitions";
import { checkSearch, filterPageData } from "@/app/lib/utils";
import { pagingSettings, blurb } from "@/app/lib/appData.json";
import SortProducts from "@/app/ui/sortProducts";
import Paging from "@/app/ui/paging";
import ItemsPerPage from "@/app/ui/itemsPerPage";
import CategoryFilter from "@/app/ui/categoryFilter";
import CategoryList from "@/app/ui/categoryList";
import CategoryNoResults from "@/app/ui/categoryNoResults";
import styles from "@/app/css/Category.module.css";

export default function Category({ data, cat }: CategoryProps) {
  const [sortOrder, setSortOrder] = useState("");
  const [paging, setPaging] = useState<PageProps>(pagingSettings);
  const [filter, setFilter] = useState("");
  const catLow = cat?.toLowerCase();
  const blurbMap: Record<string, string> = blurb;
  const intro = blurbMap[catLow] || blurbMap["default"];
  const searchTerm = checkSearch(cat);
  let pagedData: PhoneProps[] = [];

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

  // reset to page 0 when filter/sorting changes
  const resetPage = () => setPaging((p) => ({ ...p, page: 0 }));

  const handleFilter = (val: string) => {
    setFilter(val);
    resetPage();
  };

  const handleSort = (val: string) => {
    setSortOrder(val);
    resetPage();
  };

  if (dataLength === 0) {
    // alternate view for nothing returned
    return <CategoryNoResults data={data} searchTerm={searchTerm} cat={cat} />;
  }

  return (
    <div className={styles.category}>
      <div className={styles.intro}>{intro}</div>
      <div className={styles.catHdr}>
        <div className={styles.amt}>
          {dataLength} results
          {cat !== "manage" && (
            <span>
              for <b>{searchTerm || cat}</b>
            </span>
          )}
        </div>
        <CategoryFilter
          catLow={catLow}
          setFilter={handleFilter}
          filter={filter}
        />
        <SortProducts
          data={data}
          sortOrder={sortOrder}
          setSortOrder={handleSort}
        />
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
