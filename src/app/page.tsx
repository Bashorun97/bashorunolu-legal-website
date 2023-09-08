import React from "react";

import Heading from "./heading";
import Mission from "./mission";
import Services from "./services";


export default function Home() {
  return (
    <div>
      <Heading />
      <Mission />
      <Services />
      { /*
      <div>Revise and Review</div>
      <div>FAQ</div>
      <div>Footer</div>
      */ }
    </div>
  );
}

