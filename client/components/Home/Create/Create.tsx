import React from 'react'
import CreateSellCard from './CreateSellCard' 

const Create = () => {
  return (
    <div className="pt-16 pb-20">
        <h1 data-aos="fade-down"
                 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-900">
            Create and Sell Your Data
        </h1>

        <div className="w-[80%] mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 ">
            <div data-aos="fade-up" data-aos-delay="100">
                <CreateSellCard 
                    image="/images/t1.png"
                    title="1. Set up your profile"
                
                />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <CreateSellCard 
                    image="/images/t1.png"
                    title="2. Create your collection"
                
                />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <CreateSellCard 
                    image="/images/t1.png"
                    title="3. Add your Data free"
                
                />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
                <CreateSellCard 
                    image="/images/t1.png"
                    title="4. List them to sell"
                
                />
            </div>


        </div>
      
    </div>
  )
}

export default Create
