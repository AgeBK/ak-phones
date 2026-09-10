import { homeIntro } from "../lib/appData.json";
import Img from "./image";
import styles from "@/app/css/Home.module.css";

export default function HomeBanner() {
  // TODO: smaller banner??
  return (
    <div className={styles.homeBannerContainer}>
      {/* <picture> */}
      {/* <source media="(max-width: 768px)" srcSet="./img/bg/banner2.jpg" /> */}
      <Img src="bg/banner.jpg" alt="AK Phones" w={1400} h={381} l="eager" />
      {/* </picture> */}
      <div className={styles.blurb}>
        <h3>AK Phones</h3>
        <span>{homeIntro}</span>
      </div>
    </div>
  );
}
