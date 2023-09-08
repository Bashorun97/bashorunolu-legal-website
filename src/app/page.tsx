"use client";

import React from "react";

import Heading from "./heading";
import Mission from "./mission";
import Services from "./services";
import ReviseAndReview from "./reviseAndReview";


export default function Home() {
  return (
    <div>
      <Heading />
      <Mission />
      <Services />
      <ReviseAndReview />
      <FAQ />
      { /*
      <div>Footer</div>
      */ }
    </div>
  );
}

