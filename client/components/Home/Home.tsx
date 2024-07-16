"use client"

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import HotBid from './HotBid/HotBid'
import TopCollection from './TopCollection/TopCollection'
import Category from './Category/Category'
import Create from './Create/Create'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Home = () => {

  useEffect (()=> {
    const initAOS = async( )=>{
      await import('aos');
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom"
      })
    }
    initAOS();
  }, [])

  return (
    <div >
      <Hero/>
      <HotBid/>
      <TopCollection/>
      <Category/>
      <Create/>
    </div>
  )
}

export default Home
