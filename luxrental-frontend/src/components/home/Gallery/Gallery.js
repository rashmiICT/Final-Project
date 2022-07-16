/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Gallery.css'
import Pic1 from '../../images/images/Pic01.jpg'
import Pic2 from '../../images/images/Pic02.jpg'
import Pic3 from '../../images/images/Pic03.jpg'
import Pic4 from '../../images/images/Pic04.jpg'
import Pic5 from '../../images/images/Pic05.jpg'
import Pic6 from '../../images/images/Pic06.jpg'
import Pic7 from '../../images/images/Pic07.jpg'
import Pic8 from '../../images/images/Pic08.jpg'

function Gallery() {
  return (
    <div>
      <h1 className="title1"> Our Gallery </h1>
      <div className='image-gallery'>
        <div className='image-set1'>
          <img src={Pic1} alt="Picture 01" className='Pic1'/>
          <img src={Pic2} alt="Picture 02" className='Pic2'/>
          <img src={Pic3} alt="Picture 03" className='Pic3'/>
        </div>
        <div className='image-set2'>
          <img src={Pic4} alt="Picture 04" className='Pic4'/>
          <img src={Pic5} alt="Picture 05" className='Pic5'/>
        </div>
        <div className='image-set3'>
          <img src={Pic6} alt="Picture 06" className='Pic6'/>
          <img src={Pic7} alt="Picture 07" className='Pic7'/>
          <img src={Pic8} alt="Picture 08" className='Pic8'/>
        </div> 
      </div>
    </div>
  )
}

export default Gallery
