"use client";

import React from "react";
import ChevronDown from "@heroicons/react/24/outline/ChevronDownIcon";

import ReviseAndReviewHeroImage from "../assets/revise-review-hero.png";
import Legal from "../assets/Legal.png"
interface AccordionProps {
  title: string;
  open?: boolean;
  onOpen: () => void;
  body: React.ReactNode;
}

const Accordion = ({open = false, title, body, onOpen}: AccordionProps): JSX.Element => {
  return (
    <div className="text-white border border-gray-400 rounded-md px-4 py-1">
      <div className={`py-3 text-lg flex justify-between border-gray-400 ${open ? "border-b" : ""}`}>
        <div>{title}</div>
        <button onClick={onOpen} className={`origin-center ${open ? "rotate-180" : "rotate-0"}`}>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
      <div className={`transition-all overflow-hidden ${open ? "py-2 h-full" : "h-0 py-0"}`}>
        {body}
      </div>
    </div>
  );
}

const ReviseAndReview = (): JSX.Element => {
  const [currentAccordion, setCurrentAccordion] = React.useState<number>(0);

  return (
    <div className="my-20" style={{
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${Legal.src})`,
    }}>
      <div className="inset-0 flex flex-col gap-4 md:w-7/12 px-2 sm:px-16 py-8 sm:py-24">
        <div className="flex flex-col leading-1 text-center sm:text-left">
          <p className="text-secondary text-xl font-semibold">Revise and Review</p>
          <p className="text-primary text-3xl sm:text-4xl font-extrabold">Unparalleled Expertise in Document Revision and Review</p>
        </div>

        <div className="text-white text-xl mb-12 mt-4 sm:text-lg text-center sm:text-left">
          With our expertise, you can proceed with confidence,
          knowing that your documents are legally sound and error-free.
        </div>

        <Accordion
          open={currentAccordion === 0}
          onOpen={() => setCurrentAccordion(0)}
          title="What we Review"
          body={(
            <ul className="list-disc list-inside flex flex-col gap-4">
              <li>Contracts and Agreements: We meticulously review contracts and agreements to identify potential risks and ensure that all terms and conditions are clear and legally binding.</li>
              <li>Leases and Rental Agreements: Protect your interests in property transactions with our thorough review of leases and rental agreements.</li>
              <li>Legal Pleadings: Ensure the accuracy of legal pleadings and court documents to present your case effectively.</li>
              <li>Corporate Documents: From bylaws to partnership agreements, we review corporate documents to safeguard your business interests.</li>
            </ul>
          )}
        />
        <Accordion
          open={currentAccordion === 1}
          onOpen={() => setCurrentAccordion(1)}
          title="My Review Process"
          body={(
            <ul className="list-disc list-inside flex flex-col gap-4">
              <li>Contracts and Agreements: We meticulously review contracts and agreements to identify potential risks and ensure that all terms and conditions are clear and legally binding.</li>
              <li>Leases and Rental Agreements: Protect your interests in property transactions with our thorough review of leases and rental agreements.</li>
              <li>Legal Pleadings: Ensure the accuracy of legal pleadings and court documents to present your case effectively.</li>
              <li>Corporate Documents: From bylaws to partnership agreements, we review corporate documents to safeguard your business interests.</li>
            </ul>
          )}
        />
        <Accordion
          open={currentAccordion === 2}
          onOpen={() => setCurrentAccordion(2)}
          title="Benefits of my process"
          body={(
            <ul className="list-disc list-inside flex flex-col gap-4">
              <li>Contracts and Agreements: We meticulously review contracts and agreements to identify potential risks and ensure that all terms and conditions are clear and legally binding.</li>
              <li>Leases and Rental Agreements: Protect your interests in property transactions with our thorough review of leases and rental agreements.</li>
              <li>Legal Pleadings: Ensure the accuracy of legal pleadings and court documents to present your case effectively.</li>
              <li>Corporate Documents: From bylaws to partnership agreements, we review corporate documents to safeguard your business interests.</li>
            </ul>
          )}
        />
      </div>
    </div>
  );
};

export default ReviseAndReview;
