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
      <div className="flex px-20 gap-2" style={{ height: "86vh" }}>
        <div className="bg-blue-400 flex-grow h-full">
        <div className="flex flex-col cursor-pointer h-full bg-cardBackground overflow-hidden rounded-lg">
        <div className="flex-grow bg-red-400 "></div>
        <div className="flex flex-col gap-1 p-4">
          <h3 className="font-semibold text-lg">Mask Pencil Vertical</h3>
          <p>
            Proofreading is the final stage of the editing process,
            focusing on surface errors such as misspellings and mistakes
            in grammar and punctuation.
          </p>
          <p className="pt-2">17/09/2023</p>
        </div>
      </div>
        </div>

        <div className=" w-80 flex flex-col gap-2">
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
