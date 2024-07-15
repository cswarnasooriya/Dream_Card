import React from 'react'
import Hero from './Hero/Hero'
import HotBid from './HotBid/HotBid'
import TopCollection from './TopCollection/TopCollection'
import Category from './Category/Category'
import Create from './Create/Create'

const Home = () => {
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
