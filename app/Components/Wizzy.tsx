import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'


interface Wizzy {

    image: StaticImageData
    description: String
}

const Wizzy = (props:Wizzy) => {
  return (
    <div className='flex flex-wrap gap-4 justify-center lg:justify-start lg:space-x-[10%]'>
        <Image src={props.image} alt='image' className='w-[90%] lg:w-[40%]'/>
        <p className='font-mulishSemiBold w-[90%] lg:w-[35%] xl:w-[30%] text-xs lg:text-[15px] xl:text-lg leading-normal tracking-wide'>{props.description}</p>
    </div>
  )
}

export default Wizzy
