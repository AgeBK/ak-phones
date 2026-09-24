import { PagingProps } from "../lib/definitions";
import Button from "@/app/ui/button";
import styles from "@/app/css/Paging.module.css";

export default function Paging({
  dataLength,
  updatePaging,
  paging,
}: PagingProps) {
  const totalPages = Math.ceil(dataLength / paging.pageSize);
  const { page, pageSize } = paging;

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
