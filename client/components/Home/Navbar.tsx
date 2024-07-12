import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-[13vh]">
        <div className="w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto flex items-center justify-between">

            {/* logo part */}
            <Image src='/images/logo.png' alt='logo here'
            width={180} height={180}
            />

        </div>
      
    </div>
  )
}

export default Navbar
