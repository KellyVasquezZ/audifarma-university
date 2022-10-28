import React from 'react'
import styles from "./footer.module.css";
import logo from "../../assets/img/logo-white.jpg";

export const Footer = () => {
  return (
    <footer className={ styles.footerArea }>
        <div className="d-flex justify-content-evenly p-30">
            <div>
                <a href="#">
                    <img src={ logo } alt="" className={ styles.footerLogo } />
                </a>
            </div>
            <div className={ styles.footerMenu }>
                <h3>Sobre nosotros</h3>
                <ul>
                    <li><a href="#">Quienes somos</a></li>
                    <li><a href="#">Misión</a></li>
                    <li><a href="#">Visión</a></li>
                    <li><a href="#">Compañía</a></li>
                    <li><a href="#">Programas</a></li>
                </ul>
            </div>
            <div className={ styles.footerMenu }>
                <h3>Normatividad</h3>
                <ul>
                    <li><a href="#">Términos y condiciones</a></li>
                    <li><a href="#">Código de ética</a></li>
                    <li><a href="#">Política de privacidad</a></li>
                    <li><a href="#">Resolución 521 de 2020</a></li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex gap-10">
                <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
            <small>Copyright © 2022 Audifarma University</small>
        </div>
    </footer>
  )
}