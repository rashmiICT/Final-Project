import React from 'react'
import Back from '../common/Back'
import img from '../images/pricing.jpg'
import Heading from '../common/Heading'
import PriceCard from '../home/Price/PriceCard'


const Pricing = () => {
  return (
    <>
    <section className='services mb'>
        <Back name='Our Pricing' title='No Extra Fees. Friendly Support' cover={img} />
        <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.' />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
    
    </>
  )
}

export default Pricing