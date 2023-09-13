import React from "react";
import Image, {StaticImageData} from "next/image";

import {Caveat, Mulish} from "next/font/google";

import Logo from "../assets/logo.png";
import HeroPicture from "../assets/hero-image.png";
import HeroBackground from "../assets/hero-background.png";

import SoLaw from "../assets/so-law.png";
import SoStore from "../assets/so-store.png";
import SoFamily from "../assets/so-family.png";
import SoImage from "../assets/so-company.png";

const caveat = Caveat({subsets: ["latin"]});
const mullish = Mulish({subsets: ["latin"]});

interface CardProps {
  description: string;
  backgroundImage: StaticImageData;
}
const Card = ({backgroundImage, description}: CardProps): JSX.Element => {
  return (
    <div className="rounded-lg py-3 px-2 cursor-pointer" style={{
      background: `#4546551f url(${backgroundImage.src})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "100% 0px",
      backgroundSize: "125px",
    }}>
      <h2 className="text-secondary text-lg font-semibold">We are experts at</h2>
      <p className="text-backgroundBlack font-extrabold text-xl">{description}</p>
    </div>
  );
}

const Heading = (): JSX.Element => {

  const [showServices, setShowServices] = React.useState<boolean>(false);

  const toogleShowServices = () => {
    setShowServices(!showServices);
  };

  return (
    <div className="flex flex-col text-white pt-2 px-16 gap-4 bg-nude" style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      background: `linear-gradient(#5b576be3 0%, #5b576bcf 100%), url(${HeroBackground.src})`,
    }}>
      <div className="flex py-2 justify-center items-center">
        <Image src={Logo} alt="Logo" height={65} width={65} />

        <div className="flex flex-grow justify-center content-center gap-8">
          <NavButton active>Home</NavButton>

          <div className="relative">
            <NavButton onClick={toogleShowServices}><p className="flex gap-1">Services <ChevronDown /></p></NavButton>
            {showServices && (
              <div className="absolute p-2 grid grid-cols-2 gap-3 top-8 -left-60 rounded-lg bg-backgroundWhite" style={{width: "37rem"}}>
                <Card
                  backgroundImage={SoImage}
                  description="Property Law Practice (Conveyance Practice)"
                />
                <Card
                  backgroundImage={SoLaw}
                  description="Corporate Law Practice"
                />
                <Card
                  backgroundImage={SoStore}
                  description="Commercial and Contractual Law"
                />
                <Card
                  backgroundImage={SoFamily}
                  description="Family Law"
                />
              </div>
            )}
          </div>
          <NavButton>Contact me</NavButton>
        </div>

        <div>call: <span className="text-lg font-bold">(234) 01234567890</span></div>
      </div>

      <div className="flex flex-grow">
        <div className="flex flex-col w-1/2 gap-6 justify-center">
          <div>
            <h6 className={caveat.className + " " + "text-primary"} style={{fontSize: "64px", transform: "rotate(-7.96deg)", lineHeight: "50px", width: "max-content", marginBottom: "-15px", marginLeft: "0"}}>We are</h6>
            <p className={mullish.className + " " + "text-6xl font-extrabold"}>
              Your <span className="text-secondary">Trusted</span> Legal Partner in Lagos
            </p>
          </div>

          <p>
            We are dedicated to simplifying legal complexities.
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
  onClick?: () => void;
  children?: React.ReactNode;
}

const NavButton = ({active = false, onClick, children}: NavButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className={`${active ? "text-primary" : ""}`}>{children}</button>
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
