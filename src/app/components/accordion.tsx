import React from "react";
import ChevronDown from "@heroicons/react/24/outline/ChevronDownIcon";


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

export default Accordion;
