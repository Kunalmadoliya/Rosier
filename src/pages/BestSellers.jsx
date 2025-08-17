import React from "react";

const BestSellers = () => {
  return (
    <>
      <div className="h-screen">
        <div className="mt-15 ">
          <img src="/green_wave.png" alt="rosier-wave" />
        </div>
        <div className="bg-[var(--primary-color)] h-full flex justify-center">
         <div>
            <p className="p-10 text-2xl sm:text-base text-[var(--secondary-color)] lg:text-4xl py-15 font-bold">BEST SELLERS</p>
         </div>
        </div>
      </div>
    </>
  );
};

export default BestSellers;
