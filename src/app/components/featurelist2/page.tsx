import Image from "next/image"; 
import React from "react";

const FeatureList2 = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(27, 21, 45, 1)" }}
      className="h-auto lg:h-screen grid grid-cols-1 md:grid-cols-2 gap-4 p-4" // Adjust grid for smaller screens
    >
      <div className="text-white ml-0 md:ml-[4rem] mt-8 md:mt-[8rem] space-y-4">
        <span className="text-3xl sm:text-4xl font-bold text-gray-200">
          Here to there, with <span className="text-blue-900">rock solid</span><br /> encryption.
        </span>
        <p className="text-gray-500 text-left sm:w-[29rem] w-full ">
          Transfer funds directly from the customers' account to merchants'
          account with the help of an automated system. Only one-time setup
          required.
        </p>
      </div>
      <div className="flex justify-center mt-8 md:mt-0">
        <Image
          src="/Frame 8.png"
          alt="Description"
          className="max-w-full h-auto"
          width={400} 
          height={400}
        />
      </div>
      <div className="flex justify-center mt-8 md:mt-0">
        <Image
          src="/Frame 7.png"
          alt="Description"
          className="max-w-full h-auto"
          width={400} 
          height={400}
        />
      </div>
      <div className="text-white ml-0 md:ml-[4rem] mt-8 md:mt-[8rem] space-y-4 w-full md:w-[30rem] mx-auto">
        <span className="text-3xl sm:text-4xl font-bold text-gray-200">
          There to here, within <span className="text-blue-900">a snap</span> Just a single tap.
        </span>
        <p className="text-gray-500">
          With our advanced embedded system that works within your website, get
          paid directly within time services also typically offer faster payment
          processing times than traditional methods such as checks or money
          orders.
        </p>
      </div>
    </div>
  );
};

export default FeatureList2;
