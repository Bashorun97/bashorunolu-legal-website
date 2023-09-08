import React from "react";
import Image from "next/image";

import {Caveat, Mulish} from "next/font/google";

import Logo from "../assets/logo.png";
import HeroPicture from "../assets/hero-image.png";
import HeroBackground from "../assets/hero-background.png";

const caveat = Caveat({subsets: ["latin"]});
const mullish = Mulish({subsets: ["latin"]});

const Heading = (): JSX.Element => {
  return (
    <div className="flex flex-col text-white pt-2 px-16 gap-4 bg-nude" style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      background: `linear-gradient(#5b576be3 0%, #5b576bcf 100%), url(${HeroBackground.src})`,
    }}>
      <div className="flex py-2 justify-center items-center">
        <Image src={Logo} alt="Logo" height={65} width={65} />

        <div className="flex flex-grow justify-center content-center gap-4">
          <NavButton active>Home</NavButton>
          <NavButton><p className="flex gap-1">Services <ChevronDown /></p></NavButton>
          <NavButton>Contact me</NavButton>
          <NavButton>Payments</NavButton>
        </div>

        <div>call: <span className="text-lg">(234) 01234567890</span></div>
      </div>

      <div className="flex flex-grow">
        <div className="flex flex-col w-1/2 gap-6 justify-center">
          <div>
            <h6 className={caveat.className + " " + "text-primary"} style={{fontSize: "64px", transform: "rotate(-7.96deg)", lineHeight: "50px", width: "max-content", marginBottom: "-15px", marginLeft: "0"}}>I am</h6>
            <p className={mullish.className + " " + "text-6xl font-extrabold"}>
              Your <span className="text-secondary">Trusted</span> Legal Partner in Lagos
            </p>
          </div>

          <p>
            I am dedicated to simplifying legal complexities.
            Our team of experts is here to guide you through every step,
            providing efficient and cost-effective solutions to your legal needs.
          </p>

          <button className="bg-white text-black w-fit px-8 py-3 rounded-md">Contact me</button>
        </div>

        <div className="flex w-1/2 justify-end">
          <Image priority src={HeroPicture} alt="Hero picture" height={500} width={470} />
        </div>

      </div>
    </div>
  );
}

interface NavButtonProps {
  active?: boolean;
  children?: React.ReactNode;
}

const NavButton = ({active = false, children}: NavButtonProps): JSX.Element => {
  return (
    <button className={`${active ? "text-primary" : ""}`}>{children}</button>
  );
};


const ChevronDown = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
};

export default Heading;
