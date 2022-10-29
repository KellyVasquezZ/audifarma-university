import styles from "./footer.module.css";
import logo from "../../assets/img/logo-white.jpg";

export const Footer = () => {
  return (
    <footer className={ styles.footerArea }>
        <div className="d-flex justify-content-evenly p-30">
            <div className="d-flex flex-column align-items-center">
                <a href="https://www.audifarma.com.co/"  target="_blank">
                    <img src={ logo } alt="" className={ styles.footerLogo } />
                </a>
                <small>Copyright © 2022 Audifarma University</small>
            </div>
            <hr className="w-100" />
            <div className={ styles.footerMenu }>
                <div className="d-flex justify-content-between w-100">
                    <h3>Sobre nosotros</h3>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <ul>
                    <li><a href="/">Quienes somos</a></li>
                    <li><a href="/">Misión</a></li>
                    <li><a href="/">Visión</a></li>
                    <li><a href="/">Compañía</a></li>
                    <li><a href="/">Programas</a></li>
                </ul>
            </div>
            <hr className="w-100" />
            <div className={ styles.footerMenu }>
                <div className="d-flex justify-content-between w-100">
                    <h3>Ayuda</h3>  
                    <i className="fa-solid fa-chevron-down"></i>  
                </div>
                <ul>
                    <li><a href="/">Términos y condiciones</a></li>
                    <li><a href="/">Código de ética</a></li>
                    <li><a href="/">Política de privacidad</a></li>
                    <li><a href="/">Resolución 521 de 2020</a></li>
                    <li><a href="/">Preguntas frecuentes</a></li>
                </ul>
            </div>
            <hr className="w-100" />
            <div className={`${ styles.footerMenu } ${ styles.socialMedia }`}>
                <div className="d-flex justify-content-between w-100">
                    <h3>Siguenos</h3>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <ul className="d-flex gap-10">
                    <li>
                        <a href="https://es-la.facebook.com/Audifarma" target="_blank">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/audifarma_sa/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a> 
                    </li>
                    <li>
                        <a href="https://twitter.com/Audifarma_SA" target="_blank">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/audifarma-s.a/" target="_blank">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}