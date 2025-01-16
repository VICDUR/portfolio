import { Element } from "react-scroll";

import { Cards } from "./cards/Cards";
import { Header } from "./header/Header";
import { Section } from "./section/Section";

import './app.css'

const email = "vicduran3d@gmail.com";
const subject = "Solicito su perfil para entrevista"; // Puedes personalizar el asunto
  const body = "Hola Víctor";  // Puedes personalizar el cuerpo del correo


function App() {
  return (
    <div className="container-app">

      <Header/>
      <Element name="sobre-mi">
        <Section/>
      </Element>

      <div class="icons">
        <a href="https://www.linkedin.com/in/victor-duran-bedoya/" target="_blank" rel="noopener noreferrer" ><i class="ri-linkedin-box-line"></i></a>
        <a href="https://github.com/VICDUR" target="_blank" rel="noopener noreferrer" ><i class="ri-github-fill"></i></a>
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} target="_blank" rel="noopener noreferrer"><i class="ri-mail-line"></i></a>
      </div>

      <div className="container-icons">
        <h3>Stack De Tecnología</h3>
        <div className="icons-stack">
          <img src="https://skillicons.dev/icons?i=html,css,js,ts,react" alt="iconos"/>
          <img src="https://skillicons.dev/icons?i=nodejs,express,docker,mysql,postgres"alt="iconos" />
          <img src="https://skillicons.dev/icons?i=vite,vscode,git,github,postman"alt="iconos" />
          <img src="https://skillicons.dev/icons?i=wordpress,figma,ai,ps,ae" alt="iconos"/>
          <Element name="proyecto"></Element> {/* Ubico este elemento antes del h3 para que me deje ver el h3  de proyectos */}
        </div>
      </div>
    
      <div className="container-projects">
        <h3>Proyectos</h3>
      <Cards/>
      </div>

      <footer>
        <p>
          Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres. <i>Colosenses 3:23</i>
        </p>
      </footer>

    </div>
    
  );
}

export default App;





  
  