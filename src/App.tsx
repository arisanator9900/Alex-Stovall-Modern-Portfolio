import Title from './components/Title'
import './App.css'
import { Projects } from './components/Projects'
import Skills from './components/Skills'


function App() {

  return (
    <div>
        <Title/>
      <div className='content-box'>
        <Projects/>
        <Skills/>
      </div>
      
    </div>
  )
}

export default App
