import React, { useState } from "react";
import Link from "next/link";
import Down from "../../public/Images/HomePage/downArrow-.svg";
import Image from "next/image";

interface Background {
  color: String;
}

const TabNavigation = (props: Background) => {
  // States for dropdown visibility
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showPackageDropdown, setShowPackageDropdown] = useState(false);

  // States for selected values
  const [selectedGuests, setSelectedGuests] = useState("2 Adults");
  const [selectedDate, setSelectedDate] = useState("12 - 17 April 2025");
  const [selectedPackage, setSelectedPackage] = useState("All");

  const handleSelect = (setter, value, toggleDropdown) => {
    setter(value);           // Sets the selected value
    toggleDropdown(false);    // Closes the dropdown
  };

  return (
    <div
      className={`bg-${props.color} flex flex-col space-y-6 p-4 rounded-lg text-xs`}
    >
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search activities or Destinations"
        className="flex-grow p-2 border border-grayish rounded-md text-xs w-[100%] "
      />

      {/* Guest, Date, and Package Picker */}
      <div className="relative flex space-x-2">
        {/* Guests Dropdown */}
        <div className="relative  flex flex-col space-y-2">
          <p className="font-mulish text-grayish">Guests</p>
          <div
            className="flex space-x-2 text-brown items-center cursor-pointer"
            onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
          >
            <p className="text-white">{selectedGuests}</p>
            <Image src={Down} alt='image'/>
          </div>
          {showGuestsDropdown && (
            <div className="absolute mt-2 w-32 top-10 bg-white shadow-lg rounded-md p-2 text-xs">
              {["1 Adult", "2 Adults", "3 Adults", "4 Adults"].map((option) => (
                <p
                  key={option}
                  className="text-gray-700 hover:bg-gray-100 p-1 rounded cursor-pointer"
                  onClick={() => handleSelect(setSelectedGuests, option, setShowGuestsDropdown)}
                >
                  {option}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Date Dropdown */}
        <div className="relative flex flex-col space-y-2">
          <p className="font-mulish text-grayish">Date</p>
          <div
            className="flex space-x-2 text-brown items-center cursor-pointer"
            onClick={() => setShowDateDropdown(!showDateDropdown)}
          >
            <p className="text-white">{selectedDate}</p>
            <Image src={Down} alt='image'/>
          </div>
          {showDateDropdown && (
            <div className="absolute mt-10 top-10 w-40 bg-white shadow-lg rounded-md p-2 text-xs">
              {["12 - 17 April 2025", "18 - 22 April 2025", "23 - 27 April 2025", "28 - 03 May 2025"].map((option) => (
                <p
                  key={option}
                  className="text-gray-700 hover:bg-gray-100 p-1 rounded cursor-pointer"
                  onClick={() => handleSelect(setSelectedDate, option, setShowDateDropdown)}
                >
                  {option}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Package Dropdown */}
        <div className="relative flex flex-col space-y-2">
          <p className="font-mulish text-grayish">Package</p>
          <div
            className="flex space-x-2 text-brown items-center cursor-pointer"
            onClick={() => setShowPackageDropdown(!showPackageDropdown)}
          >
            <p className="text-white">{selectedPackage}</p>
            <Image src={Down} alt='image'/>
          </div>
          {showPackageDropdown && (
            <div className="absolute left-[-55px] mt-2 top-10 w-40 bg-white shadow-lg rounded-md p-2 text-xs ">
              {["Bisoke Hike", "Lake Kiva Trip", "Akagera National Park"].map((option) => (
                <p
                  key={option}
                  className=" hover:bg-grayish p-1 rounded cursor-pointer"
                  onClick={() => handleSelect(setSelectedPackage, option, setShowPackageDropdown)}
                >
                  {option}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Book Now Button */}
      <Link href="/Contact" passHref>
        <button className=" bg-brown text-white font-mulishSemiBold rounded-lg border border-green p-2 px-2 lg:px-5 font-semibold text-xs">
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default TabNavigation;
