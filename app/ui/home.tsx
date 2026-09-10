import { homeIntro } from "@/app/lib/appData.json";
import NavBrands from "@/app/ui/navBrands";
import HomeBanner from "./home-banner";
import styles from "@/app/css/Home.module.css";

export default async function Home() {
  return (
    <div className={styles.home}>
      {/* <h1 className={styles.hdr}>Mobile Phones</h1> */}
      <HomeBanner />
      {/* <div className={styles.homeIntro}>{homeIntro}</div> */}
      <NavBrands />
    </div>
  );
}
