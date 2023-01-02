import { useEffect, useState } from 'react'
import { skills } from '../../utils/data'
import Logo from '../logos'
import './style.scss'

const Experience = () => {
  const [activeLink, setActiveLink] = useState<string>(skills[0].imgUrl)
  const [activeUrl, setActiveUrl] = useState<string>(skills[0].repoUrl)

  const onChange = (name: string, url: string) => {
    setActiveLink(name)
    setActiveUrl(url)
  }

  // const linkUrl = (repoUrl: string) => {
  //   setActiveLink(repoUrl)
  // }

  return (
    <div className="texts__conteiners">
      <h3 className="texts__title" id="Experiences">
        Experiences
      </h3>
      <p className="texts__name">E-Commerce</p>
      <p className="texts__text">
        joined an agile team simulation that develops an e-commers(shop +
        checkout) web application that follows the latets Ecmascript updates and
        other code conventions such as Atomic Desin and BEM.
      </p>
      <div className="texts__logos">
        <Logo
          path="github"
          alt="github"
          className="gatito"
          link="https://github.com/Maxioliva/Ecommerce101"
        />
        <Logo
          path="eye-solid"
          alt="github"
          className="ojito"
          link="https://elchamuyin.onrender.com/"
        />
      </div>
      <p className="subcontainer__subtitle">Tech Stack</p>
      <div className="subcontainer">
        <div className="subcontainer__text2">
          {skills.map((s) => (
            <div
              className="subcontainer__skill"
              key={s.name}
              onClick={() => onChange(s.imgUrl, s.repoUrl)}
            >
              {s.name}
            </div>
          ))}
        </div>
        <div className="subcontainer__images">
          <img src={activeLink} className="subcontainer__images-img" />
          <div className="subcontainer__images-description">
            <p>Check it out in the repository</p>
            <Logo
              path="github"
              alt="github"
              className="gatito"
              link={activeUrl}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
