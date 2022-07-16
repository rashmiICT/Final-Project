import React from 'react'
import Heading from '../../common/Heading'
import { team } from '../../data/Data'
import "./team.css"

const Teams = () => {
  return (
    <>
    
    <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <button className='btn3'>{val.list} Listings</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className='button flex'>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <button>
                      <i className='fa fa-envelope'></i>
                      Message
                    </button>
                    </a>
                    <a href="https://apps.apple.com/us/app/call/id1500816561" target="_blank" rel="noreferrer">
                    <button className='btn4'>
                      <i className='fa fa-phone-alt'></i>
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default Teams