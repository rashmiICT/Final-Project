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
            
               <a href="https://www.expedia.com/Cars?semcid=US.MULTILOBC.BING.GT-c-EN.CAR&semdtl=a1361580458.b11288627988844442.r1.g1kwd-80539458181094.i1.d1.e1c.j1142092.k1.f1.n1.l1o.h1e.m1&msclkid=375c7522111a1f608aee17f1ad6b08dc&utm_source=bing&utm_medium=cpc&utm_campaign=USA%3AENG%3A%5E%3AGT%3AGLOB%3AALL%3AX%3AX%3A%3A&utm_term=rent%20car&utm_content=USA%3AENG%3A%5E%3AGT%3AGLOB%3AALL%3AXX%3AX%3AX%3AX%3AX%3AX%3ANC%3Arent_car%3A" target="_blank" rel="noreferrer">
            <button className='btn2'>
              More About Us
              </button>
              </a>
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