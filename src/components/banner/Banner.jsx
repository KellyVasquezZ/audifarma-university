import React from 'react'
import styles from "./banner.module.css";
import video from "../../assets/video/welcome-university.mp4";

export const Banner = () => {
  return (
    <div className={ styles.banner }>
        <video width="100%" autoplay loop controls muted>
            <source src={ video } type="video/mp4" />
        </video>
    </div>
  )
}
