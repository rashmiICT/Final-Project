import React from 'react'
import { homeAbout } from '../../dummydata'
import Heading from '../common/Heading'
import "./abouts.css"



const AboutsCard = () => {
  return (
    <>
    <section className='aboutHome'>
      <div className="container flexSB">
      <div className="left row">
        </div>  
        <div className="right row">
        <Heading subtitle='WHY CHOOSE US?' title=' Benefits About Online Car Rental' />
        <div className="items">
          {homeAbout.map((val)=>(
            <div className="item flexSB">
            <div className="img">
              <img src={val.cover} alt=''/>
            </div>
            <div className="text">
              <h2>{val.title}</h2>
              <p>{val.desc}</p>

            </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default AboutsCard 