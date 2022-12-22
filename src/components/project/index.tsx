import { ProjectInstance } from '../../utils/data'
import Logo from '../logos'

import './style.scss'

type ProjectProps = {
  name: string
  project: ProjectInstance
}

const Project = (props: ProjectProps) => {
  const { name, imgUrl, projectUrl, repoUrl } = props.project

  return (
    <div className="project">
      <img src={imgUrl} alt={name} className="project__image" />
      <div className="project__description">
        <div className="porject__logo">
          <Logo path="github" alt="github" className="gatito" link={repoUrl} />
          <Logo
            path="eye-solid"
            alt="github"
            className="ojito"
            link={projectUrl}
          />
        </div>
        <div className="project__name">{props.project.name}</div>
      </div>
    </div>
  )
}

export default Project
