import Logo from '../logos'
import './style.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        Contact:
        <div className="contact__span">nicocamara92@gmail.com</div>
        <div className="contact__span">+54351-33197</div>
        <div className="contact__span">Córdoba, Argentina</div>
      </div>
      <div className="networks">
        <div>My Networks</div>
        <div className="networks__logos">
          <Logo
            path="instagram"
            alt="instagram"
            className="linkedin"
            link="https://www.instagram.com/nico.cam/"
          />
          <Logo
            path="facebook"
            alt="facebook"
            className="linkedin"
            link="https://www.facebook.com/pato.camara.7/"
          />
          <Logo
            path="linkedin"
            alt="linkedin"
            className="linkedin"
            link="https://www.linkedin.com/in/nicolas-camara/"
          />
        </div>
      </div>
      <ul className="skills">
        <div> Portfolio Skills</div>
        <li className="skills__2">Lenguage: TypeScript</li>
        <li className="skills__2">Framework: React</li>
        <li className="skills__2">Compiler: Vite</li>
        <li className="skills__2">Ohers: React-Router, BEM</li>
      </ul>
    </div>
  )
}

export default Footer
