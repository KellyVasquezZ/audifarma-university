import styles from "./navbar.module.css";
import logo from "../../assets/img/audifarma-university-logo.png";
import logoWhite from "../../assets/img/audifarma-university-logo-white.png";

export const Navbar = ({ elevationNavbar }) => {
  return (
    <header className={ styles.headerArea }>
      <nav className={`${styles.navbar} ${ elevationNavbar ? styles.elevationNavbar : '' }`}>
        <div className="container">
          <a href="#">
            <img src={ elevationNavbar ? logo : logoWhite } alt="" className={ styles.navbarLogo } />
          </a>
        </div>
        <div className={ styles.menu }>
          <ul className={ styles.dropdownMenu }>
            <li>
              <a href="#"> <i class="fa-solid fa-house"></i> Inicio </a>
            </li>
            <li>
              <a href="#"> Quienes Somos </a>
              <ul>
                <li>
                  <a href="#">Hello</a>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
              </ul>
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
