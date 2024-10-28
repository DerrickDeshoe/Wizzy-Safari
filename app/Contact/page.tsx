import React from "react";
import LandingInfo from "../Components/LandingInfo";
import Image from "next/image";
import Facebook from "../../public/Images/ContactPage/Facebook.svg";
import Twitter from "../../public/Images/ContactPage/Twitter.svg";
import LinkedIn from "../../public/Images/ContactPage/Facebook.svg";
import Instagram from "../../public/Images/ContactPage/Instagram.svg";
import Phone from "../../public/Images/ContactPage/Phone.svg";
import Email from "../../public/Images/ContactPage/Email.svg";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-contact bg-cover bg-no-repeat h-[80vh] w-[100%]">
        <LandingInfo h1="Contact Us" pageName2="Contact" />
      </div>
      <div className="flex flex-col p-5 lg:p-10 space-y-3 items-center">
        <h1 className="font-loraBold text-3xl lg:text-4xl">Get in Touch</h1>
        <p className="font-mulishSemiBold text-xs lg:text-lg lg:w-[70%]">
          We would love to hear from you! If you have any comments or
          suggestions about our website or our tours, please don't hesitate to
          get in touch. We are always looking for ways to improve and make your
          travel experience even better.
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-y-5 lg:space-y-0 lg:space-x-3">
        <div className="border border-grayish rounded-2xl p-3 flex flex-col space-y-2 lg:w-[20%]">
          <h4 className="font-loraBold">Social media</h4>
          <div className="flex space-x-2">
            <div className=" p-2 border border-green rounded-full">
              <Image src={Instagram} alt="image" className="w-[100%]" />
            </div>
            <div className=" p-2 border border-green rounded-full">
              <Image src={Instagram} alt="image" className="w-[100%]" />
            </div>
            <div className=" p-2 border border-green rounded-full">
              <Image src={Instagram} alt="image" className="w-[100%]" />
            </div>
            <div className=" p-2 border border-green rounded-full">
              <Image src={Instagram} alt="image" className="w-[100%]" />
            </div>
          </div>
        </div>
        <div className="border border-grayish rounded-2xl p-3 flex flex-col space-y-2 w-[55%] lg:w-[20%]">
          <h4 className="font-loraBold">Email & Phone</h4>
          <div className="flex space-x-2 items-center">
            <Image src={Phone} alt="image" className="w-[10%] lg:w-[6%]" />
            <p className="font-mulish text-xs">+250 784 688 641</p>
          </div>
          <div className="flex space-x-2 items-center">
            <Image src={Email} alt="image" className="w-[10%] lg:w-[6%]" />
            <p className="font-mulish text-xs text-green">
              bbonteemma@gmail.com
            </p>
          </div>
        </div>
        <div className="border border-grayish rounded-2xl p-3 flex flex-col space-y-2 w-[55%] lg:w-[20%]">
          <h4 className="font-loraBold">Address</h4>
          <div className="flex space-x-2">
            <p className="font-mulish text-xs text-green">kk 600 st</p>
          </div>
          <div className="flex space-x-2">
            <p className="font-mulish text-xs text-green">Kigali, Rwanda</p>
          </div>
        </div>
      </div>
      <div className="p-5 flex justify-center">
        <div className="border border-grayish p-3 flex flex-col space-y-3 rounded-lg lg:w-[50%]">
          <h5 className="font-loraBold lg:text-2xl">Contact Us</h5>
          <div className="flex justify-between">
            <div className="flex flex-col  w-[48%] space-y-2">
              <p className="font-mulishSemiBold text-xs lg:text-sm">
                First Name
              </p>
              <input
                type="text"
                placeholder="John"
                className="border border-grayish px-3 py-2 text-xs rounded-lg"
              />
            </div>
            <div className="flex flex-col w-[48%] space-y-2">
              <p className="font-mulishSemiBold text-xs lg:text-sm">
                Last Name
              </p>
              <input
                type="text"
                placeholder="Doe"
                className="border border-grayish px-3 py-2 text-xs rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-mulishSemiBold text-xs lg:text-sm">
              Email Address
            </p>
            <input
              type="text"
              placeholder="Input your Email Address in Here"
              className="border border-grayish p-3 text-xs rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-mulishSemiBold text-xs lg:text-sm">
              Phone Number
            </p>
            <input
              type="text"
              placeholder="Input your Phone Number in Here"
              className="border border-grayish p-3 text-xs rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2 ">
            <p className="font-mulishSemiBold text-xs lg:text-sm">
              Message
            </p>
            <textarea name="Message" placeholder="Write a message" className="border border-grayish p-3 rounded-lg text-xs lg:text-sm pb-[20%]"></textarea>
          </div>
          <Link href="#">
            <button className="p-2 rounded-md px-4 lg:px-6 font-mulish text-xs text-white bg-brown">
             Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
