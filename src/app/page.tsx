"use client";

import React from "react";

import FAQ from "./faq";
import Footer from "./components/footer";
import Heading from "./heading";
import Mission from "./mission";
import Services from "./services";
import ReviseAndReview from "./reviseAndReview";


export default function Home() {
  return (
    <>
      <Heading />
      <Mission />
      <Services />
      <ReviseAndReview />
      <FAQ />
      <Footer />
    </>
  );
}

