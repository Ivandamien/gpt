import React from 'react'
import './Features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga possimus iure aut earum corporis? Quae omnis necessitatibus non quos ullam voluptatem? Animi, dignissimos. Amet nisi id doloremque tempore ipsam facilis."
  },
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga possimus iure aut earum corporis? Quae omnis necessitatibus non quos ullam voluptatem? Animi, dignissimos. Amet nisi id doloremque tempore ipsam facilis."
  },
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga possimus iure aut earum corporis? Quae omnis necessitatibus non quos ullam voluptatem? Animi, dignissimos. Amet nisi id doloremque tempore ipsam facilis."
  },
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga possimus iure aut earum corporis? Quae omnis necessitatibus non quos ullam voluptatem? Animi, dignissimos. Amet nisi id doloremque tempore ipsam facilis."
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You just Need to Realize it. Step into the Future Today and Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={ item.title} text={item.text} key={item.title +index} />
        ))}
      </div>
    </div>
  )
}

export default Features