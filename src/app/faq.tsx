import React from "react";

import Link from "next/link";

import ChevronDown from "@heroicons/react/24/outline/ChevronDownIcon";


interface AccordionProps {
  title: string;
  open?: boolean;
  body: React.ReactNode;
}

const Accordion = ({ open = false, title, body }: AccordionProps): JSX.Element => {
  const [openDefault, setOpen] = React.useState<boolean>(open);

  React.useEffect(() => {
    console.log("open", openDefault);
  }, [openDefault]);

  const onClick = () => {
    setOpen(!openDefault);
  };

  return (
    <div id="faq" className="text-black border border-gray-300 rounded-md px-4 py-1">
      <div onClick={onClick} className={`py-3 text-lg flex justify-between cursor-pointer border-gray-300 ${openDefault ? "border-b" : ""}`}>
        <div >{title}</div>
        <button onClick={onClick} className={`origin-center ${openDefault ? "rotate-180" : "rotate-0"}`}>
          <ChevronDown />
        </button>
      </div>
      <div className={`transition-all overflow-hidden ${openDefault ? "py-4 h-full" : "h-0 py-0"}`}>
        {body}
      </div>
    </div>
  );
}

const FAQ = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 sm:gap-10 py-8 sm:py-16 px-2 md:px-56">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-secondary font-semibold text-xl">FAQ</h3>
        <p className="text-3xl font-extrabold text-blueE">Your Questions Answered</p>
      </div>

      <div className="flex flex-col gap-6">
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
                <Link href="/#our-services" className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800">VIEW ALL SERVICES</Link>
                <Link href="/contact-us" className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100">CONTACT US</Link>
              </div>
            </div>
          )}
        />

        <Accordion
          title="How do I schedule a consultation with you?"
          body={(
            <div className="flex flex-col gap-4">
              <p>Consultation can be scheduled based on its suitability; appointment booking via the available form on the page, email (olu.bash.law@gmail.com) or phone</p>
              <div className="flex gap-2">
                <Link href="/book-appointment" className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800">BOOK AN APPOINTMENT</Link>
                <Link href="/contact-us" className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100">CONTACT US</Link>
              </div>
            </div>

          )}
        />

        <Accordion
          title="Is there an initial consultation free?"
          body={(
            <div className="flex flex-col gap-4">
              <p>The initial Consultation fee being relevant if it is premised on any basis that has a utility value, the fee which will be decided subsequent to the initial contact.</p>
              <div className="flex gap-2">
                <Link href="/book-appointment" className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800">BOOK AN APPOINTMENT</Link>
                <Link href="/contact-us" className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100">CONTACT US</Link>
              </div>
            </div>
          )}
        />

        <Accordion
          title="How is billing handled for your legal services?"
          body={(
            <div className="flex flex-col gap-4">
              <p>Billing is handled via subject specifics and transactional value, the channel being dependent on the aforementioned.</p>
              <div className="flex gap-2">
                <Link href="/book-appointment" className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800">BOOK AN APPOINTMENT</Link>
                <Link href="/contact-us" className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100">CONTACT US</Link>
              </div>
            </div>
          )}
        />

        <Accordion
          title="Are there any upfront fees for services like document review or contract drafting?"
          body={(
            <div className="flex flex-col gap-4">
              <p>There are upfront fees for document review and drafting, a 40% deposit and the rest on completion.</p>
              <div className="flex gap-2">
                <Link href="/book-appointment" className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800">BOOK AN APPOINTMENT</Link>
                <Link href="/contact-us" className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100">CONTACT US</Link>
              </div>
            </div>
          )}
        />

        <Accordion
          title="Can I get a quote for the cost of relevant services before proceeding?"
          body={(
            <div className="flex flex-col gap-4">
              <p>Yes, we’d oblige you with a quotation bearing the cost of services upon request.</p>
              <div className="flex gap-2">
                <Link href="/book-appointment" className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800">BOOK AN APPOINTMENT</Link>
                <Link href="/contact-us" className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100">CONTACT US</Link>
              </div>
            </div>
          )}
        />

        <Accordion
          title="Do you offer payment plans or options for clients with financial constraints?"
          body={(
            <div className="flex flex-col gap-4">
              <p>There is Pro Bono service and this is inextricably linked to individual cases.</p>
              <div className="flex gap-2">
                <Link href="/book-appointment" className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800">BOOK AN APPOINTMENT</Link>
                <Link href="/contact-us" className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100">CONTACT US</Link>
              </div>
            </div>
          )}
        />

        <Accordion
          title="Can I get references and clients’ testimonials from you?"
          body={(
            <div className="flex flex-col gap-4">
              <p>There is a dedicated section of the page for these, bearing the testimonials of a myriad of clients and partners we have worked with from the incipience of this establishment.</p>
              <div className="flex gap-2">
                <Link href="/book-appointment" className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800">BOOK AN APPOINTMENT</Link>
                <Link href="/contact-us" className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100">CONTACT US</Link>
              </div>
            </div>
          )}
        />

        <Accordion
          title="Do you offer virtual or remote consultations for clients who cannot visit your office in person?"
          body={(
            <div className="flex flex-col gap-4">
              <p>A significant majority of undertakings are primarily by virtual or remote consultations, and physical or onsite appointment when necessary.</p>
              <div className="flex gap-2">
                <Link href="/book-appointment" className="bg-blueE text-white px-5 py-3 rounded-md hover:bg-gray-800">BOOK AN APPOINTMENT</Link>
                <Link href="/contact-us" className="border-2 border-blueE px-5 py-3 rounded-md hover:bg-gray-100">CONTACT US</Link>
              </div>
            </div>
          )}
        />


      </div>
    </div>
  );
}

export default FAQ;
