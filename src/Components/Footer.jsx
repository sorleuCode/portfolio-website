import React from 'react'
import DateObject from "react-date-object";



const Footer = () => {
  const date = new DateObject()
  const year = date.format("YYYY")
  return (
    <>
    <hr  className='bg-gray-700 w-full h-2/6 my-10'/>
    <footer className='bg-gradient-to-b from-gray-900 to-gray-950 w-full h-5/6'>
      <p className='text-white'>&#169;{year} | sorleuCode, All rights reserved</p>
    </footer>
    </>
  )

    
}

export default Footer
