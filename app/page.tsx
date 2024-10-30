"use client";

import React, { useState } from "react";
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
import Welma from "../public/Images/HomePage/Welma.svg";
import Lucy from "../public/Images/HomePage/EE.png";
import Bianca from "../public/Images/HomePage/BB.png";
import TabNavigation from "./Components/TabNavigation";
import PhoneTab from "./Components/PhoneTab";
import Akagera from '../public/Images/NewFolder/Akagera.svg';
import Gisenyi from '../public/Images/NewFolder/Gisenyi.svg';
import Nyanza from '../public/Images/NewFolder/Nyanza.svg'


// Import the background images
import Background1 from "../public/Images/HomePage/HomeBanner.svg";
import Background2 from "../public/Images/HomePage/Bird.jpg";
import Background3 from "../public/Images/HomePage/Akagera.jpg";
import Background4 from "../public/Images/HomePage/Horses.jpg";

export default function Home() {
  const backgrounds = [Background1, Background2, Background3, Background4];
  const [bgIndex, setBgIndex] = useState(0);

  const handleBgChange = (direction) => {
    setBgIndex((prevIndex) => {
      const newIndex = direction === "next" ? prevIndex + 1 : prevIndex - 1;
      return (newIndex + backgrounds.length) % backgrounds.length;
    });
  };

  return (
    <div>
      {/* Phone Version Landing Page */}
      <div
        className="bg-black lg:hidden bg-no-repeat bg-cover h-[100vh] relative flex flex-col justify-center"
        style={{
          backgroundImage: `url(${backgrounds[bgIndex].src})`,
        }}
      >
        <div className="flex flex-col space-y-3 lg:mt-[7%] lg:p-[10%] p-5">
          <h1 className="lg:text-5xl font-loraBold text-white lg:w-[75%] xl:w-[55%] leading-normal tracking-wider">
            Experience the beauty of Rwanda with us
          </h1>
          <p className="text-white lg:text-lg font-mulish">
            Discover the Land of a Thousand Hills
          </p>
        </div>
        <div className="flex justify-between lg:px-[8%] p-5">
          <Image
            src={Left}
            alt="Previous"
            className="w-[10%]"
            onClick={() => handleBgChange("prev")}
          />
          <Image
            src={Right}
            alt="Next"
            className="w-[10%]"
            onClick={() => handleBgChange("next")}
          />
        </div>
        <div className="absolute bottom-[-40px] left-[8%] w-[85%]">
          <PhoneTab color="green" />
        </div>
      </div>

      {/* Laptop Version Landing Page */}
      <div
        className="hidden lg:flex lg:bg-banner bg-no-repeat bg-cover h-[100vh] relative flex-col justify-center"
        style={{
          backgroundImage: `url(${backgrounds[bgIndex].src})`,
        }}
      >
        <div className="flex flex-col space-y-3 lg:p-[10%] p-5">
          <h1 className="lg:text-5xl font-loraBold text-white lg:w-[75%] xl:w-[55%] leading-normal tracking-wider">
            Experience the beauty of Rwanda with us
          </h1>
          <p className="text-white lg:text-lg">
            Discover the Land of a Thousand Hills
          </p>
        </div>
        <div className="flex justify-between lg:px-[8%] p-5 relative">
          <Image
            src={Left}
            alt="Previous"
            className="w-[5%]"
            onClick={() => handleBgChange("prev")}
          />
          <Image
            src={Right}
            alt="Next"
            className="w-[5%]"
            onClick={() => handleBgChange("next")}
          />
        </div>
        <div className="absolute bottom-[-40px] left-[14%] w-[70%]">
          <TabNavigation color="green" />
        </div>
      </div>

      <div className="bg-white px-5 py-10 lg:space-y-[5%]">
        {/* Packages Section */}
        <div className="flex flex-col text-center items-center space-y-3 font-loraBold py-5 lg:pt-[5%] lg:pb-[1%]">
          <h4 className="text-brown lg:text-2xl">Choose your package</h4>
          <h3 className="text-2xl lg:text-4xl w-[90%] lg:w-[45%] xl:w-[35%]">
            Select your Best Package for your Travel
          </h3>
        </div>
        <div className="flex space-y-3 lg:space-y-0 flex-wrap justify-evenly px-5 lg:gap-5">
          <Packages
            image={Giraffe2}
            heading="Akagera National Park"
            description="Activities include game drives, boat safaris, and more."
          />
          <Packages
            image={Hike}
            heading="Bisoke Hike"
            description="A challenging hike in Volcanoes National Park."
          />
          <Packages
            image={Boat}
            heading="Lake Kivu trip"
            description="A memorable experience by Lake Kivu."
          />
          <Packages
            image={Akagera}
            heading="Nyungwe National Park"
            description="Situated in the southwest of Rwanda, Nyungwe is one of the largest and oldest rainforests in Africa."
          />
          <Packages
            image={Nyanza}
            heading="Nyanza"
            description="Discover the history of Rwandan kings and traditional lifestyle at this reconstructed royal residence."
          />
          <Packages
            image={Gisenyi}
            heading="Gisenyi"
            description="A cozy place with beautiful lake views, perfect for a peaceful getaway"
          />
        </div>

        {/* Popular Destinations Section */}
        <div className="flex flex-col text-center items-center space-y-3 font-loraBold py-5">
          <h4 className="text-brown lg:text-2xl">Popular Destinations</h4>
          <h3 className="text-2xl lg:text-4xl w-[90%] lg:w-[45%] xl:w-[35%]">
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
              description="Rwanda's vibrant capital with rich culture and modern development."
            />
            <Destinations
              image={Kigali}
              heading="Kigali"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>

        {/* Why Us Section */}
        <div className="flex flex-col text-center items-center space-y-3 font-loraBold py-5">
          <h4 className="text-brown lg:text-2xl">Why Us?</h4>
          <h3 className="text-2xl lg:text-4xl w-[90%] lg:w-[45%] xl:w-[35%]">
            Why Travel with Africa Wizzy Safari
          </h3>
        </div>
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-5 lg:space-y-0 px-5">
          <Why image={Car} reason="100+ tours around Rwanda" />
          <Why image={Date} reason="100% Trusted travel agency" />
          <Why image={Contact} reason="10 years of travel experience" />
          <Why image={Thumb} reason="90% of travelers are happy" />
        </div>

        {/* Testimonials Section */}
        <div className="flex flex-col text-center items-center space-y-3 font-loraBold py-5">
          <h4 className="text-brown lg:text-2xl">Testimonials</h4>
          <h3 className="text-2xl lg:text-4xl w-[90%] lg:w-[45%] xl:w-[35%]">
            What Our Happy Clients Say About Us
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-5 lg:space-y-0 space-y-5 px-5">
          <Testimonials
            image={Welma}
            name="Welma Pop"
            comment="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Testimonials
            image={Lucy}
            name="Lucy Conlan"
            comment="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Testimonials
            image={Bianca}
            name="Bianca Kenzo"
            comment="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
}
