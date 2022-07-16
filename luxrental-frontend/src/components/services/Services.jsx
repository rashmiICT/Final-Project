import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import FeaturedCard from '../home/featured/FeaturedCard'
import img from "../images/services.jpg"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -Our All Services' cover={img} />
        <Heading title='Car Rental Features' subtitle='Find All Type of Property.' />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
    )
}

export default Services