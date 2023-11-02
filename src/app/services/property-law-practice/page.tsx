"use client";

import React from "react";

import Link from "next/link";

import Layout from "../_layout";
import PLPImage from "../../../assets/PLPImage.png";


const PropertyLawPractice = () => {
  return (
    <main>
      <Layout
        backgroundImage={PLPImage}
        headingText="Property Law Practice (Conveyance Practice)"
        faqItems={[
          {
            title: "Sales of Land",
            body: (
              <div className="flex flex-col gap-4">
                <p>
                  Our service designed to simplify your property transactions.
                  We handle it all, from the initial inquiry and assessment to
                  meticulous title deduction and investigation. Our expertise
                  extends to guiding you through the final conveyance process
                  seamlessly, ensuring a smooth transition of ownership. We also
                  provide comprehensive post-completion support to guarantee
                  your peace of mind. Trust us for a hassle-free land sale
                  experience.
                </p>
                <p className="-mb-5">This service includes:</p>
                <ul className="list-disc pl-6 py-2">
                  <li className="">
                    Initial/Preliminary Inquiry and Assessment
                  </li>
                  <li>Title Deduction and Investigation [Search]</li>
                  <li>Final Conveyance Process</li>
                  <li>Post Completion process</li>
                </ul>
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
            ),
          },
          {
            title: "Public land acquisition and excision processing",
            body: (
              <div className="flex flex-col gap-4">
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
            ),
          },
          {
            title: "Lease and tenancies",
            body: (
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
            ),
          },
          {
            title: "Mortgages and charges",
            body: (
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
            ),
          },
          {
            title: "Wills and codicil",
            body: (
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
            ),
          },
          {
            title: "Probate practice",
            body: (
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
            ),
          },
        ]}
      />
    </main>
  );
};

export default PropertyLawPractice;


{/* <div className="absolute w-full mb-20" style={{ top: "50vh" }}>
<div className="flex flex-col gap-8">
  <div className="flex flex-col rounded-lg bg-white gap-4 mx-2 md:mx-16 p-4">
    <Accordion
      open
      title="Sales of Land"
      body={
        <div className="flex flex-col gap-4">
          <p>
            Our service designed to simplify your property transactions.
            We handle it all, from the initial inquiry and assessment to
            meticulous title deduction and investigation. Our expertise
            extends to guiding you through the final conveyance process
            seamlessly, ensuring a smooth transition of ownership. We
            also provide comprehensive post-completion support to
            guarantee your peace of mind. Trust us for a hassle-free
            land sale experience.
          </p>
          <p className="-mb-5">This service includes:</p>
          <ul className="list-disc pl-6 py-2">
            <li className="">
              Initial/Preliminary Inquiry and Assessment
            </li>
            <li>Title Deduction and Investigation [Search]</li>
            <li>Final Conveyance Process</li>
            <li>Post Completion process</li>
          </ul>
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
      title="Public land acquisition and excision processing"
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
      title="Lease and tenancies"
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
      title="Mortgages and charges"
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
      title="Wills and codicil"
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
      title="Probate practice"
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
<div className="flex flex-col gap-4 mt-[28rem] mb-28 px-20">
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