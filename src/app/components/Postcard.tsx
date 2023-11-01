import React from "react";

import {useRouter, usePathname} from "next/navigation";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface PostCardProps {
  title: string;
  route?: string;
  description: string;
  image: StaticImageData;
}

const PostCard = ({route = "/blog/1" , title, description,image}: PostCardProps): JSX.Element => {

  const router = useRouter();

  const onClick = () => {
    router.push(route);
  }

  return (
    <div onClick={onClick} className="flex flex-col cursor-pointer h-full bg-cardBackground overflow-hidden rounded-lg">
      <div className=" flex-grow" style={{minHeight: "15rem"}}>
      <Image src={image} alt={title } className="" style={{
            minHeight: "35vh"
          }}/>
      </div>
      <div className="flex flex-col gap-1 p-3">
        <h3 className="font-semibold text-md">Mask Pencil Vertical</h3>
        <p className="text-sm">
          Proofreading is the final stage of the editing process,
          focusing on surface errors such as misspellings and mistakes
          in grammar and punctuation.
        </p>
        <p className="mt-8 text-sm">17/09/2023</p>
      </div>
    </div>
  );
}
export default PostCard;
