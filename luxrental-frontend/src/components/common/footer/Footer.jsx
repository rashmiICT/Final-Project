import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material'
import { useState } from 'react'

const Footer = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <Link to="/contact">
              <button className="btn5">Contact Us Today</button>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>

              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button onClick={() => setOpen(true)}>Subscribe</button>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby='dialog-title'
                    aria-describedby='dialog-description'>
                    <DialogTitle id='dialog-title'>Thank you Subscribe our Company</DialogTitle>
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
              </div>
            </div>
          </div>

          {footer.map((val, key) => (
            <div className="box" key={key}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, itemKey) => (
                  <li key={itemKey}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© 2022 LuxCar Rental . Designd By Rashmi Pituwala.</span>
      </div>
    </>
  );
};

export default Footer;
