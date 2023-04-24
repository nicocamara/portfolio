import Name from './components/name/name'
import Navbar from './components/navbar'
import AboutMe from './components/aboutMe/Index'
import { getAssetUrl } from './utils/tools'
import './style.scss'
import { addProject, getProjects } from './utils/resolvers'
import { ProjectInstance, projects } from './utils/data'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Experience from './components/experiences/experiences'
import Carousel from './components/carousel'
import Footer from './components/footer'

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
        <div className="App-name">
          <Name />
        </div>
        <div className="App__info">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route
              path="/carousel"
              element={<Carousel projects={projects} />}
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
