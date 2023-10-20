"use client";

import React from "react";
import Image from "next/image";

import { StaticImageData } from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import CLP from "../../assets/CLP.png";


interface LayoutProps {
  headingText: string;
  backgroundImage: StaticImageData;
}

const BookAppointment = ({ backgroundImage, headingText }: LayoutProps) => {
  return (
    <div className="">
      <div
        className=" bg-blueE bg-cover  text-white h-96 pt-2 px-16"
        
      >
        <NavBar />
        <div className="pt-20">
          <h1 className="text-6xl font-bold">Schedule An Appointment</h1>
        </div>
      </div>
      <div className="pt-40">
        <Footer/>
      </div>



      </div>
)
}
export default BookAppointment