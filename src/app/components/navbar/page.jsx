import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center bg-[#1B152D]">
      <div className="bg-[#1B152D] flex items-center justify-between border border-gray-500 rounded-3xl w-full sm:w-[80rem] h-12 my-4 px-4 sm:px-6">
        <p className="text-lg font-bold text-gray-700">
          <span className="text-[#E6CFF1]">
            eze<span className="text-blue-800">Pay</span>
          </span>
        </p>
        <p className="text-sm font-bold underline text-[#E6CFF1]">Join</p>
      </div>
    </div>
  );
};

export default Navbar;
