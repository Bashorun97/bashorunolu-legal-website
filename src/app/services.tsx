import React from "react";

import {StaticImageData} from "next/image";

import SoLaw from "../assets/so-law.png";
import SoStore from "../assets/so-store.png";
import SoFamily from "../assets/so-family.png";
import SoImage from "../assets/so-company.png";

interface CardProps {
  title: string;
  description: Array<string>;
  backgroundImage: StaticImageData;
}

const Card = ({title, backgroundImage, description}: CardProps): JSX.Element => {
  return (
    <div className="flex flex-col justify-between rounded-md px-4 py-6" style={{
      height: "28rem",
      background: `#4546551f url(${backgroundImage.src})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "250% 0px",
    }}>
      <div className="flex flex-col leading-4">
        <p className="text-secondary text-md font-semibold">We are experts at</p>
        <p className="text-backgroundBlack font-bold text-2xl">{title}</p>
      </div>
      <ul className="list-disc list-inside">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="bg-backgroundBlack text-white rounded-md w-32 py-3 px-4">Learn More</button>
    </div>
  );
}

const Services = (): JSX.Element => {
  return (
    <div className="bg-backgroundWhite grid grid-cols-2 gap-8 px-32 py-8">
      <Card
        backgroundImage={SoImage}
        title="Property Law Practice (Conveyance Practice)"
        description={[
          "Sales of land",
          "Public land acquisition and extinction processing",
          "Lease and tenancies",
          "Mortgages and charges",
          "Wills and codicil",
          "Probate practice",
        ]}
      />
      <Card
        title="Corporate Law Practice"
        backgroundImage={SoLaw}
        description={[
          "Company Promotion and Facilitation",
          "Company Incorporation Processes",
          "Post-incorporated matters",
          "Formulation of Investment Agreements",
          "Corporate Secretarial Services",
          "Counsel for Collective Investment Schemes",
          "Facilitation of Corporate Reorganisation including Arrangements and Compromises",
          "External Restructuring via Mergers and Acquisitions",
          "Corporate Litigation and Investment Dispute Resolution",
        ]}
      />
      <Card
        title="Commercial and Contractual Law"
        backgroundImage={SoStore}
        description={[
          "Drafting and Evaluating Hire Purchase Agreements",
          "Profound Knowledge of Copyright Law",
          "Focused Competence in Industrial Property Law",
          "Skillful Handling of Trademark Law Matters",
          "Consultation for Employment Law Matters",
          "Establishing and Enforcing Legally Sound Contracts",
        ]}
      />

      <Card
        title="Litigation and Dispute Resolution"
        backgroundImage={SoFamily}
        description={[
          "Divorce and Separation",
          "Child Custody and Support",
          "Spousal Support",
          "Adoption",
          "Prenuptial Agreements",
        ]}
      />
    </div>
  );
};

export default Services;
