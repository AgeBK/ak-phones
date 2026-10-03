import NavBrands from "@/app/ui/navBrands";
import HomeBanner from "@/app/ui/home-banner";
import styles from "@/app/css/Home.module.css";

export default async function Home() {
  return (
    <div className={styles.home}>
      <HomeBanner />
      <NavBrands />
    </div>
  );
}
