import React from 'react'
import './ProjectCard.css'

interface Props {
    type?: "web" | "ios" | "solidity"
    data?: {}
}

const ProjectCard = (props: Props) => {
    return (
        <div className='cards'>
                    <a href="" className="card">
                        <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">Jessica Parker</h3>
                                    <span className="card__status">1 hour ago</span>
                                </div>
                            </div>
                            <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                        </div>
                    </a>
        </div>
    )
}

export default ProjectCard