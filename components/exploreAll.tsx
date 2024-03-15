import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const ExploreAll = () => {
  return (
    <a href="https://github.com/FaheDevs"
       className="text-gray-600 font-bold hover:text-gray-800 transition duration-300 ease-in-out text-3xl flex items-center justify-center mb-8 w-full"
       target="_blank" 
       rel="noopener noreferrer">
      <div className="flex items-center justify-center gap-2 w-full cursor-pointer group">
        Explore all projects
        <BsArrowRight className="opacity-70 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </a>
  );
};

export default ExploreAll;
