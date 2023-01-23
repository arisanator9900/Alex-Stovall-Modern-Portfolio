import React from 'react'
import fireworkVideo from '../assets/fireworks.mp4'

export const Fireworks = () => {
  return (
    <div>
        <div className="title">
        <video autoPlay muted loop id="video">
            <source src={fireworkVideo} type="video/mp4"/>
        </video>
            <h3>WebDev, IOS, BlockChain</h3>
            <h1>Alex Stovall</h1>
            <h3>Fullstack <strong>Developer</strong></h3>
        </div> 
    </div>
  )
}
