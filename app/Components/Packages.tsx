import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Package {
  image: StaticImageData;
  heading: String;
  description: String;
}

const Packages = (props: Package) => {
  return (
    <div className="flex flex-col lg:w-[31%] border border-outline rounded-xl">
      <Image src={props.image} alt="image" className="w-full" />
      <div className="flex flex-col justify-between p-3 h-[100%] space-y-7">
        <div className="flex flex-col space-y-4">
          <h4 className="font-loraBold text-[20px]">{props.heading}</h4>
          <p className="font-mulishSemiBold">{props.description}</p>
        </div>

        <div className="">
          <Link href="#">
            <button className="p-2 rounded-md px-2 lg:px-6 font-mulishBold text-xs text-white bg-brown">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
