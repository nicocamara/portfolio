import Name from './components/name/name'
import Navbar from './components/navbar'
import Info from './components/texts/Index'
import { getAssetUrl } from './utils/tools'
import './style.scss'

const App = () => {
  const cahmuyin = getAssetUrl('github-black.svg')
  console.log(cahmuyin)
  return (
    <div className="App">
      <Navbar />
      <div className="App__name">
        <Name />
      </div>
      <Info />
      <div className="App__body">toda la parte del texto 1 </div>
    </div>
  )
}

export default App
