"use client";

import React from "react";

import Layout from "../_layout";

import CLPImage from "../../../assets/CLPImage.png";
import BookAppointment from "../_layout";
import Link from "next/link";
import CCLImage from "../../../assets/CCLImage.png";
import Footer from "../../components/footer";
import Postcard from "../../components/Postcard";
import PostCard from "../../components/Postcard";
import Accordion from "../../components/accordion";
import Blog2 from "../../../assets/Blog2.png";

import Appointment from "../../assets/Appointment.png";

const CorporateLawPractice = () => {
  return (
    <main>
      <div>
        <Layout
          backgroundImage={CLPImage}
          headingText="Corporate Law Practice"
          faqItems={[
            {
              title: "Hello",
              body: (
                <div>Hello</div>
              )
            }
          ]}
        />
      </div>

    </main>
  );
};

export default CorporateLawPractice;


{/* <div className="absolute w-full mb-20" style={{ top: "50vh" }}>
<div className="flex flex-col gap-8">
  <div className="flex flex-col rounded-lg bg-white gap-4 mx-2 md:mx-16 p-4">
    <Accordion
      open
      title="Company Promotion and Facilitation"
      body={
        <div className="flex flex-col gap-4">
          <p>
            We offer a comprehensive range of legal services spanning
            multiple practice areas. In Property Law Practice, we
            provide services including initial inquiry and assessment,
            title deduction and investigation, final conveyance
            processes, and post-completion procedures. We also handle
            public land acquisition, lease and tenancy matters,
            mortgages, and charges, offering guidance on mortgages,
            property valuation, and more. In addition, we specialize in
            wills, codicils, and probate practice, assisting with estate
            law administration. Our Corporate Law Practice covers
            company promotion, incorporation, investment agreements,
            corporate secretarial services, and corporate
            reorganization, including mergers and acquisitions. Lastly,
            in Commercial and Contractual Law, we excel in drafting
            agreements, copyright, industrial property law, trademark
            matters, employment law consultations, and contract
            establishment and enforcement.
          </p>

          <div className="flex gap-2">
            <Link
              href="/book-appointment"
              className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800"
            >
              BOOK AN APPOINTMENT
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      }
    />

    <Accordion
      open
      title="Company Incorporation Processes"
      body={
        <div className="flex flex-col gap-4">
          <p></p>

          <div className="flex gap-2">
            <Link
              href="/book-appointment"
              className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800"
            >
              BOOK AN APPOINTMENT
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      }
    />
    <Accordion
      open
      title="Formulation of Investment Agreements"
      body={
        <div className="flex flex-col gap-4">
          <p></p>

          <div className="flex gap-2">
            <Link
              href="/book-appointment"
              className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800"
            >
              BOOK AN APPOINTMENT
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      }
    />

    <Accordion
      open
      title="Corporate Secretarial Services"
      body={
        <div className="flex flex-col gap-4">
          <p></p>

          <div className="flex gap-2">
            <Link
              href="/book-appointment"
              className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800"
            >
              BOOK AN APPOINTMENT
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      }
    />
    <Accordion
      open
      title="Counsel for Collective Investment Schemes"
      body={
        <div className="flex flex-col gap-4">
          <p></p>

          <div className="flex gap-2">
            <Link
              href="/book-appointment"
              className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800"
            >
              BOOK AN APPOINTMENT
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      }
    />
    <Accordion
      open
      title="Facilitation of Corporate Reorganisation including Arrangements and Compromises"
      body={
        <div className="flex flex-col gap-4">
          <p></p>

          <div className="flex gap-2">
            <Link
              href="/book-appointment"
              className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800"
            >
              BOOK AN APPOINTMENT
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      }
    />
    <Accordion
      open
      title="External Restructuring via Mergers and Acquisitions"
      body={
        <div className="flex flex-col gap-4">
          <p></p>

          <div className="flex gap-2">
            <Link
              href="/book-appointment"
              className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800"
            >
              BOOK AN APPOINTMENT
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      }
    />
    <Accordion
      open
      title="Corporate Litigation and Investment Dispute Resolution"
      body={
        <div className="flex flex-col gap-4">
          <p></p>

          <div className="flex gap-2">
            <Link
              href="/book-appointment"
              className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800"
            >
              BOOK AN APPOINTMENT
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      }
    />
  </div>
</div>
</div>

<div>
<div className="flex flex-col gap-4 mt-[38rem] mb-28 px-20">
  <h4 className="text-2xl font-bold">Related Posts</h4>
  <div className="grid grid-cols-3 gap-4">
    <PostCard
      image={Blog2}
      title="cards"
      description="post cards"
      route="/blog/effective-subtract-fill"
    />
    <PostCard
      image={Blog2}
      title="card"
      description="post cards"
      route="/blog/effective-subtract-fill"
    />
    <PostCard
      image={Blog2}
      title="card"
      description="post cards"
      route="/blog/effective-subtract-fill"
    />
    <PostCard
      image={Blog2}
      title="card"
      description="post cards"
      route="/blog/effective-subtract-fill"
    />
    <PostCard
      image={Blog2}
      title="card"
      description="post cards"
      route="/blog/effective-subtract-fill"
    />
    <PostCard
      image={Blog2}
      title="card"
      description="post cards"
      route="/blog/effective-subtract-fill"
    />
  </div>
</div>

<div>
  <Footer />
</div>
</div> */}