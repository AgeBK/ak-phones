import Link from "next/link";
import Button from "@/app/ui/button";
import Img from "@/app/ui/image";
import { ManageProductActionsProps } from "@/app/lib/definitions";
import styles from "@/app/css/manage/ManageProductActions.module.css";

// functionallity for add/edit/delte buttons on main manage page
export default function ManageProductActions({
  enableModal,
  isDelete,
}: ManageProductActionsProps) {
  return (
    <div className={styles.container}>
      <Link href="/manage" className={styles.cancel}>
        <span>Cancel</span>
        <Img
          src="icons/xCircle.svg"
          alt="cancel"
          w={24}
          h={24}
          l="eager"
          p={false}
        />
      </Link>
      {isDelete ? (
        <Button css="delete" onClick={enableModal}>
          <span>Delete</span>
          <Img
            src="icons/trash.svg"
            alt="trash"
            w={24}
            h={24}
            l="eager"
            p={false}
          />
        </Button>
      ) : (
        <Button css="save" type="submit">
          <span>Save</span>
          <Img
            src="icons/save.svg"
            alt="save"
            w={24}
            h={24}
            l="eager"
            p={false}
          />
        </Button>
      )}
    </div>
  );
}
