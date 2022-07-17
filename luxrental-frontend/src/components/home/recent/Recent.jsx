import React from 'react'
import Heading from '../../common/Heading'
import RecentCard from './RecentCard'
import './Recent.css'
const Recent = () => {
  return (
    <> <section className='recent padding'>
        <div className="container">
        <Heading title='Recent Property Listed' subtitle='Guaranteed! Book Online Today. Worldwide Car Rental Here.' />  
        <Heading title='' subtitle='Brands: Toyota, Ford, Chevrolet, Chrysler, Jeep, Hyundai, Mercedes' />   
        <RecentCard/>
        </div>
        </section> 
        
        </>
  )
}

export default Recent