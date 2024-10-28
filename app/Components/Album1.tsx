import React from "react";
import Image, { StaticImageData } from "next/image";

interface Album {
  image: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  image4: StaticImageData;
  image5: StaticImageData;
  image6: StaticImageData;
  image7: StaticImageData;
  image8: StaticImageData;
}

const Album1 = (props: Album) => {
  return (
    <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-3 lg:justify-center">
      <div className="flex xl:w-[35%] justify-between">
        <div className="flex flex-col space-y-3 lg:space-y-0 w-[43%] xl:w-[43%] ">
          <Image src={props.image} alt="image"  className="  lg:h-[70%] xl:w-[99%]"/>
          <Image src={props.image2} alt="image" className="  lg:h-[70%] xl:w-[99%]" />
        </div>
        <Image src={props.image3} alt="image" className="w-[55%] xl:w-[54%]"/>
      </div>
      <div className="flex flex-col space-y-3 w-[100%] xl:w-[19%]">
        <Image src={props.image4} alt="image" className="w-full"/>
        <Image src={props.image5} alt="image" className="w-full xl:w-[100%]"/>
      </div>
      <div className="flex flex-col space-y-3 xl:w-[39%] ">
        <Image src={props.image6} alt="image" className="xl:w-[100%]"/>
        <div className="flex space-x-2">
          <Image src={props.image7} alt="image" className="w-[48%] xl:w-[80%]"/>
          <Image src={props.image8} alt="image" className="w-[48%] xl:w-[80%]"/>
        </div>
      </div>
    </div>
  );
};

export default Album1;
