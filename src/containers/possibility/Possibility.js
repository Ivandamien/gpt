import React from 'react'
import './Possibility.css'
// import possibilityImage from '../../assets/possibility.png'
import possibilityImage from '../../assets/possibility.webp'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilty" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early access to get started</h4>
        <h1 className="gradient__text">
          The Possibilty are beyond your imagination
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem accusamus obcaecati et molestias labore minima exercitationem necessitatibus ad est.</p>
        <h4>Request Early Access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility