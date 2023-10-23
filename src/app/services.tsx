import React from "react";

import Link from "next/link";
import {StaticImageData} from "next/image";

import PLP from "../assets/PLP.png";
import CLP from "../assets/CLP.png";
import FL from "../assets/FL.png";
import CCL from "../assets/CCL.png";
import SoLaw from "../assets/so-law.png";
import SoStore from "../assets/so-store.png";
import SoFamily from "../assets/so-family.png";

interface CardProps {
  title: string;
  slug: string;
  description: React.ReactNode;
  backgroundImage: StaticImageData;
}

const Card = ({title, backgroundImage, slug, description}: CardProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 justify-between mb-10 rounded-md px-4 py-6 w-[rem] " style={{
      backgroundRepeat: "no-repeat",
      background: `url(${backgroundImage.src})`,
    }}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col leading-4 ml-6 mt-4">
          <p className="text-secondary text-md font-semibold">We are experts at</p>
          <p className="text-blueE font-bold text-2xl">{title}</p>
        </div>
        {description}
      </div>
      <Link href={`/services/${slug}`} className="bg-blueE text-center ml-6 mb-6 text-white rounded-md w-32 py-3 px-4 hover:bg-gray-800">Learn More</Link>
    </div>
  );
}

const Services = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 gap-4 px-14 bg-backgroundWhite">
      <Card
        backgroundImage={PLP}
        title="Property Law Practice (Conveyance Practice)"
        slug="property-law-practice"
        description={(
          <ul className="list-disc list-inside ml-6">
            <li>Sales of land</li>
            <li>Public land acquisition and extinction processing</li>
            <li>Lease and tenancies</li>
            <li>Mortgages and charges</li>
            <li>Wills and codicil</li>
            <li>Probate practice</li>
          </ul>
        )}
      />
      <Card
        title="Corporate Law Practice"
        slug="corporate-law-practice"
        backgroundImage={CLP}
        description={(
          <ul className="list-disc list-inside ml-6">
            <li>Company Promotion and Facilitation</li>
            <li>Company Incorporation Processes</li>
            <li>Post-incorporated matters</li>
            <li>Formulation of Investment Agreements</li>
            <li>Corporate Secretarial Services</li>
            <li>Counsel for Collective Investment Schemes</li>
            <li>Facilitation of Corporate Reorganisation including Arrangements and Compromises</li>
            <li>External Restructuring via Mergers and Acquisitions</li>
            <li>Corporate Litigation and Investment Dispute Resolution</li>
          </ul>
        )}
      />
      <Card
        title="Commercial and Contractual Law"
        slug="commercial-and-contractal-law"
        backgroundImage={CCL}
        description={(
          <ul className="list-disc list-inside ml-6">
            <li>Drafting and Evaluating Hire Purchase Agreements</li>
            <li>Profound Knowledge of Copyright Law</li>
            <li>Focused Competence in Industrial Property Law</li>
            <li>Skillful Handling of Trademark Law Matters</li>
            <li>Consultation for Employment Law Matters</li>
            <li>Establishing and Enforcing Legally Sound Contracts</li>
          </ul>
        )}
      />

      <Card
        title="Family Law"
        slug="family-law"
        backgroundImage={FL}
        description={(
          <ul className="list-disc list-inside ml-6">
            <li>Divorce and Separation</li>
            <li>Child Custody and Support</li>
            <li>Spousal Support</li>
            <li>Adoption</li>
            <li>Prenuptial Agreements</li>
          </ul>
        )}
      />
    </div>
  );
};

export default Services;
