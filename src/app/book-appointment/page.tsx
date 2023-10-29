"use client";

import React from "react";
import Image from "next/image";

import CLP from "../../assets/CLP.png";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import Calendly from "../components/calendly";

const BookAppointment = (): JSX.Element => {
  return (
    <div className="">
      <div className=" bg-blueE bg-cover  text-white h-96 pt-2 px-16">
        <NavBar />
        <div className="pt-20">
          <h1 className="text-6xl font-bold">Schedule An Appointment</h1>
        </div>
      </div>

      <div className="calendly-inline-widget overflow-hidden">
      <Calendly />
    </div>
      <div className="pt-40">
        <Footer />
      </div>
    </div>
  );
}


export default BookAppointment