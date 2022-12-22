import Name from './components/name/name'
import Navbar from './components/navbar'
import Info from './components/texts/Index'
import { getAssetUrl } from './utils/tools'
import './style.scss'
import { addProject, getProjects } from './utils/resolvers'
import { ProjectInstance, projects } from './utils/data'
import { useEffect, useState } from 'react'

// projects.forEach((p) => {
//   addProject(p)
// })

const App = () => {
  const [projects, setProjects] = useState<ProjectInstance[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const getDoc = await getProjects()
        setProjects(getDoc)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="App__body">
        <div className="App__name">
          <Name />
        </div>
        <div className="App__info">
          <Info projects={projects} />
        </div>
      </div>
    </div>
  )
}

export default App
