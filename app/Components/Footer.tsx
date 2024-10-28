import React from "react";
import Arrow from "../../public/Images/Footer/Arroe.svg";
import Image from "next/image";
import Facebook from "../../public/Images/Footer/facebook.svg";
import Twitter from "../../public/Images/Footer/twitter.svg";
import LinkedIn from "../../public/Images/Footer/linkedin.svg";
import Instagram from "../../public/Images/Footer/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-green p-5 lg:p-10 text-white space-y-7 lg:flex lg:justify-between lg:space-y-0">
      <div className="flex flex-col space-y-3">
        <h3 className="font-loraBold text:sm lg:text-3xl lg:w-[55%]">
          If you have any question, Let us help you!
        </h3>
        <p className="font-mulish text-xs lg:text-lg lg:w-[50%]">
          If you have any questions or would like to book a tour with us, please
          don't hesitate to contact us.
        </p>
        <div className="flex flex-col space-y-1 font-mulish text-xs lg:text-sm">
          <p>Phone: +263 71 899 7246</p>
          <p>Email: info@rwandatourism.com </p>
          <p>Address: Kigali, Rwanda</p>
        </div>
        <p className="font-mulishSemiBold text-sm lg:text-lg">
          Subscribe to our newspaper
        </p>
        <div className="flex space-x-2">
          <input
            type="text"
            name="email"
            placeholder="input your email here"
            className="p-2 px-2 text-xs lg:text-sm rounded-md"
          />
          <button className="bg-brown rounded-lg w-[8%] p-1 lg:w-[5%]">
            <Image src={Arrow} alt="image" />
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-5">
          <div className="w-[80%] flex justify-between">
            <Image src={Arrow} alt="Image" />
            <div className="flex space-x-1 ">
              <div className=" p-2 border border-white rounded-full">
                <Image src={Facebook} alt="image" className="w-[100%]" />
              </div>
              <div className=" p-2 border border-white rounded-full">
                <Image src={Twitter} alt="image" className="w-[100%]" />
              </div>
              <div className=" p-2 border border-white rounded-full">
                <Image src={LinkedIn} alt="image" className="w-[100%]" />
              </div>
              <div className=" p-2 border border-white rounded-full">
                <Image src={Instagram} alt="image" className="w-[100%]" />
              </div>

           
            </div>
          </div>
          <p className="text-xs lg:text-lg ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <div className="flex justify-between lg:pt-[10%]">
            <div className="flex flex-col space-y-2 font-mulish text-xs lg:text-sm">
              <p>Home</p>
              <p>Testimonals</p>
              <p>Destinations</p>
              <p>Sign In</p>
            </div>
            <div className="flex flex-col space-y-2 font-mulish text-xs lg:text-sm">
              <p>About Us</p>
              <p>Peckages</p>
              <p>Events</p>
              <p>Galleries</p>
            </div>
            <div className="flex flex-col space-y-2 font-mulish text-xs lg:text-sm">
              <p>Our Team</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
