import Title from './components/Title'
import './App.css'
import { Projects } from './components/Projects'


function App() {

  return (
    <div>
        <Title/>
      <div className='content-box'>
      <Projects/>
      </div>
    </div>
  )
}

export default App
