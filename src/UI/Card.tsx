import React from 'react'
import './Card.css'
import badge from '../../public/assets/badge.svg'

//TODO: Add headers and skill levels to skills.tsx

interface CardFace {
    title: string;
    headers?: Array<string>;
    level?: Array<string>;
}

const Card = (props: CardFace) => {
    const title = props.title;
    const headers = props.headers;
    const level = props.level;
  return (
    <main className='card'>
        <h1>{title}</h1>
        <section className='elements-container'>
            <div className="element">
                <div className="flex-title">
                    <img className="badge" src={badge} alt="badge" />
                    <h1 className='element-title'>{headers[0]}</h1>
                </div>
                <h3 className='element-subtitle'>{level[0]}</h3>
            </div>
            <div className="element">
                <div className="flex-title">
                    <img className="badge" src={badge} alt="badge" />
                    <h1 className='element-title'>{headers[1]}</h1>
                </div>
                <h3 className='element-subtitle'>{level[1]}</h3>
            </div>
            <div className="element">
                <div className="flex-title">
                    <img className="badge" src={badge} alt="badge" />
                    <h1 className='element-title'>{headers[2]}</h1>
                </div>
                <h3 className='element-subtitle'>{level[2]}</h3>
            </div>
            <div className="element">
                <div className="flex-title">
                    <img className="badge" src={badge} alt="badge" />
                    <h1 className='element-title'>{headers[3]}</h1>
                </div>
                <h3 className='element-subtitle'>{level[3]}</h3>
            </div>
            <div className="element">
                <div className="flex-title">
                    <img className="badge" src={badge} alt="badge" />
                    <h1 className='element-title'>{headers[4]}</h1>
                </div>
                <h3 className='element-subtitle'>{level[4]}</h3>
            </div>
            <div className="element">
                <div className="flex-title">
                    <img className="badge" src={badge} alt="badge" />
                    <h1 className='element-title'>{headers[5]}</h1>
                </div>  
                <h3 className='element-subtitle'>{level[5]}</h3>
            </div>
        </section>
    </main>
  )
}

export default Card