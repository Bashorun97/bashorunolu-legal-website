"use client";

import React from "react";
import Image from "next/image";

import CLP from "../../assets/CLP.png";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";


const Contact = (): JSX.Element => {
  return (
    <div className="">
      <div className=" bg-blueE bg-cover text-white flex flex-col py-4 h-72 px-16">
        <NavBar />
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-6xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="flex justify-evenly py-16 px-16 gap-32">
        <div className="flex flex-col ">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-blueE ">Send Us a Message</h1>
          </div>
          <div>
            <form className="flex flex-col gap-4">

              <div className="flex flex-col">
                <label className="font-semibold">Full Name</label>
                <input className="border my-1 py-2 pl-2 pr-48 rounded-md outline-none" type="text" placeholder="Full Name" />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Email Adresss</label>
                <input className="border my-1 py-2 pl-2 pr-48 rounded-md outline-none" type="text" placeholder="Email Address" />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Phone Number (Optional)</label>
                <input className="border my-1 py-2 pl-2 pr-48 rounded-md outline-none" type="tel" placeholder="Phone Number" />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Your Message</label>
                <textarea name="message" className="border my-1 pt-2 pb-20 pl-2 pr-48 rounded-md outline-none" placeholder="Type your message"></textarea>
              </div>

              <button type="submit" className="bg-blueE py-4 px-44 rounded-md text-white text-bold mt-8 text-[1.5rem]">Submit</button>
            </form>

          </div>
        </div>
        <div>
          <Image src={CLP} alt="CLP" width={500} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
