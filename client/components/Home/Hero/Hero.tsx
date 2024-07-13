import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="h-[calc(100vh-13vh)] w-full flex justify-center flex-col mt-8">
        <div className="w-4/5 mx-auto items-center grid grid-cols-1 lg:grid-cols-5 gap-12 ">

        {/* text content */}
        <div className="col-span-2 mt-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl text-blue-950 font-bold ">
                Buy, Sell And Collect Data
            </h1>
            <p className="text-sm md:text-[17px] text-gray-700 text-opacity-80 mt-4 font-medium text-justify">
                Join with us and grow your own bussiness and experiences all over the time. Otherwise you can save your data with us and trade with our nexis customers always..!

            </p>

            <div className="flex items-center space-x-3 mt-10">
                <button className="w-36 rounded-full py-3 px-8 bg-blue-800 font-semibold text-white transition-all hover:bg-blue-950 text-center">Upload</button>

                <button className="w-36 rounded-full py-3 px-8 bg-rose-800 font-semibold text-white transition-all hover:bg-rose-950 text-center">Explore</button>
            </div>
        </div>

        {/* image content */}
        <div className="col-span-3 mt-8">
            <Image src="/images/hero.png" alt='hero image' width={800} height={700} />
        </div>

        </div>
    
  </div>
  )
}

export default Hero
