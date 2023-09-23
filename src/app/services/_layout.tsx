"use client";

import React from "react";

import {StaticImageData} from "next/image";

import NavBar from "../components/NavBar";
import Accordion from "../components/accordion";

interface LayoutProps {
  headingText: string;
  heroImage: StaticImageData;
}

const Layout = ({heroImage, headingText}: LayoutProps) => {
  return (
    <div className="relative">
      <div className="flex flex-col bg-cover justify-between bg-center text-white pt-2 pb-6 h-96 sm:pb-0 px-2 md:px-16 gap-4 sm:gap-2 bg-nude" style={{
        height: "59vh",
        background: `linear-gradient(#5b576be3 0%, #5b576bcf 100%), url(${heroImage.src})`,
      }}>
        <NavBar />
        <div className="flex flex-col h-full pt-12 w-1/2 gap-1">
          <p className="text-xl text-primary font-bold">We are experts at</p>
          <p className="text-5xl font-extrabold leading-tight">{headingText}</p>
        </div>

      </div>

      <div className="absolute w-full pb-32" style={{
        top: "50vh"
      }}>

        <div className="flex flex-col gap-8">

          <div className="flex flex-col rounded-lg bg-white gap-4 mx-16 p-4">

            <Accordion
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
                    <button className="bg-backgroundBlack text-white px-5 py-3 rounded-md hover:bg-gray-800">View all services</button>
                    <button className="border border-backgroundBlack px-5 py-3 rounded-md hover:bg-gray-100">Contact me</button>
                  </div>
                </div>
              )}
            />

            <Accordion
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

          </div>

          <div className="flex flex-col px-16 py-8 gap-4 bg-white">
            <h4 className="text-2xl font-semibold">Related Posts</h4>

            <div className="grid grid-cols-3 gap-6">
              <Post
                title="Mask Pencil Vertical"
                description={`
                  Proofreading is the final stage of the editing process,
                  focusing on surface errors such as misspellings and mistakes
                  in grammar and punctuation.
                `}
                onClick={() => console.log("Hello")}
              />

              <Post
                title="Mask Pencil Vertical"
                description={`
                  Proofreading is the final stage of the editing process,
                  focusing on surface errors such as misspellings and mistakes
                  in grammar and punctuation.
                `}
                onClick={() => console.log("Hello")}
              />
              <Post
                title="Mask Pencil Vertical"
                description={`
                  Proofreading is the final stage of the editing process,
                  focusing on surface errors such as misspellings and mistakes
                  in grammar and punctuation.
                `}
                onClick={() => console.log("Hello")}
              />

              <Post
                title="Mask Pencil Vertical"
                description={`
                  Proofreading is the final stage of the editing process,
                  focusing on surface errors such as misspellings and mistakes
                  in grammar and punctuation.
                `}
                onClick={() => console.log("Hello")}
              />

              <Post
                title="Mask Pencil Vertical"
                description={`
                  Proofreading is the final stage of the editing process,
                  focusing on surface errors such as misspellings and mistakes
                  in grammar and punctuation.
                `}
                onClick={() => console.log("Hello")}
              />

              <Post
                title="Mask Pencil Vertical"
                description={`
                  Proofreading is the final stage of the editing process,
                  focusing on surface errors such as misspellings and mistakes
                  in grammar and punctuation.
                `}
                onClick={() => console.log("Hello")}
              />

            </div>
          </div>

          <div className="flex">
            Hello World
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

const Post = ({onClick}: PostProps): JSX.Element => {
  return (
    <div onClick={onClick} className="flex flex-col cursor-pointer h-96 bg-backgroundWhite overflow-hidden rounded-lg">
      <div className="flex-grow bg-red-400"></div>
      <div className="flex flex-col gap-1 p-2">
        <h3 className="font-semibold text-lg">Mask Pencil Vertical</h3>
        <p>
          Proofreading is the final stage of the editing process,
          focusing on surface errors such as misspellings and mistakes
          in grammar and punctuation.
        </p>
      </div>
    </div>
  );
}

export default Layout;
