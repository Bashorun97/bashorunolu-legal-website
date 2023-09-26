"use client";

import React from "react";

import Image, {StaticImageData} from "next/image";
import {useRouter, usePathname} from "next/navigation";

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

  const router = useRouter();
  const pathName = usePathname();

  const toggleShowServices = () => {
    setShowServices(!showServices);
  };

  const toggleShowServicesMenu = () => {
    setShowServicesMenu(!showServiceMenu);
  };

  return (
    <div className="relative text-white">
      <div
        className={`fixed bg-gray-900 ${!showServiceMenu ? "hidden" : ""
          } bg-opacity-70 h-screen w-full top-0 right-0 z-50`}
      >
        <div className="flex flex-col gap-8 w-4/6 float-right h-full pt-2 bg-backgroundBlack px-2">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-xl font-bold">Menu</h3>
            <XCircleIcon
              className="h-10 w-10 text-primary float-right cursor-pointer"
              onClick={toggleShowServicesMenu}
            />
          </div>

          <div className="flex flex-col gap-4 text-white font-semibold">
            <button
              onClick={() => router.push("/")}
              className="bg-nude px-4 py-3 rounded-md"
            >
              Home
            </button>
            <button className="bg-nude flex flex-col items-center rounded-md">
              <div onClick={toggleShowServices} className="px-4 py-3">
                Services
              </div>

              <div
                className={`transition-all delay-75 ${showServices ? "h-full mt-2" : "h-0 mt-0"
                  } bg-backgroundWhite rounded-b-lg overflow-hidden w-full`}
              >
                <MiniCard
                  backgroundImage={SoImage}
                  description="Property Law Practice (Conveyance Practice)"
                  onClick={() => router.push("/services/property-law-practice")}
                />
                <MiniCard
                  backgroundImage={SoLaw}
                  description="Corporate Law Practice"
                  onClick={() =>
                    router.push("/services/corporate-law-practice")
                  }
                />
                <MiniCard
                  backgroundImage={SoStore}
                  description="Commercial and Contractual Law"
                  onClick={() =>
                    router.push("/services/commercial-and-contractal-law")
                  }
                />
                <MiniCard
                  backgroundImage={SoFamily}
                  description="Family Law"
                  onClick={() => router.push("/services/family-law")}
                />
              </div>
            </button>
            <button
              onClick={() => router.push("/blog")}
              className="bg-nude px-4 py-3 rounded-md"
            >
              Blog
            </button>
            <button
              onClick={() => router.push("/contact-us")}
              className="bg-nude px-4 py-3 rounded-md"
            >
              Contact us
            </button>
          </div>

          <div className="flex justify-center mt-2 bg-nude px-4 py-3 font-bold rounded-md">
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
        <div id="mobile-menu" className="flex pr-1 lg:hidden">
          <Bars3Icon
            className="h-12 w-12 text-white"
            onClick={toggleShowServicesMenu}
          />
        </div>

        {/** Nav items **/}
        <div
          className="hidden lg:flex justify-center content-center gap-8"
        >
          <NavButton onClick={() => router.push("/")} active={pathName == "/"}>
            Home
          </NavButton>

          <div className="group relative">
            <NavButton active={pathName.includes("services")}>
              <p className="flex gap-1 items-center justify-center">
                Services <ChevronDown className="w-4 text-white" />
              </p>
            </NavButton>

            <div
              className="hidden group-hover:block absolute bg-transparent top-4 -left-60"
              style={{width: "37rem"}}
            >
              <div className="grid grid-cols-2 mt-5 gap-3 p-2 w-full h-full rounded-lg bg-backgroundWhite">
                <Card
                  backgroundImage={SoImage}
                  description="Property Law Practice (Conveyance Practice)"
                  onClick={() => router.push("/services/property-law-practice")}
                />
                <Card
                  backgroundImage={SoLaw}
                  description="Corporate Law Practice"
                  onClick={() =>
                    router.push("/services/corporate-law-practice")
                  }
                />
                <Card
                  backgroundImage={SoStore}
                  description="Commercial and Contractual Law"
                  onClick={() =>
                    router.push("/services/commercial-and-contractal-law")
                  }
                />
                <Card
                  backgroundImage={SoFamily}
                  description="Family Law"
                  onClick={() => router.push("/services/family-law")}
                />
              </div>
            </div>
          </div>

          <NavButton
            onClick={() => router.push("/blog")}
            active={pathName == "/blog"}
          >
            Blog
          </NavButton>
          <NavButton
            onClick={() => router.push("/contact-us")}
            active={pathName == "/contact-us"}
          >
            Contact us
          </NavButton>
        </div>

        <div className="hidden lg:block">
          call: <span className="text-lg font-bold">(234) 01234567890</span>
        </div>
      </div>
    </div>
  );
};

interface MiniCardProps {
  description: string;
  onClick: () => void;
  backgroundImage: StaticImageData;
}

const MiniCard = ({
  description,
  backgroundImage,
  onClick,
}: MiniCardProps): JSX.Element => {
  return (
    <div
      className="flex flex-col rounded-lg items-start px-3 py-3"
      onClick={onClick}
      style={{
        background: `white url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 0px",
        backgroundSize: "70px",
      }}
    >
      <div className="text-secondary text-sm">We are experts at</div>
      <div className="text-backgroundBlack w-2/3 text-left text-sm">
        {description}
      </div>
    </div>
  );
};

interface CardProps {
  description: string;
  onClick: () => void;
  backgroundImage: StaticImageData;
}
const Card = ({
  backgroundImage,
  description,
  onClick,
}: CardProps): JSX.Element => {
  return (
    <div
      className="rounded-lg py-3 px-2 cursor-pointer"
      onClick={onClick}
      style={{
        background: `#4546551f url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 0px",
        backgroundSize: "125px",
      }}
    >
      <h2 className="text-secondary text-lg font-semibold">
        We are experts at
      </h2>
      <p className="text-backgroundBlack font-bold text-xl">
        {description}
      </p>
    </div>
  );
};

interface NavButtonProps {
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const NavButton = ({
  active = false,
  onClick,
  children,
}: NavButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className={`${active ? "text-primary" : ""}`}>
      {children}
    </button>
  );
};

export default NavBar;
