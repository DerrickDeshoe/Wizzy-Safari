import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Testimonies {
  image: StaticImageData;
  heading: String;
  description: String;
}

const Testimonials = (props: Testimonies) => {
  return (
    <div className="flex flex-col w-[90%] lg:w-[20%] border border-outline space-y-4 p-5">
      <div className=" flex flex-col items-center space-y-4">
        <div className="border-4 border-green rounded-[50%] p-2">
          <Image src={props.image} alt="image" className="" />
        </div>
        <h4 className="font-loraBold text-[20px]">{props.heading}</h4>
      </div>
      <div className="flex flex-col space-y-5 pb-5">
        <p className="font-mulishSemiBold text-grayish">{props.description}</p>
      </div>
    </div>
  );
};

export default Testimonials;
