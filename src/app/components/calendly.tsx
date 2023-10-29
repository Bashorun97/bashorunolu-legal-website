import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="calendly-inline-widget h-full overflow-hidden">
      <InlineWidget url="https://calendly.com/damian-akpan/30min?month=2023-10" styles={{height:"100vh"}} />
    </div>
  );
};

export default Calendly;