import React from 'react';

const SecondBanner = () => {
    return (
        
<div className="">
  <div className="bg-primary-color w-full h-full p-28 flex items-center justify-center">
    <div className="max-w-3xl flex h-full m-4 md:m-6">
      <div className="relative group sm:w-full md:w-1/2 hover: border-t border-l border-b border-r md:border-r-0 bg-opacity-5 transition-all duration-300">
     
      <h1 className="pl-4 md:pl-8 mt-6 md:mt-8 text-2xl text-white font-serif transform group-hover:translate-x-6 duration-300 uppercase leading-snug">Curate Your Personal Collection: Share Your Finest Picks with the World</h1>
<p className=" bottom-1 p-4 md:pl-8 text-white text-xs">Curate a personalized collection of your favorite items, visible to your select audience. During special occasions such as birthdays, weddings, or other significant events, your curated favorites serve as a thoughtful guide for friends and family who may choose to gift you items aligned with your preferences.</p>
      <div className="absolute z-50 bottom-32 md:bottom-10 right-0 transform translate-x-12 flex items-center justify-center w-20 h-20 rounded-full bg-white group-hover: text-primary-color group-hover: font-semibold cursor-pointer group-hover:scale-110 duration-300 select-none hover:border border-primary-color">Get It!</div>
      </div>
    <div className="md:w-1/2 hidden md:block bg-indigo-700">
      <img src="https://i.ibb.co/vLP3Xb2/1000-F-68513530-T9-Ec-Xw-Qqggd3a-PSb4xa-J47-R98-Gbu4oq-N-transformed.jpg" alt="adding favorite" className="h-full" />
    </div>
  </div>
  </div>
  </div>

    );
};

export default SecondBanner;