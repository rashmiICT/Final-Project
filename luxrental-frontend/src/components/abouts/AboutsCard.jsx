import React from 'react'
import { homeAbout } from '../../dummydata'
import Heading from '../common/Heading'
import AWrapper from './AWrapper'
import "./abouts.css"
 
const AboutsCard = () => {
  return (
    <>
    <section className='aboutHome'>
      <div className='container flexSB'>
        <div className='right row'>
          <Heading subtitle='Our Benefits' title='Why choose Us?' />
          <div className='items'>
            {homeAbout.map((val) => {
              return (
                <div className='item flexSB'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
    <AWrapper />
  </>
  )
}

export default AboutsCard