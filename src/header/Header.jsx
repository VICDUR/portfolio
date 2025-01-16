import { Link } from "react-scroll";
import './header.css'

export const Header = () => {
  return (
    <header>
    
        <a href="https://github.com/VICDUR/portfolio" target="_blank" rel="noopener noreferrer" className="logo">VICTOR DURAN</a>
        <a href="https://github.com/VICDUR/portfolio" target="_blank" rel="noopener noreferrer" className="otro-logo">VD</a>

        <input type="checkbox" name="checkbox" id="menu-toggle"/>
        <label for="menu-toggle" className="menu-icon-action">
            <div className='bx bx-menu' id="menu-icon"></div>
        </label>
    
        <ul className="navlist"> {/* casa */}
          
            <li>
              <Link to="sobre-mi" smooth={true} duration={500}>
                Sobre mí
              </Link>
            </li>
            <li>
              <Link to="proyecto" smooth={true} duration={500}>
                Proyectos
              </Link>
            </li>
            {/* <li><a href="#">Proyectos</a></li> */}
            {/* <li><a href="#">Contacto</a></li> */}
        </ul>   

    </header>
  )
}
