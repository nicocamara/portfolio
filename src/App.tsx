import Name from './components/name/name'
import Navbar from './components/navbar'
import Info from './components/texts/Index'
import { getAssetUrl } from './utils/tools'
import './style.scss'

const App = () => {
  const cahmuyin = getAssetUrl('github-black.svg')

  return (
    <div className="App">
      <Navbar />
      <div className="App__body">
        <div className="App__name">
          <Name />
        </div>
        <div className="App__info">
          <Info />
        </div>
      </div>
    </div>
  )
}

export default App
