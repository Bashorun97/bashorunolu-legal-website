import React from "react";
import Image from "next/image";



const Mission = () => {
  return (
    <div className="w-full py-8">
      
      <div className=" text-justify pl-16 my-10">
        <h6 className="text-secondary font-semibold text-xl">Our Mission</h6>
        <h3 className="font-extrabold text-3xl md:text-4xl md:w-4/5 text-nude">Commited to Excellence and Innovation</h3>
        <p className="text-xl md:text-3xl md:w-4/5 text-backgroundBlack">
          An esteemed law firm characterised by its exceptional intellectual prowess and innovative approach,
          adeptly aligned with the dynamic demands of the modern legal landscape.
          Through resolute, pragmatic, and astute legal practices,
          we endeavour to address the evolving requirements of today&apos;s legal realm.
          Our commitment lies in efficiently resolving the legal concerns of individuals,
          all within a reasonable timeframe and cost structure.
        </p>
      </div>
    </div>
  );
}

export default Mission;
