import React from 'react'
import './Button.css'

interface Props {
    text: string;
    onClick?:()=>void;
    id: string;
}

const Button = (props: Props) => {
    const title = props.text;
  return (
    <div>
        <button id={props.id} className="btn">{title}</button>
    </div>
  )
}

export default Button