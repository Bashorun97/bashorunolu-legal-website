"use client";

import React from "react";
import Footer from "../footer";
import Navbar from "../components/NavBar";
import Postcard from "../components/Postcard";

const Page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex px-20 gap-3">
        <div className="flex-grow min-h-fit">
          <Postcard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
        </div>

        <div className="flex flex-col gap-3" style={{width: "22rem"}}>
          <Postcard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <Postcard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 my-20 px-20">
        <h4 className="text-lg">Other Posts</h4>
        <div className="grid grid-cols-3 gap-4 ">
          <Postcard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <Postcard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <Postcard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <Postcard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <Postcard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <Postcard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <Postcard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <Postcard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <Postcard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
