import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-12 pb-12'>
      <div className="w-4/5 mx-auto grid grid-cols-1 border-b-[2.5px] border-b-slate-300 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">

      {/* 1st footer part */}
      <div>
        <div className="text-3xl text-red-600 font-semibold mb-4 text-center justify-center">
          Dream Card.lk

        </div>

        <p className="text-gray-600 text-sm mt-3 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius in harum tempore illum eveniet odit perferendis quibusdam quasi ratione consequatur? Quas, aperiam assumenda ad eum laboriosam veritatis soluta. Excepturi, tempore.
        </p>

        <div className="mt-4 flex items-center justify-center space-x-4">
          <FaFacebookF className="w-6 h-6 text-blue-700"/>
          <FaTwitter className="w-6 h-6 text-sky-500"/>
          <FaYoutube className="w-6 h-6 text-pink-700"/>
          <FaInstagram className="w-6 h-6 text-rose-700"/>
        </div>
      </div>

      {/* 2nd part footer */}
      <div className="md:mx-auto mx-0">
        <h1 className="footer__title">Market Place</h1>
        <p className="footer__link">All Data</p>
        <p className="footer__link">Art</p>
        <p className="footer__link">Music</p>
        <p className="footer__link">Collections</p>
        <p className="footer__link">Wallet</p>


      </div>

       {/* 3rd part footer */}
       <div className="md:mx-auto mx-0">
        <h1 className="footer__title">Company</h1>
        <p className="footer__link">People</p>
        <p className="footer__link">Work</p>
        <p className="footer__link">Trends</p>
        <p className="footer__link">Contact</p>
        <p className="footer__link">FAQ</p>


      </div>

       {/* 4th part footer */}
       <div className="md:mx-auto mx-0">
        <h1 className="footer__title">Profile</h1>
        <p className="footer__link">Address</p>
        <p className="footer__link">Teams</p>
        <p className="footer__link">Access</p>
        <p className="footer__link">Done</p>
        <p className="footer__link">Places</p>


      </div>

      </div>

      <div className="text-center mt-4 text-sm text-black opacity-75">
        Copyright by CS Warnasooriya July 2024 - warnasooriyacs1000@gmail.com- - - - - Alawwa | Colombo | Sri Lanka
      </div>
      
    </div>
  )
}

export default Footer
