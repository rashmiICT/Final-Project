import React from 'react'
import './Booking.css';
import book01 from '../../images/images/book1.jpg'
import book02 from '../../images/images/book2.jpg'
import Back from '../../common/Back';
import img from "../../images/images/book2.jpg"
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material'
import { useState } from 'react'


function Booking() {
  const [open, setOpen] = useState(false)
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

            <button className='loginButton' onClick={() => setOpen(true)}>Book Now</button>
            <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby='dialog-title'
                    aria-describedby='dialog-description'>
                    <DialogTitle id='dialog-title'>Thank you ,Your car is booked</DialogTitle>
                    <DialogContent>
                      <DialogContentText id='dialog-description'>
                        Are you sure you want to submit the test? You will not be able to
                        edit it after submitting.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setOpen(false)}>OK</Button>
              
                    </DialogActions>
                  </Dialog> 

          </form>
        </div>
      </div>

    </div>
    </section>
  )
}

export default Booking
