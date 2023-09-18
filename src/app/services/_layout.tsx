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
        background: `linear-gradient(#5b576be3 0%, #5b576bcf 100%), url(${heroImage.src})`,
      }}>
        <NavBar />
        <div className="flex flex-col h-full justify-center w-1/2 gap-1">
          <p className="text-xl text-primary font-bold">We are experts at</p>
          <p className="text-5xl font-extrabold leading-tight">{headingText}</p>
        </div>

      </div>
      <div className="absolute top-80 w-full px-16 pb-32">
        <div className="flex flex-col gap-4 h-96 p-4 bg-white rounded-lg">

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
      </div>
    </div>
  );
};

export default Layout;
