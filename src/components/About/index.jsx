import { AboutContainer } from "./style"
import julsPersonaje from '../../assets/juls-personaje.png';

function About() {
  return (
    <AboutContainer>
        <div className="desc">
            <h2>¿Quiénes somos?</h2>
            <div className="body">
              <p>Somos una Línea de Ropa y Artículos Exclusivos únicos dentro de su imagen y Proceso Creativo. Que colabora con distintos sectores culturales como socioeconómicos durante la elaboración y proyección de los mismos; valorizando su Talento, Creatividad, y Mentalidad. </p>
              <div className="image">
                <img src={julsPersonaje} alt="juls" />
              </div>
            </div>
        </div>
    </AboutContainer>
  )
}
export default About