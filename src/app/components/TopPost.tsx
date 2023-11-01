import React from "react";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface TopPostProps {
  title: string;
  route?: string;
  description: string;
  image: StaticImageData;
}

const TopPost = ({
  route = "/blog/1",
  title,
  description,
  image,
}: TopPostProps): JSX.Element => {
  const router = useRouter();

  const onClick = () => {
    router.push(route);
  };

  return (
    <div
      onClick={onClick}
      className="flex flex-col cursor-pointer h-full  bg-topPosts border-none overflow-hidden rounded-lg"
    >
      <div className=" flex-grow" style={{ minHeight: "9rem" }}>
        <Image
          src={image}
          alt={title}
          className=""
          style={{
            minHeight: "35vh",
          }}
        />
      </div>
      <div
        className="flex flex-col gap-1 justify-between p-3 text-white"
        style={{
          minHeight: "9rem",
        }}
      >
        <div className="flex flex-col  gap-1">
          <h3 className="font-semibold -mt-7 text-md">Mask Pencil Vertical</h3>
          <p className="text-sm">
            Proofreading is the final stage of the editing process, focusing on
            surface errors such as misspellings and mistakes in grammar and
            punctuation.
          </p>
        </div>
        <p className="text-sm ">17/09/2023</p>
      </div>
    </div>
  );
};
export default TopPost;

interface BlogPostProps {
  title: string;
  route?: string;
  description: string;
  image: StaticImageData;
}

export const BlogPost = ({
  route = "/blog/1",
  title,
  description,
  image,
}: BlogPostProps): JSX.Element => {
  const router = useRouter();

  const onClick = () => {
    router.push(route);
  };

  return (
    <div
      onClick={onClick}
      className="flex flex-col cursor-pointer h-full w-full  bg-topPosts border-none overflow-hidden rounded-lg"
    >
      <div className=" flex-grow">
        <Image
          src={image}
          alt={title}
          className="h-full w-full"
          style={{
            width: "500",
            height: "500",
          }}
        />
      </div>
      <div
        className="flex flex-col gap-1 justify-between p-3 text-white"
        style={{}}
      >
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-md">Mask Pencil Vertical</h3>
          <p className="text-sm">
            Proofreading is the final stage of the editing process, focusing on
            surface errors such as misspellings and mistakes in grammar and
            punctuation.
          </p>
        </div>
        <p className="text-sm">17/09/2023</p>
      </div>
    </div>
  );
};
