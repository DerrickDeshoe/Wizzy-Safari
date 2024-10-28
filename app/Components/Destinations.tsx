import React from "react";
import Image, { StaticImageData } from "next/image";

interface Destination {
  image: StaticImageData;
  heading: String;
  description: String;
}

const Destinations = (props: Destination) => {
  return (
    <div className="flex flex-col w-[90%] lg:w-[31%] space-y-4 ">
      <div className=" border-4 border-green rounded-[18%]">
        <Image src={props.image} alt="image" className=" w-full" />
      </div>
      <div className="flex flex-col justify-between space-y-7">
        <div className="flex flex-col space-y-4">
          <h4 className="font-loraBold text-[20px]">{props.heading}</h4>
          <p className="font-mulishSemiBold text-xs text-grayish w-[60%] lg:w-[90%] lg:text-sm">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
