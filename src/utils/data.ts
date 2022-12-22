import { getAssetUrl } from '../utils/tools'

export type ProjectInstance = {
  name: string
  imgUrl: string
  repoUrl: string
  projectUrl: string
  skills: string[]
  description?: string[]
}

export const projects = [
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
    imgUrl: getAssetUrl('movie-app.png'),
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
    imgUrl: getAssetUrl('calculator.png'),
    repoUrl: 'https://github.com/Nico-app/Calculadora',
    projectUrl: 'https://calc-nico.netlify.app/',
    skills: ['Javascript', 'Typescript', 'Css'],
  },
]
