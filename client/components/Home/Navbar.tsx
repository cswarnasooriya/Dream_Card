import { navLinks } from '@/constants/Constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-[13vh]">
        <div className="w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto flex items-center justify-between">

            {/* logo part */}
            <Image src='/images/logo.png' alt='logo here'
            width={180} height={180}
            />

            {/* Nav Links */}
            <div className="lg:flex hidden items-center space-x-10">

                {navLinks.map((link) => {
                    return(
                        <Link href={link.url} key={link.id}>
                            <p className="text-lg font-semibold cursor-pointer hover:text-blue-800 transition-all duration-200 text-gray-900">
                                {link.label}
                            </p>
                        </Link>
                    )
                })}

            </div>

            {/* icons */}

        </div>
      
    </div>
  )
}

export default Navbar
