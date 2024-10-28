import React from "react";
import Packages from "../Components/Packages";
import Boat from "../../public/Images/HomePage/Boat.svg";
import Giraffe from "../../public/Images/HomePage/Girrafe.svg";
import Giraffe2 from "../../public/Images/HomePage/Girrafes.svg";
import Hike from "../../public/Images/HomePage/Hike.svg";
import Hike2 from "../../public/Images/HomePage/Hike2.svg";
import Hike3 from "../../public/Images/TourPackagePage/Hike3.svg";
import { RxArrowLeft } from "react-icons/rx";
import { RxArrowRight } from "react-icons/rx";
import LandingInfo from "../Components/LandingInfo";

const TourPackage = () => {
  return (
    <div className="">
      <div className=" flex justify-center items-center bg-tour bg-[80% 90%] bg-no-repeat h-[80vh] w-screen">
        <LandingInfo h1='Tour Package' pageName2='Tour Package'/>
      </div>
      <div className="flex flex-col text-center items-center space-y-3 font-loraBold lg:py-5">
        <h4 className="text-brown lg:text-2xl ">Choose your package</h4>
        <h3 className=" text-2xl lg:text-4xl w-[90%] lg:w-[45%] xl:w-[35%]">
          Select your Best Package for your Travel
        </h3>
      </div>
      <div className="flex space-y-3 lg:space-y-0 flex-wrap justify-evenly px-5 lg:gap-5">
        <Packages
          image={Giraffe2}
          heading="Akagera National Park"
          description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
        />
        <Packages
          image={Hike}
          heading="Bisoke Hike"
          description="The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park."
        />
        <Packages
          image={Boat}
          heading="Lake Kivu trip"
          description="A trip to Lake Kivu can be a truly unique and memorable experience."
        />
        <Packages
          image={Giraffe}
          heading="Akagera National Park"
          description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
        />
        <Packages
          image={Hike2}
          heading="Bisoke Hike"
          description="The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park."
        />
        <Packages
          image={Boat}
          heading="Lake Kivu trip"
          description="A trip to Lake Kivu can be a truly unique and memorable experience."
        />
        <Packages
          image={Giraffe}
          heading="Akagera National Park"
          description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
        />
        <Packages
          image={Hike3}
          heading="Bisoke Hike"
          description="The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park."
        />
        <Packages
          image={Boat}
          heading="Lake Kivu trip"
          description="A trip to Lake Kivu can be a truly unique and memorable experience."
        />
      </div>
      <div className="hidden lg:flex justify-between p-10">
        <button className="bg-white border border-brown rounded-sm text-brown p-2 hover:bg-brown hover:text-white">
          <RxArrowLeft />
        </button>
        <button className="bg-white border border-brown rounded-sm text-brown p-2 hover:bg-brown hover:text-white">
          <RxArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TourPackage;
