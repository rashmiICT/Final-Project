import React from 'react'
import './Booking.css';
import book01 from '../../images/images/book1.jpg'
import book02 from '../../images/images/book2.jpg'
import Back from '../../common/Back';
import img from "../../images/images/book2.jpg"



function Booking() {

  return (
    <section className='contact mb'>
      <Back name='Book Your Car' title='Compare Low Rates from Top Brands' cover={img} />
    <div className='Bmain-booking'>
      <div className='BbookingContent'>
        <div className='BbookingImage'>
          <img src={book01} alt="Booking-Pic01" className='BBooking01'/>
          <img src={book02} alt="Booking-Pic02" className='BBooking02'/>
        </div>
        <div className='BbookingForm'>
          <h3> Book Your Car  </h3>
          <form className='BBooking'>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Telephone Number'/>
            <input type='text' placeholder='Date'/>
            <input type='text' placeholder='Time'/>
            <input type='text' placeholder='Location'/>
            <input type='text' placeholder='Car Type'/>
            <button className='loginButton'>Book Now</button>

          </form>
        </div>
      </div>

    </div>
    </section>
  )
}

export default Booking
