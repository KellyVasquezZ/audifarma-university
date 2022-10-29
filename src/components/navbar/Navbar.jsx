import { useState } from 'react'
import styles from "./navbar.module.css";
import logo from "../../assets/img/audifarma-university-logo.png";
import logoWhite from "../../assets/img/audifarma-university-logo-white.png";

export const Navbar = ({ elevationNavbar }) => {

  const [active, setActive] = useState('');

  const menuActive = () => {
    if(active) {
      setActive('')
      return
    }
    setActive('active')
  };

  return (
    <header className={ styles.headerArea }>
      <nav className={`${styles.navbar} ${ elevationNavbar ? styles.elevationNavbar : '' }`}>
        <div>
          <a href="/">
            <img src={ elevationNavbar ? logo : logoWhite } alt="" className={ styles.navbarLogo } />
          </a>
        </div>
        <div className={ `${ styles.menu } ${ styles[active] ?? '' }` }>
          <ul className={ styles.dropdownMenu }>
            <li>
              <a href="/"> <i className="fa-solid fa-house"></i> Inicio </a>
            </li>
            <li>
              <a> Quienes Somos </a>
              <ul>
                <li>
                  <a href="/">Compañía</a>
                </li>
                <li>
                  <a href="/">Misión</a>
                </li>
                <li>
                  <a href="/">Visión</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/"> Programas </a>
            </li>
            <li>
              <a href="/"> Contáctenos </a>
            </li>
          </ul>
          <div className={ styles.logoMobile}>
            <a href="/">
              <img src={ logo } alt="" className={ styles.navbarLogo } />
            </a>
          </div>
        </div>
        <div className={ `${styles.toggleMenu} ${ styles[active] ?? '' }` } onClick={ menuActive }>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  )
}
