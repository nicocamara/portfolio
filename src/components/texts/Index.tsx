import Logo from '../logos'
import './style.scss'
import Carousel from '../carousel'
import { ProjectInstance } from '../../utils/data'
import { getAssetUrl } from '../../utils/tools'
import Experience from '../experiences/experiences'
import CarouselPerfil from '../carouselperfil'

type InfoProps = {
  projects: ProjectInstance[]
}
const Info = (props: InfoProps) => {
  return (
    <div className="texts">
      <div className="texts__conteiners">
        <div className="texts__aboutme">
          <h1 id="Abaut_Me" className="texts__title">
            About Me
          </h1>
          <p className="texts__text">
            My name is Nicolas Camara, I am 30 years old and I was born in
            Cordoba - Argentina. At the beginning of my twenties, I started my
            working career in the Physical Education field, a until obtaining my
            Bachelor’s and Master’s degree. During covid-19 season, I started
            self-taught to study software development, and after 4 months, I
            decided to fully commit to it. Today with one year and half of
            experience doing personal side projects I am specialized in frontend
            development using the following stack (JavaScript + Typescript +
            React).
            <p className="texts__subtitle">Interests</p>
            <p className="texts__text2">
              I like to do sports, mostly GYM, Trekking and in my youth I did
              some Tennis and Amercian Fotball. I am a golden retriever lover
              and a medieval films/series fanatic.
            </p>
          </p>
          <div className="texts__carouselprofile">
            <CarouselPerfil />
          </div>
        </div>

        <div className="texts__skills">
          <p className="texts__text">
            <p className="texts__subtitle">Tech-Skills</p>
            <p className="texts__text2">
              Javascript, Typescript, React, Express, Node, Vite.
            </p>
            <p className="texts__subtitle">Soft-Skills</p>{' '}
            <p className="texts__text2">
              Friendly, Teamplayer, Responsability, Positive.
            </p>
            <p className="texts__subtitle">Work-Skills</p>{' '}
            <p className="texts__text2">
              Scrum, Atlassian, Cofluence, Jira Work management, Trello.
            </p>
          </p>
        </div>
      </div>

      <Experience />

      <div className="texts__conteiners">
        <h4 className="texts__title" id="Project_2">
          Projects
        </h4>
        <Carousel projects={props.projects} />
      </div>
    </div>
  )
}

export default Info
