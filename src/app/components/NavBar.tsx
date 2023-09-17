import React from "react";

import {Caveat, Mulish} from "next/font/google";
import Image, {StaticImageData} from "next/image";

import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import ChevronDown from "@heroicons/react/24/outline/ChevronDownIcon";

import Logo from "../../assets/logo.png";
import SoLaw from "../../assets/so-law.png";
import SoStore from "../../assets/so-store.png";
import SoFamily from "../../assets/so-family.png";
import SoImage from "../../assets/so-company.png";

const NavBar = (): JSX.Element => {
  const [showServices, setShowServices] = React.useState<boolean>(false);
  const [showServiceMenu, setShowServicesMenu] = React.useState<boolean>(false);

  const toggleShowServicesMenu = () => {
    setShowServicesMenu(!showServiceMenu);
  }

  return (
    <div className="relative">
      <div className={`fixed bg-gray-900 ${!showServiceMenu ? "hidden" : ""} bg-opacity-70 h-screen w-full top-0 right-0 z-50`}>
        <div className="flex flex-col gap-8 w-4/6 float-right pt-2 h-screen bg-backgroundBlack px-2">

          <div className="flex justify-between items-center">
            <h3 className="text-white text-xl font-bold">Menu</h3>
            <XCircleIcon className="h-10 w-10 text-primary float-right cursor-pointer" onClick={toggleShowServicesMenu} />
          </div>

          <div className="flex flex-col gap-4 text-white font-semibold">
            <button className="bg-nude px-4 py-3 rounded-md">Home</button>
            <button className="bg-nude px-4 py-3 rounded-md">Services</button>
            <button className="bg-nude px-4 py-3 rounded-md">Contact us</button>
          </div>

          <div className="flex flex-grow justify-center items-end bg-red-300">
            call: 234 01234567890
          </div>
        </div>
      </div>
      <div className="flex py-2 w-full justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image src={Logo} alt="Logo" height={60} width={60} />
          <h3 className="font-bold text-xl">OLU BASHORUN & CO</h3>
        </div>

        {/** Mobile menu **/}
        <div id="mobile-menu" className="flex pr-1 sm:hidden">
          <Bars3Icon className="h-12 w-12 text-white" onClick={toggleShowServicesMenu} />
        </div>

        {/** Nav items **/}
        <div id="nav-items-contain" className="flex justify-center content-center gap-8">
          <NavButton active>Home</NavButton>

          <div className="group relative">
            <NavButton><p className="flex gap-1">Services <ChevronDown /></p></NavButton>

            <div className="hidden group-hover:block absolute bg-transparent top-4 -left-60" style={{width: "37rem"}}>
              <div className="grid grid-cols-2 mt-5 gap-3 p-2 w-full h-full rounded-lg bg-backgroundWhite">
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
            </div>
          </div>

          <NavButton>Contact us</NavButton>
        </div>

        <div id="contact-us">call: <span className="text-lg font-bold">(234) 01234567890</span></div>
      </div>
    </div>
  );
}

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

export default NavBar;
