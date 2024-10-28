import React from 'react'
import Image from 'next/image'
import Caret from '../../public/Images/CaretRight.svg'

interface Info {
    h1: String
    pageName2: String
}

const LandingInfo = (props:Info) => {
  return (
    <div className='flex flex-col items-center font-loraBold lg:space-y-4'>
      <h1 className='text-white lg:text-7xl'>{props.h1}</h1>
      <div className='flex space-x-2 items-center'>
        <p className='text-white lg:ext-3xl'>Home</p>
        <Image src={Caret} alt='Image'/>
        <p className='text-brown'>{props.pageName2}</p>
      </div>
    </div>
  )
}

export default LandingInfo
