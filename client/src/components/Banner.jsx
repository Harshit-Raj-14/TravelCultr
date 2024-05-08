import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
            <h2 className="text-5xl font-bold leading-snug text-black">TravelCultr<br /><span className="text-blue-700">Where Travel Meets Culture and Connection</span></h2>
            <p className="md:w-4/5">Welcome to TravelCultr, where the journey is not just about reaching a destination, but about experiencing the rich tapestry of cultures and forging connections that transcend borders. Our passion lies in exploring the world's diverse landscapes, immersing ourselves in local traditions, and fostering meaningful interactions that leave a lasting impact.
            </p>
            <div>
                <input type="text" name="search" id="search" placeholder="Search Destinations" className="py-2 px-2 rounded-s-sm outline-none" />
                <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Search</button>
            </div>
        </div>

        {/* right side */}
        <div><BannerCard/></div>
      </div>
    </div>
  );
};

export default Banner;
