import { PagingProps, PhoneProps } from "../lib/definitions";
import Button from "./button";
import styles from "@/app/css/Paging.module.css";

export default function Paging({
  // totalPages,
  dataLength,
  updatePaging,
  paging,
  // totalItems,
}: {
  // totalPages: number;
  dataLength: number;
  updatePaging: (page: number, pageSize: number) => void;
  paging: PagingProps;
  // totalItems: number;
}) {
  // TODO: need to attach to bottom when minimal products
  const totalPages = Math.ceil(dataLength / paging.pageSize);
  // let totalItems = data.length;
  const { page, pageSize } = paging;

  console.log("Paging");
  console.log(dataLength);
  console.log(page, pageSize);

  if (totalPages > 1) {
    return (
      <div className={styles.container}>
        <Button
          onClick={() => updatePaging(0, pageSize)}
          disabled={page === 0}
          css="paging"
        >
          &lt;&lt;
        </Button>
        <Button
          onClick={() => updatePaging(page + 1, pageSize)}
          disabled={page === 0}
          css="paging"
        >
          &lt;
        </Button>
        <div className={styles.currentPage}>{page + 1}</div>
        {totalPages > 1 && (
          <span className={styles.total}>of {totalPages}</span>
        )}
        <Button
          onClick={() => updatePaging(page + 1, pageSize)}
          disabled={page === totalPages - 1}
          css="paging"
        >
          &gt;
        </Button>
        <Button
          onClick={() => updatePaging(totalPages - 1, pageSize)}
          disabled={page === totalPages - 1}
          css="paging"
        >
          &gt;&gt;
        </Button>
      </div>
    );
  }
  return null;
}
