import React from 'react'
import { list } from '../../data/Data'
import { Link } from "react-router-dom"

const RecentCard = () => {
  return  <>
    <div className="content grid3 mtop">
    {list.map((val,index)=>{
         // eslint-disable-next-line no-unused-vars
         const { cover, category, location, name, price, type } = val
    return(
        <div className="box shadow" key={index}>
         <div className="img">
            <img src={cover} alt="" />
            </div>   
            <div className="text">
                <div className="category flex">
                    <span style={{background:category === "For Rent" ? "#ffff" : "#fff", color: category === "For Rent" ? "#ff9800" : "#ff9800" }}> {category}   </span>
                <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                    <i className='fa fa-location-dot'></i>{location}
                </p>
            </div>
              <div className="button flex">
                <div>
                <Link to='/Booking'>
                    <button className='btn2'>{price}
                
                    </button>
                </Link>
                </div>
              </div>
        </div>
    )
    })}
    </div>
    </>
  
}

export default RecentCard