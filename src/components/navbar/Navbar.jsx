import React from 'react'
import styles from "./navbar.module.css";
import logo from "../../assets/img/audifarma-university-logo.png";

export const Navbar = () => {
  return (
    <header className={ styles.headerArea }>
      <nav className={ styles.navbar }>
        <div className="container">
          <a href="#">
            <img src={ logo } alt="" className={ styles.navbarLogo } />
          </a>
        </div>
        <div className={ styles.menu }>
          <ul className={ styles.dropdownMenu }>
            <li>
              <a href="#"> Inicio </a>
            </li>
            <li>
              <a href="#"> Quienes Somos </a>
            </li>
            <li>
              <a href="#"> Programas </a>
            </li>
            <li>
              <a href="#"> Contáctenos </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
