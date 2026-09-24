import { homeIntro } from "../lib/appData.json";
import Img from "./image";
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
        <h3>AK Phones</h3>
        <span>{homeIntro}</span>
      </div>
    </div>
  );
}
