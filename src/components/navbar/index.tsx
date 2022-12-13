import Logo from '../logos'
import './style.scss'

const Navbar = () => {
  return (
    <ul className="navbar">
      <div className="navbar__title">Indice</div>
      <li className="navbar__li">
        <a href="#Abaut_Me" className="navbar__a">
          About me
        </a>
      </li>
      <li className="navbar__li">
        <a href="#Skills" className="navbar__a">
          Skills
        </a>
      </li>
      <li className="navbar__li">
        <a href="#Experiences" className="navbar__a">
          Experiences
        </a>
      </li>
      <li className="navbar__li">
        <a href="#Project_2" className="navbar__a">
          project 2
        </a>
        <Logo path="github-black.svg" alt="github" className="gatito" />
      </li>
    </ul>
  )
}

export default Navbar
