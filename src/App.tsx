import Title from './components/Title'
import './App.css'
import { Projects } from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'


function App() {

  return (
    <div>
        <Title/>
      <div className='content-box'>
        <Skills/>
        <Timeline/>
        <Projects/>

      </div>
      
    </div>
  )
}

export default App
