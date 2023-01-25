import React from 'react'
import '../css/Skills.css'
import Card from '../UI/Card'

const Skills = () => {
    const frontendHeaders: Array<string> = ["React", "Vue", "Javascript", "CSS", "Typescript", "SwiftUI"]
    const backendHeaders: Array<string> = ["Node Js", "Python", "Java", "SQL", "AWS", "Solidity"]
    const frontendLevels: Array<string> = ["NextJs", "Nuxt", "Web Applications", "Bootstrap", "App Testing", "IOS Apps"]
    const backendLevels: Array<string> = ["CRUD Apps", "Flask", "Maven", "MySQL", "Cloud Practitioner", "Ethereum"]
    return (
    <section className="skills section" id="skills">
        <h2 className='title'>Skills</h2>
        <span className="subtitle">My Technical Level</span>
        <article className='card-container'>
            <Card title="Frontend" headers={frontendHeaders} level={frontendLevels}/>
            <Card title="Backend" headers={backendHeaders} level={backendLevels}/>
        </article>
    </section>
  )
}

export default Skills