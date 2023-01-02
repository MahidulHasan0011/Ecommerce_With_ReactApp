import React from 'react'

import {Navbar}from "../Components/Navbar"
import {Announcement}from "../Components/Announcement"
import{Slider}from "../Components/Slider"
import{Catagory}from "../Components/Catagory"
import{Products}from "../Components/Products"
import{NewsLeter}from "../Components/NewsLeter"
import{Footer}from"../Components/Footer"

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Catagory/>
      <Products/>
      <NewsLeter/>
      <Footer/>
    </div>
   
  )
}

export default Home