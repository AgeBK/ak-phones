import { fetchPhones } from "@/app/lib/data";
import Category from "@/app/ui/category";
import ManageSideNav from "@/app/ui/manage/manage-sidenav";
import styles from "@/app/css/manage/ManagePage.module.css";

// Manage home page
// CategoryMain component used for category page and main manage page
export default async function Page() {
  const data = await fetchPhones();
  return (
    <div className={styles.products}>
      <ManageSideNav />
      <Category data={data} cat="manage" />
    </div>
  );
}
