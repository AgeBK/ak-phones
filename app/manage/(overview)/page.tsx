import { fetchPhones } from "@/app/lib/data";
import styles from "@/app/css/manage/ManagePage.module.css";
import ManageHome from "@/app/ui/manage/manage-home";

export default async function Page() {
  const data = await fetchPhones();
  return (
    <div className={styles.container}>
      <ManageHome data={data} />
    </div>
  );
}
