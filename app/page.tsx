"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Left from "../public/Images/HomePage/leftButton.svg";
import Right from "../public/Images/HomePage/rightButton.svg";
import Packages from "./Components/Packages";
import Boat from "../public/Images/HomePage/Boat.svg";
import Giraffe2 from "../public/Images/HomePage/Girrafes.svg";
import Hike from "../public/Images/HomePage/Hike.svg";
import Destinations from "./Components/Destinations";
import Kigali from "../public/Images/HomePage/Kigali.svg";
import Rubavu from "../public/Images/HomePage/Rubavu.svg";
import Huye from "../public/Images/HomePage/Huye.svg";
import Volcanoes from "../public/Images/HomePage/Volcanoes.svg";
import Museum from "../public/Images/HomePage/Museum.svg";
import Musanze from "../public/Images/HomePage/musanze.svg";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import Why from "./Components/Why";
import Car from "../public/Images/HomePage/CarOutlined.svg";
import Date from "../public/Images/HomePage/CheckCircleOutlined.svg";
import Contact from "../public/Images/HomePage/ContactsOutlined.svg";
import Thumb from "../public/Images/HomePage/LikeOutlined.svg";
import Testimonials from "./Components/Testimonials";
import Welma from "../public/Images/HomePage/Welma.svg";
import Lucy from "../public/Images/HomePage/EE.png";
import Billy from "../public/Images/HomePage/Billy.svg";
import Rebecca from "../public/Images/HomePage/Rebecca.svg";
import Bianca from "../public/Images/HomePage/BB.png";
import Denzel from "../public/Images/HomePage/Denzel.svg";
import Nigel from "../public/Images/HomePage/Nigel.svg";
import TabNavigation from "./Components/TabNavigation";
import PhoneTab from "./Components/PhoneTab";
import Akagera from "../public/Images/NewFolder/Akagera.svg";
import Gisenyi from "../public/Images/NewFolder/Gisenyi.svg";
import Nyanza from "../public/Images/NewFolder/Nyanza.svg";

// Import separate background images for phone and laptop versions
import PhoneBackground1 from "../public/Images/PhoneBackground/PhoneBack3.jpeg";
import PhoneBackground2 from "../public/Images/PhoneBackground/PhoneBack6.jpeg";
import PhoneBackground3 from "../public/Images/PhoneBackground/PhoneBack4.jpeg";
import PhoneBackground4 from "../public/Images/PhoneBackground/PhoneBack7.jpeg";
import LaptopBackground1 from "../public/Images/HomePage/HomeBanner.svg";
import LaptopBackground2 from "../public/Images/HomePage/Bird.jpg";
import LaptopBackground3 from "../public/Images/HomePage/EE.png";
import LaptopBackground4 from "../public/Images/HomePage/Horses.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

export default function Home() {
  const phoneBackgrounds = [
    PhoneBackground1,
    PhoneBackground2,
    PhoneBackground3,
    PhoneBackground4,
  ];
  const laptopBackgrounds = [
    LaptopBackground1,
    LaptopBackground2,
    LaptopBackground3,
    LaptopBackground4,
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLaptop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBgChange = (direction) => {
    setBgIndex((prevIndex) => {
      const newIndex = direction === "next" ? prevIndex + 1 : prevIndex - 1;
      return (
        (newIndex +
          (isLaptop ? laptopBackgrounds.length : phoneBackgrounds.length)) %
        (isLaptop ? laptopBackgrounds.length : phoneBackgrounds.length)
      );
    });
  };

  const currentBackground = isLaptop
    ? laptopBackgrounds[bgIndex]
    : phoneBackgrounds[bgIndex];

  const destinationSliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <RxArrowRight className="text-brown text-3xl" />,
    prevArrow: <RxArrowLeft className="text-brown text-3xl" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Phone Version Landing Page */}
      <div
        className={`lg:hidden bg-no-repeat bg-cover h-[100vh] relative flex flex-col justify-center`}
        style={{
          backgroundImage: `url(${currentBackground.src})`,
        }}
      >
        <div className="flex flex-col space-y-3 lg:p-[10%] p-5">
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
        className={`hidden lg:flex bg-no-repeat bg-cover h-[100vh] relative flex-col justify-center`}
        style={{
          backgroundImage: `url(${currentBackground.src})`,
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
            image={Akagera}
            heading="Nyungwe National Park"
            description="Situated in the southwest of Rwanda, Nyungwe is one of the largest and oldest rainforests in Africa."
          />
          <Packages
            image={Boat}
            heading="Lake Kivu trip"
            description="A memorable experience by Lake Kivu."
          />
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
            <button
              onClick={() => destinationSliderRef.current?.slickPrev()}
              className="bg-white border border-brown rounded-sm text-brown p-2 hover:bg-brown hover:text-white"
            >
              prev
            </button>
            <button
              onClick={() => destinationSliderRef.current?.slickNext()}
              className="bg-white border border-brown rounded-sm text-brown p-2 hover:bg-brown hover:text-white"
            >
              next
            </button>
          </div>
          <Slider ref={destinationSliderRef} {...setting}>
            <Destinations
              image={Kigali}
              heading="Kigali"
              description="
              Rwanda's capital, is a vibrant, clean city known for its rolling hills, rich cultural heritage, bustling markets, modern development, and as a center for innovation and hospitality."
            />
            <Destinations
              image={Huye}
              heading="Huye"
              description="Rwanda's cultural hub, is famed for its historic sites, the Ethnographic Museum, vibrant art, traditional dance, and the University of Rwanda, enriching education and heritage."
            />
            <Destinations
              image={Rubavu}
              heading="Rubavu"
              description="A scenic lakeside town in Rwanda, offers stunning Lake Kivu views, sandy beaches, vibrant nightlife, hot springs, and serves as a gateway to Congo’s lush landscapes."
            />
            <Destinations
              image={Musanze}
              heading="Musanze"
              description="Rwanda's adventure hub, offering gorilla trekking, scenic hikes, caves, and a stunning backdrop of the Virunga Mountains."
            />
            <Destinations
              image={Volcanoes}
              heading="Volcanoes National Park"
              description="
              A renowned wildlife sanctuary in Rwanda, home to endangered mountain gorillas, volcanic landscapes, rich biodiversity, and captivating hiking experiences."
            />
            <Destinations
              image={Museum}
              heading="Ethnographic Museum"
              description="
              Located in Huye, Rwanda, showcases the country's cultural heritage, including traditional artifacts, historical exhibits, and insights into Rwandan life, art, and ancient customs."
            />
            {/* Add more Destinations as needed */}
          </Slider>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col text-center items-center space-y-3 font-loraBold py-5">
          <h4 className="text-brown lg:text-2xl">Why Choose Us</h4>
          <h3 className="text-2xl lg:text-4xl w-[90%] lg:w-[45%] xl:w-[35%]">
            Why Travel with Africa wizzy Safari
          </h3>
        </div>
        <div className="flex flex-wrap justify-evenly lg:space-x-1  space-y-5 lg:space-y-0">
          <Why image={Car} reason="100+ tours around Rwanda" />
          <Why image={Date} reason="100% Trusted travel agency" />
          <Why image={Contact} reason="10 years of travel experience" />
          <Why image={Thumb} reason="90% of travelors are happy" />
        </div>

        {/* Testimonials Section */}
        <div className="flex flex-col text-center items-center space-y-3 font-loraBold py-5">
          <h4 className="text-brown lg:text-2xl">Testimonials</h4>
          <h3 className="text-2xl lg:text-4xl w-[90%] lg:w-[45%] xl:w-[35%]">
            What our clients say about us
          </h3>
        </div>
        <Slider {...settings}>
          <Testimonials
            image={Billy}
            heading="Billy Kaboti"
            description="From booking to exploring, everything was seamless with Wizzy Safari. Truly the best experience I've ever had"
          />
          <Testimonials
            image={Rebecca}
            heading="Tafadzwa Gavazi"
            description="The guides at Wizzy Safari were knowledgeable and friendly. This was the trip of a lifetime. Thank you!"
          />
          <Testimonials
            image={Bianca}
            heading="Lesley Dier"
            description="Incredible service from start to finish! Wizzy Safari's team was so helpful and made travel stress-free and exciting."
          />
          <Testimonials
            image={Denzel}
            heading="Denzel Knight"
            description="I can't recommend Wizzy Safari enough! Stunning destinations, smooth planning, and memories I'll cherish forever."
          />
          <Testimonials
            image={Lucy}
            heading="Emma Watson"
            description="Wizzy Safari made my dream African adventure unforgettable! Every detail was perfect, and the guides were fantastic."
          />
            <Testimonials
            image={Nigel}
            heading="Kelvin Smith"
            description="Wizzy Safari made my dream African adventure unforgettable! Every detail was perfect, and the guides were fantastic."
          />
        </Slider>
      </div>
    </div>
  );
}
