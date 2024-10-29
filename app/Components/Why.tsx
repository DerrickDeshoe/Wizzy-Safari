import { StaticImageData } from 'next/image'
import React from 'react';
import Image from 'next/image';

interface why {

    image: StaticImageData
    reason: String
}

const Why = (props:why) => {
  return (
    <div className='bg-green px-5 py-5 rounded-3xl text-white flex flex-col items-center text-center w-[100%] lg:w-[25%] space-y-2'>
        <Image src={props.image} alt='image' className=' w-[12%] lg:w-[15%]'/>
        <p className='font-loraBold w-[65%]'>{props.reason}</p>
    </div>
  )
}

export default Why;
