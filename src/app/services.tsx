import React from "react";

import {StaticImageData} from "next/image";

import SoLaw from "../assets/so-law.png";
import SoStore from "../assets/so-store.png";
import SoFamily from "../assets/so-family.png";
import PLP from "../assets/PLP.png";
import CLP from "../assets/CLP.png";
import CCL from "../assets/CCL.png";
import FL from "../assets/FL.png";

interface CardProps {
  title: string;
  description: Array<string>;
  backgroundImage: StaticImageData;
}

const Card = ({title, backgroundImage, description}: CardProps): JSX.Element => {
  return (
    <div className="flex flex-col justify-between mb-10 rounded-md px-4 py-6 w-[rem] " style={{
      height: "40rem",
      background: ` url(${backgroundImage.src})`,
      backgroundRepeat: "no-repeat",
      
    }}>
      <div className="flex flex-col leading-4 ml-6 mt-4">
        <p className="text-secondary text-md font-semibold">We are experts at</p>
        <p className="text-blueE font-bold text-2xl">{title}</p>
      </div>
      <ul className="list-disc list-inside ml-6">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="bg-blueE ml-6 mb-6 text-white rounded-md w-32 py-3 px-4 hover:bg-gray-800">Learn More</button>
    </div>
  );
}

const Services = (): JSX.Element => {
  return (
    <div className=" mx-16 ">
      <Card
        backgroundImage={PLP}
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
        backgroundImage={CLP}
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
        backgroundImage={CCL}
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
        backgroundImage={FL}
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
