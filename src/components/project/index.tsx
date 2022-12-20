import { useState } from 'react'
import { getAssetUrl } from '../../utils/tools'
import Logo from '../logos'
import { Projectvevo } from '../texts/Index'
import './style.scss'

type ProjectProps = {
  name: string
  project: Projectvevo
}

const Project = (props: ProjectProps) => {
  const [isHovered, setHover] = useState(false)
  const { name, imgUrl, projectUrl, repoUrl, skills } = props.project
  const onClickHandler = (path: string) => {
    window.open(path)
  }

  //   const mouseEnterHandler = () => {
  //     setHover(true)
  //   }
  //   const mouseLeaveHandler = () => {
  //     setHover(false)
  //   }

  return (
    <div className="project">
      <img
        //   onMouseEnter={mouseEnterHandler}
        //   onMouseLeave={mouseLeaveHandler}
        src={imgUrl}
        alt={name}
        className="project__image"
      />
      <div className="project__logos">
        <Logo path="github" alt="github" className="gatito" link={repoUrl} />
        <Logo
          path="eye-solid"
          alt="github"
          className="ojito"
          link={projectUrl}
        />
      </div>
    </div>
  )
}

export default Project
