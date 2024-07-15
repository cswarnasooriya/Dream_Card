import React from 'react'
import Hero from './Hero/Hero'
import HotBid from './HotBid/HotBid'
import TopCollection from './TopCollection/TopCollection'
import Category from './Category/Category'

const Home = () => {
  return (
    <div >
      <Hero/>
      <HotBid/>
      <TopCollection/>
      <Category/>
    </div>
  )
}

export default Home
