import React from "react";
import { LiaEbay } from "react-icons/lia";
import { SiCnn } from "react-icons/si";
import { SiCisco } from "react-icons/si";
import { TbBrandAirbnb } from "react-icons/tb";
import { SiUber } from "react-icons/si";
import { GrGoogle } from "react-icons/gr";

const Main = () => {
  return (
    <div className="bg-[#1B152D] h-auto sm:h-screen flex items-center justify-center flex-col px-4">
      <div className="relative sm:top-[-5rem] text-center sm:text-left sm:ml-4 sm:mr-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#E6CFF1]">
          Bank Payments done in no time with encryption
        
        <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-blue-800">
          hard as rock.
        </span>
        </h1>
        <p className="text-lg sm:text-xl mt-8 sm:mt-6 text-gray-400">
          Get paid directly to your bank account. No cards needed.
        </p>
        <div className="mt-8 sm:mt-6 flex justify-center sm:justify-start w-full mb-0">
          <div className=" flex items-center justify-between border border-gray-500 rounded-3xl w-full sm:w-[25rem] md:w-[30rem] h-12">
            <p className="text-sm text-gray-400 sm:text-xs px-4">Enter your Mail Address</p>
            <button className="bg-blue-800 text-white rounded-full px-6 py-3 sm:px-4 sm:py-2">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-8 sm:mt-10">
        <p className="text-xl sm:text-lg text-gray-400 flex justify-center mb-8 sm:mb-4">
          Given the enormous support from top global leaders
        </p>
        <div className="flex justify-center space-x-8 sm:space-x-4 w-full px-8 sm:px-4 mb-0 flex-wrap">
          <LiaEbay className="text-5xl sm:text-4xl md:text-5xl text-gray-400" />
          <SiCnn className="text-5xl sm:text-4xl md:text-5xl text-gray-400" />
          <GrGoogle className="text-5xl sm:text-4xl md:text-5xl text-gray-400" />
          <SiCisco className="text-5xl sm:text-4xl md:text-5xl text-gray-400" />
          <TbBrandAirbnb className="text-5xl sm:text-4xl md:text-5xl text-gray-400" />
          <SiUber className="text-5xl sm:text-4xl md:text-5xl text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Main;