import styles from "./subscribe.module.css";
import treeLeft from "../../assets/img/tree-left.png";
import treeRight from "../../assets/img/tree-right.png";

export const Subscribe = () => {
    return (
        <div className={ styles.subscribeArea }>
            <img src={ treeLeft } className={`${ styles.tree } ${ styles.treeLeft }`} alt="" />
            <img src={ treeRight } className={`${ styles.tree } ${ styles.treeRight }`} alt="" />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="text-center">
                    <h2>Inscríbete aquí</h2>
                    <p>Ingresa tu correo electrónico y un agente de la universidad te guiara en el proceso</p>
                </div>
                <form action="#" method="">
                    <input type="text" name="email" placeholder="Correo electronico"/>
                    <button type="button" className="d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}
