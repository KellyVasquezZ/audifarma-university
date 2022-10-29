import styles from "./banner.module.css";
import video from "../../assets/video/welcome-university.mp4";

export const Banner = () => {
  return (
    <div className={ styles.banner }>
      <div className={ styles.bannerVideo }>
        <video width="100%" autoPlay loop muted>
          <source src={ video } type="video/mp4" />
        </video>
        <div  className={ styles.opacityVideo } />
      </div>
      <div className={ styles.bannerTitle }>
        <h2>Educación</h2>
        <h3>en línea</h3>
        <p>
          Vive una experiencia única y alcanza tus metas junto a nosotros.
        </p>
        <button type="button" className={ styles.buttonBanner }>
          Empiezar 
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}
