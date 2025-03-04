import { HotBidData } from '@/data/data'
import React from 'react'
import HotBidCard from './HotBidCard'

const HotBid = () => {
  return (
    <div className="pt-32 pb-12">
        <h1
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-900">
            Hot Bids
        </h1>

        <div className="w-4/5 mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {HotBidData.map((data,i) => {
            return <>
                <div key={data.id} data-aos="fade-right" data-aos-anchor-placement ="top-center"
                data-aos-delay={`${i * 200}`}>

                   <HotBidCard data={data} />

                </div>
            
            
            </>
            
        })}

        </div>
      
    </div>
  )
}

export default HotBid
