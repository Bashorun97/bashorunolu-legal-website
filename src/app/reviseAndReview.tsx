"use client";

import React from "react";

import ReviseAndReviewHeroImage from "../assets/revise-review-hero.png";


const ChevronDown = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
};

interface AccordionProps {
  title: string;
  open?: boolean;
  body: Array<string>;
}

const Accordion = ({open = false, title, body}: AccordionProps): JSX.Element => {
  const [openDefault, setOpen] = React.useState<boolean>(open);

  React.useEffect(() => {
    console.log("open", openDefault);
  }, [openDefault]);

  const onClick = () => {
    setOpen(!openDefault);
  };

  return (
    <div className="text-white border border-gray-400 rounded-md px-4 py-1">
      <div className={`py-3 text-lg flex justify-between border-gray-400 ${openDefault ? "border-b" : ""}`}>
        <div>{title}</div>
        <button onClick={onClick} className={`origin-center ${openDefault ? "rotate-180" : "rotate-0"}`}>
          <ChevronDown />
        </button>
      </div>
      <div className={`transition-all overflow-hidden ${openDefault ? "py-2 h-full" : "h-0 py-0"}`}>
        <ul className="list-disc list-inside">
          {body.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const ReviseAndReview = (): JSX.Element => {
  return (
    <div style={{
      height: "185vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${ReviseAndReviewHeroImage.src})`,
    }}>
      <div className="inset-0 flex flex-col gap-4 sm:w-7/12 px-2 sm:px-16 py-8 sm:py-24">
        <div className="flex flex-col leading-1 text-center sm:text-left">
          <p className="text-secondary text-xl font-semibold">Revise and Review</p>
          <p className="text-primary text-3xl sm:text-4xl font-extrabold">Unparalleled Expertise in Document Revision and Review</p>
        </div>

        <div className="text-white text-xl sm:text-lg text-center sm:text-left">
          With our expertise, you can proceed with confidence,
          knowing that your documents are legally sound and error-free.
        </div>

        <Accordion
          open
          title="What I Review"
          body={[
            "Contracts and Agreements: We meticulously review contracts and agreements to identify potential risks and ensure that all terms and conditions are clear and legally binding.",
            "Leases and Rental Agreements: Protect your interests in property transactions with our thorough review of leases and rental agreements.",
            "Legal Pleadings: Ensure the accuracy of legal pleadings and court documents to present your case effectively.",
            "Corporate Documents: From bylaws to partnership agreements, we review corporate documents to safeguard your business interests.",
          ]} />
        <Accordion title="My Review Process" body={[]} />
        <Accordion title="Benefits of my process" body={[]} />
      </div>
    </div>
  );
};

export default ReviseAndReview;
