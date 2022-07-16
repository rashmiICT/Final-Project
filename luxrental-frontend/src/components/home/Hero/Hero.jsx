import React from 'react'
import "./Hero.css"
import Heading from "../../common/Heading"

const Hero = () => {
  return   (
  <>
   <section className='hero'>
   <div className="container">
   <Heading title='Search Your Car ' subtitle='The Car Rental website is being developed for customers so that they can book their cars from any part of the world.
   This application collects information from the customers through filling their details. ' />
       <form  className='flex'>
           <div className="box">
           <span>City/Street</span>
           <input type= "text" placeholder='Location'/>
           </div>
           <div className="box">
           <span>Vehicle Type</span>
           <input type= "text" placeholder='Vehicle Type'/>
           </div>
           <div className="box">
           <span>Price Range</span>
           <input type= "text" placeholder='Price Range'/>
           </div>
           <div className='box'>
               <h4>Advance Filter</h4>
           <button className='btn'>
               <i className='fa fa-search'></i>
           </button>


           </div>
       </form>
       </div></section>
  </>
)
}

export default Hero