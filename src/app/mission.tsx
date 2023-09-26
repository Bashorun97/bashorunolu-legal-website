import React from "react";
import Image from "next/image";

import MissionPose from "../assets/mission-pose.png";

const Mission = () => {
  return (
    <div className="w-full flex-col md:flex-row md:flex py-12 bg-backgroundWhite">
      <div className="w-full md:w-1/2 flex justify-center md:justify-normal items-center">
        <Image className="grayscale w-full md:w-min" src={MissionPose} alt="Mission Pose" />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-0 flex flex-col gap-2 justify-center items-center md:items-start">
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
