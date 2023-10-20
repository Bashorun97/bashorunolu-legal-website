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

const Contact = ({ backgroundImage, headingText }: LayoutProps) => {
  return (
    <div className="">
      <div
        className=" bg-blueE bg-cover  text-white h-96 pt-2 px-16"
       
      >
        <NavBar />
        <div className="pt-20">
          <h1 className="text-6xl font-bold pt-8">Contact Us</h1>
        </div>
      </div>

      <div className="flex justify-evenly py-16 px-16 gap-32">
        <div className="flex flex-col ">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-blueE ">Send Us a Message</h1>
          </div>
          <div>
            <form>
              <div className="flex flex-col pb-2">
                <label className="">Full Name</label>
                <input className="border my-1 py-2 pl-2 pr-48 rounded-md  " type="text" placeholder="Full Name" />
              </div>
              <div className="flex flex-col">
                <label>Email Adresss</label>
                <input  className="border my-1 py-2 pl-2 pr-48 rounded-md  " type="text" placeholder="Email Address" />
              </div>
              <div className="flex flex-col">
                <label>Phone Number (Optional)</label>
                <input  className="border my-1 py-2 pl-2 pr-48 rounded-md  " type="number" placeholder="Phone Number" />
              </div>
              <div className="flex flex-col">
                <label>Your Message</label>
                <textarea name="message"  className="border my-1 pt-2 pb-20 pl-2 pr-48 rounded-md " >Type your message</textarea>
              </div>
              <div>
                <button type="submit" className="bg-blueE py-4 px-44 rounded-md text-white text-bold mt-8 text-[1.5rem]">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div>
            <Image src={CLP} alt="CLP" width={500} />
       
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Contact;
