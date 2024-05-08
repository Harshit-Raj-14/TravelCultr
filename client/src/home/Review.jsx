import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

import {FaStar} from "react-icons/fa6";
import { Avatar } from 'flowbite-react';

const Review = () => {
  return (
    <>
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        {" "}
        Our Users
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* text */}
            <div className="mt-7">
              <p className="mb-5">As a passionate art enthusiast, stumbling upon TravelCultr felt like uncovering a hidden gem in the vast landscape of the internet. This website is not merely a digital Travel Plans but a curated journey through the diverse realms of artistic expression.</p>
              <Avatar img="./profile.jpg" alt="avatar of Jese" rounded className="w-10 mb-4" />
              <h5 className="text-lg font-medium">Harshit Raj</h5>
              <p className="test-base">Aspiring Artist</p>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* text */}
            <div className="mt-7">
              <p className="mb-5">The interface is as captivating as the artworks it hosts, with a seamless and intuitive design that ensures a user-friendly experience. Navigating through the varied collections is a visual delight, offering a harmonious blend of contemporary flair and timeless classics.</p>
              <Avatar img="./profile.jpg" alt="avatar of Jese" rounded className="w-10 mb-4" />
              <h5 className="text-lg font-medium">Pushkar Joshi</h5>
              <p className="test-base">Unique Artist</p>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* text */}
            <div className="mt-7">
              <p className="mb-5">What sets TravelCultr apart is its dedication to fostering a sense of community. The virtual exhibitions bring the Travel Plans experience to the comfort of your own space, allowing art lovers to connect with the pieces on a more personal level. </p>
              <Avatar img="./profile.jpg" alt="avatar of Jese" rounded className="w-10 mb-4" />
              <h5 className="text-lg font-medium">Sudhir Venkatesh</h5>
              <p className="test-base">World's Best Artist</p>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* text */}
            <div className="mt-7">
              <p className="mb-5">The community aspect is reinforced through the Art Enthusiasts Forum, where discussions and shared discoveries create a vibrant space for like-minded individuals. The exclusive membership program adds an extra layer of value, offering perks that enhance the overall TravelCultr experience.</p>
              <Avatar img="./profile.jpg" alt="avatar of Jese" rounded className="w-10 mb-4" />
              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="test-base">CEO,Artistry company</p>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* text */}
            <div className="mt-7">
              <p className="mb-5">For those seeking a more tailored artistic experience, the custom art services are a standout feature. The ability to commission a piece that resonates with one's individuality is a testament to TravelCultr's commitment to making art a deeply personal and meaningful journey.</p>
              <Avatar img="./profile.jpg" alt="avatar of Jese" rounded className="w-10 mb-4" />
              <h5 className="text-lg font-medium">Arin Goyal</h5>
              <p className="test-base">Player Artist</p>
            </div>
          </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
    </>
  );
};

export default Review;
