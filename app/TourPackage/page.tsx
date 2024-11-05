import React from "react";
import Packages from "../Components/Packages";
import Boat from "../../public/Images/HomePage/Boat.svg";
import Giraffe from "../../public/Images/HomePage/Girrafe.svg";
import Giraffe2 from "../../public/Images/HomePage/Girrafes.svg";
import Hike from "../../public/Images/NewFolder/Hikke.svg";
import { RxArrowLeft } from "react-icons/rx";
import { RxArrowRight } from "react-icons/rx";
import LandingInfo from "../Components/LandingInfo";
import Akagera from "../../public/Images/NewFolder/Akagera.svg";
import Gisenyi from "../../public/Images/NewFolder/Gisenyi.svg";
import Bisate from "../../public/Images/TourPackagePage/Bisate.svg";
import Arts from "../../public/Images/TourPackagePage/ArtsCenter.svg";
import Hotel from "../../public/Images/TourPackagePage/Hotel.svg";

const TourPackage = () => {
  return (
    <div className="">
      <div className=" flex justify-center items-center bg-tour bg-[80% 90%] bg-no-repeat h-[80vh] w-[100%]">
        <LandingInfo h1="Tour Package" pageName2="Tour Package" />
      </div>
      <div className="flex flex-col text-center items-center space-y-3 font-loraBold lg:py-5">
        <h4 className="text-brown lg:text-2xl ">Choose your package</h4>
        <h3 className=" text-2xl lg:text-4xl w-[90%] lg:w-[45%] xl:w-[35%]">
          Select your Best Package for your Travel
        </h3>
      </div>
      <div className="flex space-y-3 lg:space-y-0 flex-wrap justify-evenly px-5 lg:gap-5">
        <Packages
          image={Bisate}
          heading="Bisate Lodge"
          description="Nested in the foothills of Virunga Mountains, this lodge offers stuning views and easy access to gorilla trekking."
        />
        <Packages
          image={Giraffe2}
          heading="Akagera National Park"
          description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
        />
        <Packages
          image={Gisenyi}
          heading="Gisenyi"
          description="A cozy place with beautiful lake views, perfect for a peaceful getaway"
        />
        <Packages
          image={Hike}
          heading="Bisoke Hike"
          description="The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park."
        />
        <Packages
          image={Arts}
          heading="Kigali Arts Center"
          description="A beautiful and serene that offers guided tours and beautiful educational resources about Rwanda's history."
        />
        <Packages
          image={Boat}
          heading="Lake Kivu trip"
          description="A trip to Lake Kivu can be a truly unique and memorable experience."
        />
        <Packages
          image={Akagera}
          heading="Nyungwe National Park"
          description="Situated in the southwest of Rwanda, Nyungwe is one of the largest and oldest rainforests in Africa."
        />

        <Packages
          image={Giraffe}
          heading="Akagera National Park"
          description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
        />
        <Packages
          image={Hotel}
          heading="Bujumbura"
          description="A luxurious lakeside hotel with beautiful views of Lake Tanganyika, ideal for relaxation and leisure activities."
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
