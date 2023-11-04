import React from "react";

import Link from "next/link";
import Image from "next/image";


interface PostCardProps {
  title: string;
  image: string;
  route?: string;
  summary: string;
  dateCreated: Date;
}

const PostCard = ({ route = "/blog/1", title, summary, image, dateCreated }: PostCardProps): JSX.Element => {
  return (
    <Link href={route} className="flex flex-col cursor-pointer h-full bg-cardBackground overflow-hidden rounded-lg">
      <div className="" style={{ maxHeight: "30vh" }}>
        <Image src={image} alt={title} className="object-cover" width={400} height={500} style={{ width: "100%", maxHeight: "30vh" }} />
      </div>
      <div className="flex flex-col gap-1 p-3">
        <h3 className="font-semibold text-md">Mask Pencil Vertical</h3>
        <p className="text-sm">{summary}</p>
        <p className="mt-8 text-sm">{formatDate(dateCreated)}</p>
      </div>
    </Link>
  );
}

const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}



export default PostCard;
