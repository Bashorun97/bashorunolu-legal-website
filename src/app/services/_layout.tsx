"use client";

import React from "react";

import { StaticImageData } from "next/image";

import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import Postcard from "../components/Postcard";
import PostCard from "../components/Postcard";
import Accordion from "../components/accordion";

import Blog2 from "../../assets/Blog2.png";
import Appointment from "../../assets/Appointment.png";

interface LayoutProps {
  headingText: string;
  backgroundImage: StaticImageData;
  faqItems: { title: string, body: React.ReactNode }[]
}

const Layout = ({ backgroundImage, headingText, faqItems }: LayoutProps) => {
  return (
    <div className="relative">
      <div className="flex flex-col bg-cover justify-between bg-center text-white pt-2 pb-6 h-96 md:pb-0 px-2 md:px-16 gap-4 md:gap-2" style={{
        height: "65vh",
        background: `url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 0px",

      }}>
        <NavBar />
        <div className="flex flex-col h-full pt-12 md:w-1/2 gap-1">
          <p className="text-xl text-primary font-bold">We are experts at</p>
          <p className="text-4xl xl:text-5xl font-extrabold leading-tight">{headingText}</p>
        </div>
      </div>

      <div className="absolute w-full" style={{
        top: "50vh"
      }}>
        <div className="flex flex-col gap-8">

          <div className="flex flex-col rounded-lg bg-white gap-4 mx-2 md:mx-16 p-4">
            {faqItems.map((item, index) => (
              <Accordion
                open
                key={index}
                body={item.body}
                title={item.title}
              />
            ))}
          </div>

          <div className="flex flex-col px-16 py-8 gap-4 bg-white">
            <h4 className="text-2xl font-semibold">Related Posts</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PostCard
                image={Blog2}
                title="Mask Pencil Vertical"
                route="/blog/1"
                description={`
                  Proofreading is the final stage of the editing process,
                  focusing on surface errors such as misspellings and mistakes
                  in grammar and punctuation.
                `}
              />

              <PostCard
                image={Blog2}
                title="Mask Pencil Vertical"
                route="/blog/1"
                description={`
                  Proofreading is the final stage of the editing process,
                  focusing on surface errors such as misspellings and mistakes
                  in grammar and punctuation.
                `}
              />
              <PostCard
                image={Blog2}
                title="Mask Pencil Vertical"
                route="/blog/1"
                description={`
                  Proofreading is the final stage of the editing process,
                  focusing on surface errors such as misspellings and mistakes
                  in grammar and punctuation.
                `}
              />

              <PostCard
                image={Blog2}
                title="Mask Pencil Vertical"
                route="/blog/1"
                description={`
                  Proofreading is the final stage of the editing process,
                  focusing on surface errors such as misspellings and mistakes
                  in grammar and punctuation.
                `}
              />

              <PostCard
                image={Blog2}
                title="Mask Pencil Vertical"
                route="/blog/1"
                description={`
                  Proofreading is the final stage of the editing process,
                  focusing on surface errors such as misspellings and mistakes
                  in grammar and punctuation.
                `}
              />

              <PostCard
                image={Blog2}
                title="Mask Pencil Vertical"
                route="/blog/1"
                description={`
                  Proofreading is the final stage of the editing process,
                  focusing on surface errors such as misspellings and mistakes
                  in grammar and punctuation.
                `}
              />

            </div>
          </div>

          <div id="footer">
            <BookAppointment />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

interface PostProps {
  title: string;
  description: string;
  onClick: () => void;
}

const BookAppointment = () => {
  return (
    <div className="flex flex-col gap-7 items-center justify-center" style={{
      height: "27rem",
      background: `url(${Appointment.src}) no-repeat center center`,
    }}>
      <h4 className="text-4xl text-center text-white font-extrabold">Book an Appointment With Us Today!</h4>
      <button className="bg-white px-6 py-3 rounded-md">Book an Appointment</button>
    </div>
  );
};
export default Layout;



{/* <Accordion
open
title="What types of legal services do you provide"
body={(
  <div className="flex flex-col gap-4">
    <p>
      I offer a comprehensive range of legal services spanning multiple practice areas.
      In Property Law Practice, we provide services including initial inquiry and assessment, title deduction and investigation, final conveyance processes, and post-completion procedures.
      We also handle public land acquisition, lease and tenancy matters, mortgages, and charges, offering guidance on mortgages, property valuation, and more.
      In addition, we specialize in wills, codicils, and probate practice, assisting with estate law administration.
      Our Corporate Law Practice covers company promotion, incorporation, investment agreements, corporate secretarial services, and corporate reorganization, including mergers and acquisitions.
      Lastly, in Commercial and Contractual Law, we excel in drafting agreements, copyright, industrial property law, trademark matters, employment law consultations, and contract establishment and enforcement.
    </p>
    <div className="flex gap-2">
      <button className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800">View all services</button>
      <button className="border border-blueE px-5 py-3 rounded-md hover:bg-gray-100">Contact me</button>
    </div>
  </div>
)}
/>

<Accordion
title="What types of legal services do you provide"
body={(
  <div className="flex flex-col gap-4">
    <p>
      I offer a comprehensive range of legal services spanning multiple practice areas.
      In Property Law Practice, we provide services including initial inquiry and assessment, title deduction and investigation, final conveyance processes, and post-completion procedures.
      We also handle public land acquisition, lease and tenancy matters, mortgages, and charges, offering guidance on mortgages, property valuation, and more.
      In addition, we specialize in wills, codicils, and probate practice, assisting with estate law administration.
      Our Corporate Law Practice covers company promotion, incorporation, investment agreements, corporate secretarial services, and corporate reorganization, including mergers and acquisitions.
      Lastly, in Commercial and Contractual Law, we excel in drafting agreements, copyright, industrial property law, trademark matters, employment law consultations, and contract establishment and enforcement.
    </p>
    <div className="flex gap-2">
      <button className="bg-backgroundBlack text-white px-5 py-3 rounded-md hover:bg-gray-800">View all services</button>
      <button className="border border-backgroundBlack px-5 py-3 rounded-md hover:bg-gray-100">Contact me</button>
    </div>
  </div>
)}
/>

<Accordion
title="What types of legal services do you provide"
body={(
  <div className="flex flex-col gap-4">
    <p>
      I offer a comprehensive range of legal services spanning multiple practice areas.
      In Property Law Practice, we provide services including initial inquiry and assessment, title deduction and investigation, final conveyance processes, and post-completion procedures.
      We also handle public land acquisition, lease and tenancy matters, mortgages, and charges, offering guidance on mortgages, property valuation, and more.
      In addition, we specialize in wills, codicils, and probate practice, assisting with estate law administration.
      Our Corporate Law Practice covers company promotion, incorporation, investment agreements, corporate secretarial services, and corporate reorganization, including mergers and acquisitions.
      Lastly, in Commercial and Contractual Law, we excel in drafting agreements, copyright, industrial property law, trademark matters, employment law consultations, and contract establishment and enforcement.
    </p>
    <div className="flex gap-2">
      <button className="bg-backgroundBlack text-white px-5 py-3 rounded-md hover:bg-gray-800">View all services</button>
      <button className="border border-backgroundBlack px-5 py-3 rounded-md hover:bg-gray-100">Contact me</button>
    </div>
  </div>
)}
/> */}