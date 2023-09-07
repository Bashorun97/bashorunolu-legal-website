import React from "react";
import {Caveat, Mulish} from "next/font/google"

const caveat = Caveat({subsets: ["latin"]});
const mullish = Mulish({subsets: ["latin"]});

const Heading = (): JSX.Element => {
  return (
    <div className="flex flex-col text-white py-4" style={{"height": "72vh", backgroundColor: "#454655E5"}}>
      <div>Nav Bar</div>
      <div className="bg-red-200 flex flex-grow">
        <div className="flex flex-grow">

          <div className="flex flex-col">
            <h6 className={caveat.className} style={{fontSize: "64px", transform: "rotate(-5.96deg)", backgroundColor: "red", lineHeight: "53px", width: "max-content"}}>I am</h6>
            <div className={mullish.className}>Your Trusted Legal Partner in Lagos</div>
          </div>

        </div>

        <div className="flex flex-grow">Hello</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Heading />
      <div>Mission</div>
      <div>Revise and Review</div>
      <div>FAQ</div>
      <div>Footer</div>
    </div>
  );
}
