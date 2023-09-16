import React from "react";
import Image from "next/image";

import Logo from "../assets/logo.png";

const Footer = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-between py-8 px-2 sm:px-16 text-white bg-gradient-to-b from-backgroundBlack to-black">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full">
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-center">
            <Image src={Logo} alt="Logo" height={55} width={55} />
            <p className="font-bold text-xl">OLU BASHORUN & CO</p>
          </div>

          <div>
            <p>Sangotendo, Eti-Osa,</p>
            <p>Lagos State,</p>
            <p>Nigeria.</p>
          </div>

          <div>call: (234) 7042871925</div>
        </div>

        <div className="flex flex-grow gap-4 sm:gap-10 w-full sm:w-min">
          <div className="flex flex-col w-1/2">
            <p className="mb-2 font-extrabold">Links</p>
            <a className="mb-4">Contact us</a>
            <a className="mb-4">Schedule an appointment</a>
            <a className="mb-4">Blog</a>
            <a className="mb-4">FAQ</a>
            <a className="mb-4">Testimonials</a>
            <a className="mb-4">Legal Process Review</a>
          </div>
          <div className="flex flex-col w-1/2">
            <p className="mb-2 font-extrabold">Services</p>
            <a className="mb-4">Property Law Practice (Conveyance Practice)</a>
            <a className="mb-4">Corporate Law practice</a>
            <a className="mb-4">Commercial and Contractual Law</a>
            <a className="mb-4">Family Law</a>
          </div>
        </div>
      </div>
      <div className="border border-backgroundWhite border-opacity-10 mb-1 w-8/12"></div>
      <p>© 2023 OLU BASHORUN & CO</p>
    </div>
  );
};

export default Footer;
