import React from "react";
import LandingInfo from "../Components/LandingInfo";
import Link from "next/link";
import Album1 from "../Components/Album1";
import Giraffe from '../../public/Images/GalleryPage/Giraffe.svg';
import Selfie from '../../public/Images/GalleryPage/Selfie.svg';
import Valley from '../../public/Images/GalleryPage/Valley.svg';
import River from '../../public/Images/GalleryPage/River.svg';
import Hut from '../../public/Images/GalleryPage/Hut.svg';
import Monkeys2 from '../../public/Images/GalleryPage/Monkeys2.svg';
import Beach2 from '../../public/Images/GalleryPage/Beach2.svg';
import Swing from '../../public/Images/GalleryPage/Swing.svg';
import Cattle from '../../public/Images/GalleryPage/Cattle2.svg';
import Elephant from '../../public/Images/GalleryPage/Elephant.svg';
import Skatting from '../../public/Images/GalleryPage/Skating.svg';
import Hut3 from '../../public/Images/GalleryPage/Hut3.svg';
import Heroes from '../../public/Images/GalleryPage/Heroes.svg';
import MountainClimb from '../../public/Images/GalleryPage/MountainClimb.svg';
import HutPicture from '../../public/Images/GalleryPage/HutPicture.svg';
import Album2 from "../Components/Album2";
import Hike3 from '../../public/Images/GalleryPage/Hike3.svg';
import BlueWhite from '../../public/Images/GalleryPage/BlueWhite.svg';
import Sunset from '../../public/Images/GalleryPage/Sunset.svg';
import Embassy from '../../public/Images/GalleryPage/Embassy.svg';
import Milk from '../../public/Images/GalleryPage/Milk.svg';
import City from '../../public/Images/GalleryPage/City.svg';
import Biking from '../../public/Images/GalleryPage/Biking.svg';
import Hut2 from '../../public/Images/GalleryPage/Hut2.svg';


const Gallery = () => {
  return (
    <div>
      <div className="bg-gallery bg-cover bg-no-repeat h-[70vh] w-[100%] flex justify-center items-center">
        <LandingInfo h1="Gallery" pageName2="Gallery" />
      </div>
      <div>
        <div className="flex justify-end p-10">
          <Link href="#">
            <button className="font-mulishSemiBold bg-brown px-4 py-3 rounded-lg text-white text-xs lg:text-sm">
              Open Instagram
            </button>
          </Link>
        </div>
        <div className="flex flex-col space-y-10 p-5 lg:p-10">
          <Album1 image={Monkeys2} image2={Beach2} image3={Giraffe} image4={Selfie} image5={Valley} image6={River} image7={Hut} image8={Hut}/>
          <Album2 image={Hike3} image2={BlueWhite} image3={Sunset} image4={Embassy} image5={Milk} image6={City} image7={Biking} image8={Hut2}/>
          <Album1 image={Swing} image2={Cattle} image3={Elephant} image4={Skatting} image5={Hut3} image6={Heroes} image7={MountainClimb} image8={HutPicture}/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
