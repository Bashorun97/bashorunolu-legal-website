"use client";

import React from "react";

import { StaticImageData } from "next/image";

import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import Postcard from "../components/Postcard";
import PostCard from "../components/Postcard";
import Accordion from "../components/accordion";

import Appointment from "../../assets/Appointment.png";

interface LayoutProps {
  headingText: string;
  backgroundImage: StaticImageData;
}

const Layout = ({ backgroundImage, headingText }: LayoutProps) => {
  return (
    <div className="relative">
      <div
        className="flex flex-col bg-cover justify-between bg-center text-white pt-2 pb-6 h-96 md:pb-0 px-2 md:px-16 gap-4 md:gap-2"
        style={{
          height: "65vh",
          background: `url(${backgroundImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 0px",
        }}
      >
        <NavBar />
        <div className="flex flex-col h-full pt-12 md:w-1/2 gap-1">
          <p className="text-xl text-primary font-bold">We are experts at</p>
          <p className="text-4xl xl:text-5xl font-extrabold leading-tight">
            {headingText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;

interface PostProps {
  title: string;
  description: string;
  onClick: () => void;
}

export const BookAppointment = () => {
  return (
    <div
      className="flex flex-col gap-7 items-center justify-center"
      style={{
        height: "27rem",
        background: `url(${Appointment.src}) no-repeat center center`,
      }}
    >
      <h4 className="text-4xl text-center text-white font-extrabold">
        Book an Appointment With Us Today!
      </h4>
      <button className="bg-white px-6 py-3 rounded-md">
        Book an Appointment
      </button>
    </div>
  );
};
