import React from "react";
import Image from "next/image";

const FeatureList = () => {
  return (
    <div className="bg-gray-100 h-auto sm:h-screen flex flex-col sm:flex-row items-center justify-center px-4">
      {/* Left side: Big Zero Icon */}
      <div className="flex justify-center sm:ml-24 mb-8 sm:mb-0">
        <Image
          src="/Frame 11.png"
          alt="Description"
          width={400}
          height={400}
          className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px]"
        />
      </div>

      {/* Right side: Points List */}
      <div className="text-gray-900 text-4xl sm:text-6xl font-bold sm:mr-24">
        <ul className="ml-[5rem] space-y-6 ">
          <li className="text-blue-800">Transaction Fees.</li>
          <li className="text-blue-800">Maintenance Fees.</li>
          <li className="text-blue-800">Charge Backs.</li>
          <li className="text-blue-800">Forex Fees.</li>
          <li className="text-blue-800">Cards Required.</li>
        </ul>
      </div>
    </div>
  );
};

export default FeatureList;
