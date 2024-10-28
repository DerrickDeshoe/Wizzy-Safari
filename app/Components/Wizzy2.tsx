import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'


interface Wizzy2 {

    image: StaticImageData
    description: String
}

const Wizzy2 = (props:Wizzy2) => {
  return (
    <div className='flex flex-wrap-reverse lg:flex-wrap gap-4 justify-center lg:justify-none lg:space-x-[7%] xl:space-x-[10%]'>
        <p className='font-mulishSemiBold w-[90%] lg:w-[35%] xl:w-[30%] text-xs lg:text-[15px] xl:text-lg leading-normal tracking-wide '>{props.description}</p>
        <Image src={props.image} alt='image' className='w-[90%] lg:w-[40%] '/>     
    </div>
  )
}

export default Wizzy2;