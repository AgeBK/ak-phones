import { fetchPhonesManage } from "@/app/lib/data";
import ManageHome from "@/app/ui/manage/manage-home";
import styles from "@/app/css/manage/ManagePage.module.css";

export default async function Page() {
  const data = await fetchPhonesManage();
  return (
    <div className={styles.container}>
      <ManageHome data={data} />
    </div>
  );
}
