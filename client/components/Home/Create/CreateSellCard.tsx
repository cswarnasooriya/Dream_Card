import Image from 'next/image'
import React from 'react'

type props = {
    image: string,
    title: string
}

const CreateSellCard = ({image, title} : props) => {
  return (
    <div>
        <Image src={image} alt={title} width={140} height={60} className="mx-auto" />

        <h1 className="mt-8 mb-2 text-center text-lg text-blue-900 font-bold">
            {title}
        </h1>
        
        <p className="text-sm text-black item-center text-opacity-60 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officiis, quae deleniti veritatis eum libero quod hic odit nulla doloribus.
        </p>
      
    </div>
  )
}

export default CreateSellCard
