import React from 'react'
import styles from "./banner.module.css";
import video from "../../assets/video/welcome-university.mp4";

export const Banner = () => {
  return (
    <div className={ styles.banner }>
      <video width="100%" autoPlay loop muted>
        <source src={ video } type="video/mp4" />
      </video>
      <div className={ styles.bannerTitle }>
        <h2>Educación</h2>
        <h3>en línea</h3>
        <p>
          Vive una experiencia única y alcanza tus metas junto a nosotros.
        </p>
      </div>
      <div  className={ styles.opacityVideo } />
    </div>
  )
}
