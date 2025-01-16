import { AnimationTex } from "../AnimacionTexto/AnimationTex"
import "./section.css"

export const Section = () => {
  return (
    <section className="hero" id="refHero">

        <div className="hero-text">
            <h5>Frontend Developer</h5>
            <h4>ReactJS Developer</h4>
            {/* <h1>Víctor Durán</h1> */}
            <AnimationTex text={'Víctor Durán B.'}/>
            {/* <p>Desarrollador front-end, experiencia en HTML, CSS, JavaScript, React y TypeScript. Crea interfaces gráficas atractivas y funcionapinles utilizando Next.js para ofrecer experiencias de usuario de alto rendimiento. </p> */}
            <p>Soy un amante de la tecnología y el diseño, lo que me ha permitido embarcarme en este bello mundo del sotfware. Como desarrollador Front-End con experiencia en HTML, CSS, JavaScript y React, mi pasión por el software me ha llevado a profundizar también en el desarrollo Full Stack. Busco aplicar mis conocimientos, seguir creciendo y ser un aporte valioso para cualquier empresa. </p>
            <a href="./Hoja de vida Victor Duran.pdf" download="Hoja de vida Victor Duran.pdf">CV</a>
            <a href="https://wa.me/573204593037?text=Hola%20estoy%20interesado%20en%20tus%20servicios" target="_blank" className="contacto"><i className="ri-whatsapp-line"> Contactame</i></a>
        </div>

        <div className="hero-img">
            <img src="./foto-victor.png" alt="Victor Foto"/>
        </div>
        
    </section>
  )
}