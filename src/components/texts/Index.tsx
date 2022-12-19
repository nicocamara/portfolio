import { getAssetUrl } from '../../utils/tools'
import Project from '../img'
import Logo from '../logos'
import './style.scss'

export type Projectvevo = {
  name: string
  imgUrl: string
  repoUrl: string
  projectUrl: string
  skills: string[]
  description?: string[]
}

const projects: Projectvevo[] = [
  {
    name: 'Rick and Morty / Nov. 2021 - dic. 2021 / Frontend Developer.',
    imgUrl: getAssetUrl('rick.png'),
    repoUrl: 'https://github.com/Nico-app/Rick-and-Morty',
    projectUrl: 'https://rickandmorty-project.netlify.app/',
    skills: [
      'Javascript',
      'Typescript',
      'Css',
      'Api Request',
      'Filters',
      'Pagination',
    ],
  },
  {
    name: ' Movies / Oct. 2021 - Nov. 2021 / Frontend Developer.',
    imgUrl: getAssetUrl('movies.png'),
    repoUrl: 'https://github.com/Nico-app/Nico-movies',
    projectUrl: 'https://movies-nico.netlify.app',
    skills: [
      'Javascript',
      'Typescript',
      'Css',
      'Api Request',
      'Filters',
      'Search input',
      'Infinite-Scroll',
    ],
  },
  {
    name: ' Calculator - App / sept. 2021 - oct. 2021 / Frontend Developer.',
    imgUrl: getAssetUrl('Calculator.png'),
    repoUrl: 'https://github.com/Nico-app/Calculadora',
    projectUrl: 'https://calc-nico.netlify.app/',
    skills: ['Javascript', 'Typescript', 'Css'],
  },
]
const Info = () => {
  return (
    <div className="texts">
      <div>
        <h1 id="Abaut_Me" className="texts__title">
          About Me
        </h1>
        <p className="texts__text">
          My name is Nicolas Camara, I am 30 years old and I was born in Cordoba
          - Argentina. At the beginning of my twenties, I started my working
          career in the Physical Education field, until obtaining my Bachelor’s
          and Master’s degree. During covid-19 season, I started self-taught to
          study software development, and after 4 months, I decided to fully
          commit to it. Today with one year and half of experience doing
          personal side projects I am specialized in frontend development using
          the following stack (JavaScript + Typescript + React).
          <p className="texts__subtitle">Interests</p>
          <p className="texts__text2">
            I like to do sports, mostly GYM, Trekking and in my youth I did some
            Tennis and Basket. I am a golden retriever lover and a medieval
            films/series fanatic.
          </p>
        </p>

        <h2 className="texts__title" id="Skills">
          Skills
        </h2>
        <p className="texts__text">
          <p className="texts__subtitle">Tech-Skills</p>
          <p className="texts__text2">
            Javascript, Typescript, React, Express, Node, Jira.
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
        <Logo
          path="github"
          alt="github"
          className="gatito"
          link="https://github.com/Nico-app"
        />
        <Logo
          path="linkedin"
          alt="linkedin"
          className="linkedin"
          link="https://www.linkedin.com/in/nicolas-camara/"
        />
      </div>
      <div>
        <h3 className="texts__title" id="Experiences">
          Experiences
        </h3>
        <p className="texts__name">E-Comerce</p>
        <p className="texts__text">
          joined an agile team simulation that develops an e-commers(shop +
          checkout) web application that follows the latets Ecmascript updates
          and other code conventions such as Atomic Desin and BEM.
        </p>
        <p className="texts__subtitle">Skills Used</p>
        <p className="texts__text2">
          React / Routes / Hooks / Porducts-API / Async-Await / Flexbox /
          Responsive / Firebase / Web-Pack / Typescript / BEM
        </p>
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
      <div>
        <h4 className="texts__projects" id="Project_2">
          Projects
        </h4>
        {projects.map((p) => (
          <p key={p.name} className="carucel">
            <Project name={p.name} project={p} />
          </p>
        ))}
      </div>
    </div>
  )
}

export default Info
