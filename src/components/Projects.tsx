import React from 'react'
import ProjectCard from '../UI/ProjectCard'
import Button from '../UI/Button'
import '../css/Projects.css'

export const Projects = () => {
  const [button, setButton] = React.useState("")

  return (
    <div>
      <h2 className='title'>Projects</h2>
      <div className="btn-container">
                    <div onClick={() => setButton("")}>
                        <Button id={button == "" ? "btn-active" : "btn-background"} text="All" />
                    </div>
                    <div onClick={() => setButton("web")}>
                        <Button id={button == "web" ? "btn-active" : "btn-background"} text="Web Dev" />
                    </div>
                    <div onClick={() => setButton("ios")}>
                        <Button id={button == "ios" ? "btn-active" : "btn-background"} text="IOS" />
                    </div>
                    <div onClick={() => setButton("solidity")}>
                        <Button id={button == "solidity" ? "btn-active" : "btn-background"} text="Solidity" />
                    </div>
                </div>
      <div className='flex-container'>
        <ProjectCard type="web"/>
        <ProjectCard type="web"/>
        <ProjectCard type="web"/>
        <ProjectCard type="web"/>
        <ProjectCard type="web"/>
        <ProjectCard type="web"/>
      </div>
    </div>
  )
}
