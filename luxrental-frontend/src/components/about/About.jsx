import React from 'react'
import img from "../images/about.jpg"
import Back from '../common/Back'
import "./about.css"
import Heading from '../common/Heading'



const About = () => {
  return (
    <>
     <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='About Our Company' subtitle='Check out our company story and work process' />

            <p>The car rental website is being developed for customers so that
               they can book their cars from any part of the world. This application 
               collects information from the customers through filling their details.
                A registered customer of the website has the facility to book a vehicle which they require.
                 The proposed system is completely integrated online system.
                  It automates manual procedure in an effective and efficient way. </p>

            <p>This automated system facilitates customer and provides to fill up the details according to their requirements.
               It includes type of vehicle they are trying to hire and location. 
               The purpose of this system is to develop a website for the people who can book their vehicles along with requirements from any part of the world. </p>
            
            
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About