"use client";

import React, { useState } from "react";
import Image from "next/image";
import Date from "../../public/Images/HomePage/date.png";
import Dropdown from "../../public/Images/HomePage/dropdown.png";

const TabNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Hotel");

  const renderContent = () => {
    switch (activeTab) {
      case "Hotel":
        return (
          <div className="flex space-x-3 bg-green text-white">
            <div className=" p-2 border border-lighterBlue text-xs flex justify-between items-center lg:w-[140px] ">
              <div className="text-lighterBlue">choose place</div>
              <Image src={Date} alt="date" className="w-[10%] h-[60%]" />
            </div>
            <div className=" p-2 border border-lighterBlue text-xs flex space-x-5 lg:w-[140px] items-center">
              <div className="text-lighterBlue">check in date</div>
              <Image
                src={Dropdown}
                alt="dropdown"
                className="w-[10%] h-[60%]"
              />
            </div>
            <div className=" p-2 border border-lighterBlue text-xs flex space-x-5 lg:w-[140px] items-center">
              <div className="text-lighterBlue">check out date</div>
              <Image src={Dropdown} alt="dropdown" className="w-[10%] h-[60%]" />
            </div>
            <div className=" p-2 border border-lighterBlue text-xs flex justify-between items-center lg:w-[140px]">
              <div className="text-lighterBlue">person</div>
              <Image src={Date} alt="date" className="w-[10%] h-[60%]" />
            </div>
            <button className="bg-orange py-1 px-4 lg:px-7 text-white text-xs font-medium lg:w-[140px]">
              Search
            </button>
          </div>
        );
    
    }
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex justify-around mb-4 ">
        <button
          className={`py-2 px-4 ${
            activeTab === "Hotel"
              ? "border-b-2 border-lighterBlue font-bold border-w-[30%]"
              : ""
          }`}
          onClick={() => setActiveTab("Hotel")}
        >
          Hotel
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "Ticket" ? "border-b-2 border-blue font-bold" : ""
          }`}
          onClick={() => setActiveTab("Ticket")}
        >
          Ticket
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "Place" ? "border-b-2 border-blue font-bold" : ""
          }`}
          onClick={() => setActiveTab("Place")}
        >
          Place
        </button>
      </div>

      {/* Content based on active tab */}
      <div>{renderContent()}</div>
    </div>
  );
};

export default TabNavigation;
