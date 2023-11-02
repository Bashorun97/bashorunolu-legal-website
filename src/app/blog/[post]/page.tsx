"use client";

import React from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import PostCard from "../../components/Postcard";
import Footer from "../../components/footer";
import Blog from "../../../assets/Blog.png";
import Blog2 from "../../../assets/Blog2.png";

const Effctive = () => {

  return (
    <div>
      <div className="px-20 py-4 pb-7 flex flex-col gap-8 bg-blogHeadingBg">
        <NavBar />
        <h1 className="text-white font-extrabold text-6xl">Blog Post</h1>
      </div>
      <div className="flex flex-col gap-5 py-8 text-center">
        <h2 className="text-3xl font-bold">Effective Subtract Fill</h2>
        <p className="text-lg">21/09/2023</p>
      </div>

      <div className=" my-8 mx-20">
        <Image src={Blog} alt="A car" className="w-full rounded-md" />
      </div>

      <div>
        <p className="px-80">
          Design comps, layouts, wireframes—will your clients accept that you go
          about things the facile way? Authorities in our business will tell in
          no uncertain terms that Lorem Ipsum is that huge, huge no no to
          forswear forever. <br /> <br />
          Not so fast, I&apos;d say, there are some redeeming factors in favor
          of greeking text, as its use is merely the symptom of a worse problem
          to take into consideration.
          <br /> <br />
          The toppings you may chose for that TV dinner pizza slice when you
          forgot to shop for foods, the paint you may slap on your face to
          impress the new boss is your business. But what about your daily
          bread?
        </p>
      </div>

      <div className=" my-8 mx-40 ">
        <Image src={Blog} alt="A car" className="w-full rounded-md" />
      </div>

      <div className="px-80">
        <p>
          The toppings you may chose for that TV dinner pizza slice when you
          forgot to shop for foods, the paint you may slap on your face to
          impress the new boss is your business. But what about your daily
          bread? Not so fast, I&apos;d say, there are some redeeming factors in
          favor of greeking text, as its use is merely the symptom of a worse
          problem to take into consideration.
          <br /> <br />
          Design comps, layouts, wireframes—will your clients accept that you go
          about things the facile way? Authorities in our business will tell in
          no uncertain terms that Lorem Ipsum is that huge, huge no no to
          forswear forever.
        </p>

        <p className="font-bold text-2xl border-l-8 border-gray-700 pl-3 my-4">
          Design comps, layouts, wireframes—we believe that clients will surely
          accept that you go about things the facile way. It’s a matter of time.
        </p>

        <p>
          Design comps, layouts, wireframes—will your clients accept that you go
          about things the facile way? Authorities in our business will tell in
          no uncertain terms that Lorem Ipsum is that huge, huge no no to
          forswear forever. <br /> <br />
          The toppings you may chose for that TV dinner pizza slice when you
          forgot to shop for foods, the paint you may slap on your face to
          impress the new boss is your business. But what about your daily
          bread? Not so fast, I&apos;d say, there are some redeeming factors in
          favor of greeking text, as its use is merely the symptom of a worse
          problem to take into consideration.
          <br /> <br />
          Not so fast, I&apos;d say, there are some redeeming factors in favor
          of greeking text, as its use is merely the symptom of a worse problem
          to take into consideration.
          <br /> <br />
          Design comps,uts, wireframes—will your clients accept that you go
          about things the facile way? Authorities in our business will tell in
          no uncertain terms that Lorem Ipsum is that huge, huge no no to
          forswear forever.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-4 my-20 px-20">
          <h4 className="text-2xl font-bold">Related Posts</h4>
          <div className="grid grid-cols-3 gap-4">
            <PostCard
              image={Blog2}
              title="cards"
              description="post cards"
              route="/blog/effective-subtract-fill"
            />
            <PostCard
              image={Blog2}
              title="card"
              description="post cards"
              route="/blog/effective-subtract-fill"
            />
            <PostCard
              image={Blog2}
              title="card"
              description="post cards"
              route="/blog/effective-subtract-fill"
            />
            <PostCard
              image={Blog2}
              title="card"
              description="post cards"
              route="/blog/effective-subtract-fill"
            />
            <PostCard
              image={Blog2}
              title="card"
              description="post cards"
              route="/blog/effective-subtract-fill"
            />
            <PostCard
              image={Blog2}
              title="card"
              description="post cards"
              route="/blog/effective-subtract-fill"
            />
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Effctive;
