"use client";

import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/NavBar";
import PostCard from "../components/Postcard";
import TopPost from "../components/TopPost";
import BlogPost from "../components/TopPost";
import Blog from "../../assets/Blog.png";
import Blog1 from "../../assets/Blog1.png";
import Blog2 from "../../assets/Blog2.png";
import { IBlog, fetchBlogs } from "@/src/repository/blog";

const Page = () => {
  const [blogPosts, setBlogPosts] = React.useState<IBlog[] | null>(null);

  React.useEffect(() => {
    (async () => {
      const res = await fetchBlogs();
      setBlogPosts(res);
    })();
  }, []);

  return (
    <div className="bg-white">
      <div className="px-2 md:px-20 pb-20 pt-2 bg-blogHeadingBg">
        <Navbar />
        <h1 className="text-white font-extrabold text-6xl py-5">Blog</h1>
        <h4 className="text-primary font-extrabold text-2xl pt-2">Top Post</h4>

        <div className="flex gap-3">
          <div className="flex-grow h-full " style={{}}>
            <BlogPost
              image={Blog}
              title="Top"
              route="/blog/1"
              description="posts"
            />
          </div>

          <div
            className="hidden lg:flex flex-col   gap-3"
            style={{ width: "22rem" }}
          >
            <TopPost
              image={Blog1}
              title="Top"
              route="/blog/1"
              description="posts"
            />
            <TopPost
              image={Blog2}
              title="Top"
              route="/blog/1"
              description="posts"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 my-10 px-2 md:px-20">
        <h4 className="text-2xl font-semibold">Other Posts</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {blogPosts?.map((item, index) => (
            <PostCard
              key={index}
              image={Blog2}
              title={item.title}
              route={`/blog/${item._id}`}
              description={item.description}
            />
          ))}

          <PostCard
            image={Blog2}
            title="card"
            route="/blog/1"
            description="post cards"
          />
          <PostCard
            image={Blog2}
            title="card"
            route="/blog/1"
            description="post cards"
          />
          <PostCard
            image={Blog2}
            title="card"
            route="/blog/1"
            description="post cards"
          />
          <PostCard
            image={Blog2}
            title="card"
            route="/blog/1"
            description="post cards"
          />
          <PostCard
            image={Blog2}
            title="card"
            route="/blog/1"
            description="post cards"
          />
          <PostCard
            image={Blog2}
            title="card"
            route="/blog/1"
            description="post cards"
          />
          <PostCard
            image={Blog2}
            title="card"
            route="/blog/1"
            description="post cards"
          />
          <PostCard
            image={Blog2}
            title="card"
            route="/blog/1"
            description="post cards"
          />
          <PostCard
            image={Blog2}
            title="card"
            route="/blog/1"
            description="post cards"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
