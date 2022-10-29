import styles from "./analytic.module.css";
import students from "../../assets/img/students.png";
import courses from "../../assets/img/courses.png";
import graduates from "../../assets/img/graduates.png";

export const Analytic = () => {
  return (
    <div className={ styles.analyticArea }>
        <div className="text-center">
            <h2>Analítica</h2>
            <p>Cada día somos más <br /> Quiénes nos preparamos para el futuro</p>
        </div>
        <div className={ styles.analyticImages }>
            <div className="d-flex flex-column">
                <img src={ courses } width="100" alt="" />
                <span>+50<br/> Programas</span>
            </div>
            <div className="d-flex flex-column">
                <img src={ students } width="100" alt="" />
                <span>+3000 <br/> Estudiantes</span>
            </div>
            <div className="d-flex flex-column">
                <img src={ graduates } width="100" alt="" />
                <span>+800 <br/> Egresados</span>
            </div>
        </div>
    </div>
  )
}