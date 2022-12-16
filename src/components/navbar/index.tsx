import classNames from 'classnames'
import { useState } from 'react'
import { getAssetUrl } from '../../utils/tools'
import Logo from '../logos'
import './style.scss'

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
              Projects
            </a>
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
              link="https://www.linkedin.com/in/nicolas-camara/"
            />
          </div>
        </div>
      </div>
    </ul>
  )
}

export default Navbar
