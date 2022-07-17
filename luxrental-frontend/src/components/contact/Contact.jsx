import React from 'react'
import Back from '../common/Back'
import img from "../images/pricing1.jpg"
import "./contact.css"
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material'
import { useState } from 'react'

const Contact = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h2><center>Fillup The Form</center></h2> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button onClick={() => setOpen(true)}>Submit Request</button>
            <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby='dialog-title'
                    aria-describedby='dialog-description'>
                    <DialogTitle id='dialog-title'>Thank you Contact our Company</DialogTitle>
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
      </section>
    </>
  ) 
}

export default Contact