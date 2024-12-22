import React from "react";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className=" bg-[#1B152D] px-4 sm:px-12 md:px-16 lg:px-20">
      <span className="text-gray-300 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl ml-10  block">
        Frequently Asked Questions
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-10">
        <div className="text-gray-300 space-y-10">
          <div>
            <span className="text-xl font-semibold block mt-8 sm:mt-4">
              What is ezePay?
            </span>
            <p className="mt-2">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Etiam nec auctor tellus...
            </p>
          </div>
          <hr className="border-gray-500" />

          <div>
            <span className="text-xl font-semibold block mt-8 sm:mt-4">
              What are the features provided by ezePay?
            </span>
          </div>
          <hr className="border-gray-500" />

          <div>
            <span className="text-xl font-semibold block mt-8 sm:mt-4">
              How is ezePay different from Stripe or PayPal Business?
            </span>
          </div>
          <hr className="border-gray-500" />

          <div>
            <span className="text-xl font-semibold block mt-8 sm:mt-4">
              What are the fees or charges per transaction on ezePay?
            </span>
          </div>
        </div>
        <div className="hidden sm:block rounded-lg p-4">
          <Image
            src="/techny-question-mark 1.png"
            alt="Encryption system illustration"
            width={100}
            height={100}
            className="ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
