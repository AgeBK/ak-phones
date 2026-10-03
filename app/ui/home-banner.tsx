import { homeIntro } from "@/app/lib/appData.json";
import Img from "@/app/ui/image";
import styles from "@/app/css/Home.module.css";

export default function HomeBanner() {
  return (
    <div className={styles.homeBannerContainer}>
      <Img
        src="bg/banner.jpg"
        alt="AK Phones"
        w={1400}
        h={381}
        l="eager"
        p={true}
      />
      <div className={styles.blurb}>
        <h2>AK Phones</h2>
        <span>{homeIntro}</span>
      </div>
    </div>
  );
}
