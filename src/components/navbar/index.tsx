import classNames from 'classnames'
import { useState } from 'react'
import { getAssetUrl } from '../../utils/tools'
import Logo from '../logos'
import './style.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const path = getAssetUrl(`arrow-${isVisible ? 'right' : 'left'}.svg`)
  const onCLickHandler = () => {
    setIsVisible(!isVisible)
  }
  return (
    <ul className={classNames('navbar', { navbar__hidden: !isVisible })}>
      <img
        src={path}
        alt={'botonsito'}
        className={'navbar__button'}
        onClick={onCLickHandler}
      />
      <div>
        <div className="navbar__title">PORTFOLIO</div>
        <div className="navbar__subcontainer">
          <li className="navbar__li">
            <Link to="/" className="navbar__a">
              About me
            </Link>
          </li>
          <li className="navbar__li">
            <Link to="experience" className="navbar__a">
              Experiences
            </Link>
          </li>
          <li className="navbar__li">
            <Link to="/carousel" className="navbar__a">
              Projects
            </Link>
          </li>
          <div className="navbar__logos">
            <Logo
              path="github"
              alt="github"
              className="navbar__gatito"
              link="https://github.com/Nico-app"
            />
            <Logo
              path="linkedin"
              alt="linkedin"
              className="navbar__linkedin"
              link="https://www.linkedin.com/in/nicolas-camara/"
            />
            <Logo
              path="menssage"
              alt="menssage"
              className="navbar__menssage"
              link="mailto:nicocamara92@gmail.com"
            />
          </div>
        </div>
      </div>
    </ul>
  )
}

export default Navbar
