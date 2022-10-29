import styles from "./analytic.module.css";
import students from "../../assets/img/students.png";
import courses from "../../assets/img/courses.png";
import graduates from "../../assets/img/graduates.png";

export const Analytic = () => {
  return (
    <div className={ styles.analyticArea }>
        <div className="text-center">
            <h2>Analítica</h2>
            <p>The full monty burke posh excuse my French Richard cheeky bobby <br/> spiffing crikey Why gormless, pear shaped.!</p>
        </div>
        <div className="d-flex justify-content-evenly w-100">
            <div className="d-flex flex-column">
                <img src={ courses } width="100" alt="" />
                <span>+3000</span>
            </div>
            <div className="d-flex flex-column">
                <img src={ students } width="100" alt="" />
                <span>+3000</span>
            </div>
            <div className="d-flex flex-column">
                <img src={ graduates } width="100" alt="" />
                <span>+3000</span>
            </div>
        </div>
    </div>
  )
}