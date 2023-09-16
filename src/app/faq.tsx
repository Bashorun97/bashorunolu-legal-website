import React from "react";

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
  body: React.ReactNode;
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
    <div className="text-black border border-gray-300 rounded-md px-4 py-1">
      <div onClick={onClick} className={`py-3 text-lg flex justify-between cursor-pointer border-gray-300 ${openDefault ? "border-b" : ""}`}>
        <div>{title}</div>
        <button onClick={onClick} className={`origin-center ${openDefault ? "rotate-180" : "rotate-0"}`}>
          <ChevronDown />
        </button>
      </div>
      <div className={`transition-all overflow-hidden ${openDefault ? "py-2 h-full" : "h-0 py-0"}`}>
        {body}
      </div>
    </div>
  );
}

const FAQ = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 sm:gap-10 py-8 sm:py-16 px-2 sm:px-56">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-secondary font-semibold text-xl">FAQ</h3>
        <p className="text-3xl font-extrabold text-backgroundBlack">Your Questions Answered</p>
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
                <button className="bg-backgroundBlack text-white px-5 py-3 rounded-md">View all services</button>
                <button className="border border-backgroundBlack px-5 py-3 rounded-md">Contact me</button>
              </div>
            </div>
          )}
        />

        <Accordion
          title="How do I schedule a consultation with you?"
          body={(
            <div>
              <p>Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation. You should proofread only after you have finished all of your other editing revisions.</p>
            </div>
          )}
        />

        <Accordion
          title="Is the initial consultation free?"
          body={(
            <div>
              <p>Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation. You should proofread only after you have finished all of your other editing revisions.</p>
            </div>
          )}
        />

        <Accordion
          title="How can I reach you for inquiries or assistance?"
          body={(
            <div>
              <p>Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation. You should proofread only after you have finished all of your other editing revisions.</p>
            </div>
          )}
        />

        <Accordion
          title="What information should I bring to the initial consultation?"
          body={(
            <div>
              <p>Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation. You should proofread only after you have finished all of your other editing revisions.</p>
            </div>
          )}
        />

        <Accordion
          title="How is billing handled for your legal services?"
          body={(
            <div>
              <p>Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation. You should proofread only after you have finished all of your other editing revisions.</p>
            </div>
          )}
        />

        <Accordion
          title="Are there any upfront fees for services like document review or contract drafting?"
          body={(
            <div>
              <p>Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation. You should proofread only after you have finished all of your other editing revisions.</p>
            </div>
          )}
        />

        <Accordion
          title="Can I get a quote for the cost of legal services before proceeding?"
          body={(
            <div>
              <p>Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation. You should proofread only after you have finished all of your other editing revisions.</p>
            </div>
          )}
        />

        <Accordion
          title="Do you offer payment plans or options for clients with financial constraints?"
          body={(
            <div>
              <p>Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation. You should proofread only after you have finished all of your other editing revisions.</p>
            </div>
          )}
        />

        <Accordion
          title="Can I get references or client testimonials for you?"
          body={(
            <div>
              <p>Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation. You should proofread only after you have finished all of your other editing revisions.</p>
            </div>
          )}
        />

        <Accordion
          title="Do you offer virtual or remote consultations for clients who cannot visit your office in person?"
          body={(
            <div>
              <p>Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation. You should proofread only after you have finished all of your other editing revisions.</p>
            </div>
          )}
        />

        <Accordion
          title="How can I get started with your law firm and initiate the legal process for my case?"
          body={(
            <div>
              <p>Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation. You should proofread only after you have finished all of your other editing revisions.</p>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default FAQ;
