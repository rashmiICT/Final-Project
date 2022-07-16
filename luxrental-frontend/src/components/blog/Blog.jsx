import React from 'react'
import Back from '../common/Back'
import RecentCard from '../home/recent/RecentCard'
import img from "../images/about.jpg"
import "../home/recent/Recent.css"

const Blog = () => {
  return (
    <>
    
    <section className='blog-out mb'>
    <Back name='Blog' title='Rent Car Details' cover={img} />
    <div className='container recent'>
      <RecentCard />
    </div>
  </section>
   </>
)

}

export default Blog