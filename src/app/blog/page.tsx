"use client";

import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/NavBar";
import PostCard from "../components/Postcard";
import TopPost from "../components/TopPost";

const Page = () => {
  return (
    <div>
      <div className="px-20 pb-20 pt-2 bg-blogHeadingBg">
        <Navbar />
        <h1 className="text-white font-extrabold text-6xl py-5">Blog</h1>
        <h4 className="text-primary font-extrabold text-2xl pt-2">Top Post</h4>
      

      <div className="flex  gap-3 pt-4">
        
        <div className="flex-grow min-h-fit">
          <TopPost
            title="Top"
            description="posts"
            onClick={() => console.log("these are the cards ")}
          />
        </div>

        <div className="flex flex-col gap-3" style={{width: "22rem"}}>
          <TopPost
            title="Top"
            description="posts"
            onClick={() => console.log("these are the cards ")}
          />
          <TopPost
            title="Top"
            description="posts"
            onClick={() => console.log("these are the cards ")}
          />
        </div>
      </div>
      </div>

      <div className="flex flex-col gap-2 my-20 px-20">
        <h4 className="text-lg">Other Posts</h4>
        <div className="grid grid-cols-3 gap-4 ">
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
            title="card"
            description="post cards"
            onClick={() => console.log("these are the cards ")}
          />
          <PostCard
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
