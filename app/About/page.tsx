'use client'

import React from "react";
import Wizzy from "../Components/Wizzy";
import Wizzy2 from "../Components/Wizzy2";
import BlueSea from "../../public/Images/AboutPage/BlueSea.svg";
import Island from "../../public/Images/AboutPage/Island.svg";
import Explore from "../../public/Images/AboutPage/Explore.svg";
import Tab from "../../public/Images/AboutPage/Tab.svg";
import Image from "next/image";
import Zebra from "../../public/Images/AboutPage/Zebra.svg";
import Zebra2 from "../../public/Images/AboutPage/Zebra2.png";
import Link from "next/link";
import TabNavigtaion from "../Components/TabNavigation";
import PhoneTab from "../Components/PhoneTab";

const AboutUs = () => {
  return (
    <div className="lg:space-y-5">
      <div className="flex flex-col justify-start items-center h-[100vh] lg:w-[70%] xl:w-[60%]">
        <div className=" flex flex-col lg:space-y-3 lg:pl-10 lg:mt-[10%]">
          <h1 className="font-loraBold lg:text-5xl lg:w-[75%] xl:w-[65%]">
            We are dedicated to providing the best travel experience.
          </h1>
          <p className="font-mulishSemiBold lg:text-lg">
            Discover the Land of a Thousand Hills
          </p>
        </div>
        <div className=" absolute bottom-[-40px] left-[14%] w-[70%]">
          {/* <TabNavigtaion color="white" /> */}
        </div>
        <div className="bg-contact bg-cover bg-no-repeat h-[80vh]"></div>
        {/* <Image
          src={Zebra2}
          alt="image"
          className=" absolute top-0 right-0 lg:w-[33%] xl:w-[33%] z-40"
        /> */}
      </div>
      <div className="flex flex-col space-y-4 items-center lg:space-y-[3%]">
        <h2 className="font-loraBold px-5 lg:px-10 lg:text-5xl">
          Welcome to Africa Wizzy Safari
        </h2>
        <Image src={Tab} alt="image" className="w-[25%] lg:w-[17%]" />
      </div>
      <div className="p-5 lg:p-10 flex flex-col space-y-5 lg:space-y-0 lg:gap-10 lg:justify-center">
        <Wizzy
          image={BlueSea}
          description="Welcome to Africa Wizzy Safari, a leading tourism company based in Rwanda. We have been in business for over 5 years and are committed to providing top-quality tours and services to our clients. Our mission is to showcase the beauty and culture of Rwanda to visitors from around the world, and to contribute to the sustainable development of the country through responsible tourism practices."
        />
        <Wizzy2
          image={Explore}
          description="At Africa Wizzy safari, we offer a wide range of tours and activities, including cultural and historical tours, wildlife safaris, mountain gorilla trekking, and more. Our experienced and knowledgeable guides will ensure that you have a safe and enjoyable experience while exploring the stunning landscapes and rich culture of Rwanda."
        />
        <Wizzy
          image={BlueSea}
          description="We are proud to have received numerous awards and accolades for our commitment to excellence, including the RDD award and the Excellence award. Thank you for choosing Africa Wizzy Safari for your travel needs in Rwanda. We look forward to welcoming you on one of our tours soon!"
        />
      </div>
    </div>
  );
};

export default AboutUs;
