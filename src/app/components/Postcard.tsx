import React from "react";

interface PostCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const PostCard = ({onClick}: PostCardProps): JSX.Element => {
  return (
    <div onClick={onClick} className="flex flex-col cursor-pointer h-full bg-cardBackground overflow-hidden rounded-lg">
      <div className="bg-red-400 flex-grow" style={{minHeight: "9rem"}}></div>
      <div className="flex flex-col gap-1 p-3">
        <h3 className="font-semibold text-md">Mask Pencil Vertical</h3>
        <p className="text-sm">
          Proofreading is the final stage of the editing process,
          focusing on surface errors such as misspellings and mistakes
          in grammar and punctuation.
        </p>
        <p className="pt-2 text-sm text-backgroundBlack">17/09/2023</p>
      </div>
    </div>
  );
}
export default PostCard;
