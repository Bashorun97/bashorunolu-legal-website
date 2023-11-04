"use client";

import React from "react";

import FAQ from "./faq";
import Heading from "./heading";
import Mission from "./mission";
import Services from "./services";
import Footer from "./components/footer";
import ReviseAndReview from "./reviseAndReview";


export default function Home() {
  return (
    <>
      <Heading />
      <Mission />
      <Services />
      <ReviseAndReview />
      <FAQ/>
      <Footer />
    </>
  );
}

