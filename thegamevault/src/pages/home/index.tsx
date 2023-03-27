import React from "react";
import background from "../../images/pixel_background.png";
import cloud from "../../images/pixel_cloud.png";
import styles from "./styles.module.scss";
import { useParallax } from "react-scroll-parallax";

export default function Home() {
  const { ref } = useParallax<HTMLDivElement>({ speed: -20 });

  return (
    <>
      <div className={styles.img_container}>
        <img src={background} className={styles.background_img}></img>
        <div ref={ref} className={styles.cloud_container}>
          <img src={cloud} className={styles.cloud1}></img>
          <img src={cloud} className={styles.cloud2}></img>
          <img src={cloud} className={styles.cloud3}></img>
        </div>
      </div>
      <div className={styles.blank}></div>
    </>
  );
}
