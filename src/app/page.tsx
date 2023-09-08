import React from "react";
import Image from "next/image";

import Heading from "./heading";
import Mission from "./mission";


export default function Home() {
  return (
    <div>
      <Heading />
      <Mission />
      { /*
      <div>Revise and Review</div>
      <div>FAQ</div>
      <div>Footer</div>
      */ }
    </div>
  );
}

