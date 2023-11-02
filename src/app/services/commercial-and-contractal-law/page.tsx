"use client";
import Link from "next/link";
import React from "react";

import Layout from "../_layout";
import CCLImage from "../../../assets/CCLImage.png";
import Footer from "../../components/footer";
import Postcard from "../../components/Postcard";
import PostCard from "../../components/Postcard";
import Accordion from "../../components/accordion";
import Blog2 from "../../../assets/Blog2.png";
import Appointment from "../../assets/Appointment.png";

const CommercialAndContractalLaw = () => {
  return (
    <main>
      <div>
        <Layout
          backgroundImage={CCLImage}
          headingText="commercial and contractual law"
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

export default CommercialAndContractalLaw;


{/* <div className="absolute w-full" style={{ top: "50vh" }}>
<div className="flex flex-col gap-8">
  <div className="flex flex-col rounded-lg bg-white gap-4 mx-2 md:mx-16 p-4">
    <Accordion
      open
      title="Drafting and Evaluating Hire Purchase Agreements"
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
            establishment and enforcement.r a hassle-free land sale
            experience.
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
      title="Profound Knowledge of Copyright Law"
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
      title="Focused Competence in Industrial Property Law"
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
      title="Skilful Handling of Trademark Law Matters"
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
      title="Consultation for Employment Law Matter"
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
      title="Establishing and Enforcing Legally Sound Contracts"
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