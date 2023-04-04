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

export type Skill = {
  name: string
  imgUrl: string
  repoUrl: string
}

export const skills: Skill[] = [
  {
    name: 'Routes',
    imgUrl: getAssetUrl('rutes.png'),
    repoUrl:
      'https://github.com/Maxioliva/Ecommerce101/blob/develop/src/client/App.tsx',
  },
  {
    name: 'Formik',
    imgUrl: getAssetUrl('register.png'),
    repoUrl:
      'https://github.com/Maxioliva/Ecommerce101/blob/develop/src/client/components/atoms/profileSettings/index.tsx',
  },
  {
    name: 'Context',
    imgUrl: getAssetUrl('context.png'),
    repoUrl:
      'https://github.com/Maxioliva/Ecommerce101/blob/develop/src/client/utils/StateContext.tsx',
  },
  {
    name: 'Firebase',
    imgUrl: getAssetUrl('firebase.png'),
    repoUrl:
      'https://github.com/Maxioliva/Ecommerce101/blob/develop/src/client/utils/firebaseApp.ts',
  },
  {
    name: 'Typescript',
    imgUrl: getAssetUrl('typescript.png'),
    repoUrl:
      'https://github.com/Maxioliva/Ecommerce101/blob/develop/src/client/utils/Type.tsx',
  },
  {
    name: 'Responsive',
    imgUrl: getAssetUrl('responsive2.png'),
    repoUrl:
      'https://github.com/Maxioliva/Ecommerce101/blob/develop/src/client/utils/_variables.scss',
  },
  {
    name: 'Porducts-API',
    imgUrl: getAssetUrl('product2.png'),
    repoUrl:
      'https://github.com/Maxioliva/Ecommerce101/blob/develop/src/client/utils/httpClient.ts',
  },
  {
    name: 'BEM-Example',
    imgUrl: getAssetUrl('bem.png'),
    repoUrl:
      'https://github.com/Maxioliva/Ecommerce101/blob/develop/src/client/components/organism/navbar/style.scss',
  },
]
