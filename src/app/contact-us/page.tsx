"use client"

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../components/NavBar";
import SimpleMap from "../components/map";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import PhoneIcon from "@heroicons/react/24/outline/PhoneIcon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";
import Footer from "../components/footer";

const Contact = (): JSX.Element => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_ypxixgp', 'sample_template', form.current!, 'u2doYx3tppTYiqQyA')
      .then((result) => {
        form.current!.reset(); // Reset the form after submission
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  return (
    <div>
      <div className="bg-blueE bg-cover text-white flex flex-col py-4 h-72 px-16">
        <NavBar />
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-6xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="flex justify-evenly my-24 px-16 gap-32">
        <div className="flex flex-col">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-blueE">Send Us a Message</h1>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="font-semibold">Full Name</label>
                <input className="border my-1 py-2 pl-2 pr-48 rounded-md outline-none" type="text" placeholder="Full Name" />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Email Address</label>
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

              <button type="submit" value="Send" className="bg-blueE py-4 px-44 rounded-md text-white font-bold mt-8 text-[1.5rem]">Submit</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <div className="absolute rounded-t-lg overflow-hidden w-full h-full z-50" style={{
              background: "linear-gradient(0deg, rgb(0 64 123 / 91%) 0%, rgb(0 212 255 / 0%) 30%)"
            }}></div>
            <SimpleMap />
          </div>
          <div className="bg-blueE p-4 rounded-b-lg text-white" style={{
            background: "linear-gradient(180deg, rgb(0 64 123 / 90%) 0%, rgb(0 64 123 / 100%) 100%)"
          }}>
            <p className="flex items-center pl-2 py-2"><MapPinIcon className="w-6 mr-2 text-primary" />Sangotedo, Eti-Osa, <br /> Lagos State,<br /> Nigeria. </p>
            <p className="flex items-center pl-2 py-2"><PhoneIcon className="w-6 mr-2 text-primary" /> (234)7042871925 </p>
            <p className="flex items-center pl-2 py-2"><EnvelopeIcon className="w-6 mr-2 text-primary" /> johndoe@example.com</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
