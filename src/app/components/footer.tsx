import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../assets/logo.png";

const Footer = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-between py-16 px-2 sm:px-16 text-white  bg-footerColor">
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

          <Link href="tel:+2347042871925">call: (234) 7042871925</Link>
        </div>

        <div className="flex flex-grow gap-4 sm:gap-10 w-full sm:w-min">
          <div className="flex flex-col w-1/2">
            <p className="mb-2 font-extrabold">Links</p>
            <Link href="/contact-us" className="mb-4">Contact us</Link>
            <Link href="/book-appointment" className="mb-4">Schedule an appointment</Link>
            <Link href="/blog" className="mb-4">Blog</Link>
            <Link href="/#faq" className="mb-4">FAQ</Link>
            {/* <Link href="/#<reviseAndReview-id>" className="mb-4">Testimonials</Link> */}
            <Link href="/#reviseAndReview" className="mb-4">Legal Process Review</Link>
          </div>
          <div className="flex flex-col w-1/2">
            <p className="mb-2 font-extrabold">Services</p>
            <Link href="/services/property-law-practice" className="mb-4">Property Law Practice (Conveyance Practice)</Link>
            <Link href="/services/corporate-law-practice" className="mb-4">Corporate Law practice</Link>
            <Link href="/services/commercial-and-contractual-law" className="mb-4">Commercial and Contractual Law</Link>
            <Link href="/services/family-law" className="mb-4">Family Law</Link>
          </div>
        </div>
      </div>
      <div className="border border-backgroundWhite border-opacity-10 my-10 w-8/12"></div>
      <p>© 2023 OLU BASHORUN & CO</p>
    </div>
  );
};

export default Footer;
