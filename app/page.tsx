"use client";

import Image from "next/image";
import Left from "../public/Images/HomePage/leftButton.svg";
import Right from "../public/Images/HomePage/rightButton.svg";
import Packages from "./Components/Packages";
import Boat from "../public/Images/HomePage/Boat.svg";
import Giraffe from "../public/Images/HomePage/Girrafe.svg";
import Giraffe2 from "../public/Images/HomePage/Girrafes.svg";
import Hike from "../public/Images/HomePage/Hike.svg";
import Hike2 from "../public/Images/HomePage/Hike2.svg";
import Destinations from "./Components/Destinations";
import Kigali from "../public/Images/HomePage/Kigali.svg";
import { RxArrowLeft } from "react-icons/rx";
import { RxArrowRight } from "react-icons/rx";
import Why from "./Components/Why";
import Car from "../public/Images/HomePage/CarOutlined.svg";
import Date from "../public/Images/HomePage/CheckCircleOutlined.svg";
import Contact from "../public/Images/HomePage/ContactsOutlined.svg";
import Thumb from "../public/Images/HomePage/LikeOutlined.svg";
import Testimonials from "./Components/Testimonials";
import Welma from '../public/Images/HomePage/Welma.svg';
import Lucy from '../public/Images/HomePage/EE.png';
import Bianca from '../public/Images/HomePage/BB.png';
import TabNavigtaion from './Components/TabNavigation';

export default function Home() {
  return (
    <div className="">
      {/* Phone Version Landing Page */}
      <div className="bg-black lg:hidden bg-no-repeat bg-cover h-[100vh] relative flex flex-col justify-center">
        <div className="flex flex-col space-y-3 lg:mt-[7%] lg:p-[10%] p-5">
          <h1 className="lg:text-5xl font-loraBold text-white lg:w-[75%] xl:w-[55%] leading-normal tracking-wider">
            Experience the beauty of Rwanda with us
          </h1>
          <p className="text-white lg:text-lg font-mulish">
            Discover the Land of a Thousand Hills
          </p>
        </div>
        <div className="flex justify-between lg:px-[8%] p-5">
          <Image src={Left} alt="image" className="w-[10%]" />
          <Image src={Right} alt="image" className="w-[10%]" />
        </div>
      </div>

      {/* Laptop Version Landing Page*/}

      <div className="">
        <div className="hidden lg:flex lg:bg-banner bg-no-repeat bg-cover h-[100vh] relative flex-col justify-center">
          <div className="flex flex-col space-y-3  lg:p-[10%] p-5">
            <h1 className="lg:text-5xl font-loraBold text-white lg:w-[75%] xl:w-[55%] leading-normal tracking-wider">
              Experience the beauty of Rwanda with us
            </h1>
            <p className="text-white lg:text-lg">
              Discover the Land of a Thousand Hills
            </p>
          </div>
          <div className="flex justify-between lg:px-[8%] p-5">
            <Image src={Left} alt="image" className="w-[10%] lg:w-[5%]" />
            <Image src={Right} alt="image" className="w-[10%] lg:w-[5%]" />
          </div>
          <div className="lg:w-[70%] flex justify-center">
           {/* <TabNavigtaion/> */}
          </div>
        </div>
        <div className="bg-white px-5 py-10 lg:space-y-[5%] ">
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
          </div>
          <div className="flex flex-col text-center items-center space-y-3 font-loraBold py-5">
            <h4 className="text-brown lg:text-2xl ">Popular Destinations</h4>
            <h3 className=" text-2xl lg:text-4xl w-[90%] lg:w-[45%] xl:w-[35%]">
              Select Our Best Popular Destinations
            </h3>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex space-x-3 justify-end">
              <button className="bg-white border border-brown rounded-sm text-brown p-2 hover:bg-brown hover:text-white">
                <RxArrowLeft />
              </button>
              <button className="bg-white border border-brown rounded-sm text-brown p-2 hover:bg-brown hover:text-white">
                <RxArrowRight />
              </button>
            </div>
            <div className="flex space-x-3">
              <Destinations
                image={Kigali}
                heading="Kigali"
                description="Kigali, Rwanda's vibrant capital, offers stunning landscapes, rich culture, and modern development."
              />
              <Destinations
                image={Kigali}
                heading="Kigali"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
              />
              {/* <Destinations
                image={Kigali}
                heading="Kigali"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
              />
              <Destinations
                image={Kigali}
                heading="Kigali"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
              />
              <Destinations
                image={Kigali}
                heading="Kigali"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
              />
              <Destinations
                image={Kigali}
                heading="Kigali"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
              /> */}
            </div>
          </div>
          <div className="flex flex-col text-center items-center space-y-3 font-loraBold py-5">
            <h4 className="text-brown lg:text-2xl ">Why Us?</h4>
            <h3 className=" text-2xl lg:text-4xl w-[90%] lg:w-[45%] xl:w-[35%]">
              Why Travel with Africa wizzy Safari
            </h3>
          </div>
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-5 lg:space-y-0 px-5">
            <Why image={Car} reason="100+ tours around Rwanda" />
            <Why image={Date} reason="100% Trusted travel agency" />
            <Why image={Contact} reason="10 years of travel experience" />
            <Why image={Thumb} reason="90% of travelors are happy" />
          </div>
          <div className="flex flex-col text-center items-center space-y-3 font-loraBold py-5">
            <h4 className="text-brown lg:text-2xl ">Testimonials</h4>
            <h3 className=" text-2xl lg:text-4xl w-[90%] lg:w-[45%] xl:w-[35%]">
              What our clients say about us
            </h3>
          </div>
          <div className="flex flex-wrap space-x-3">
            <Testimonials image={Welma} heading='Welma Nikek' description='I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.'/>
            <Testimonials image={Lucy} heading='Emma Watson' description='I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.'/>
            <Testimonials image={Bianca} heading='Bianca Rogers' description='I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.'/>
            {/* <Testimonials image={Welma} heading='Welma Nikek' description='I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.'/>
            <Testimonials image={Lucy} heading='Emma Watson' description='I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.'/> */}
          </div>
        </div>
      </div>
    </div>
  );
}
