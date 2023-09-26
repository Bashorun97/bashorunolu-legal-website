import React from "react";

interface TopPostProps {
  title: string;
  description: string;
  onClick: () => void;
}

const TopPost = ({onClick}: TopPostProps): JSX.Element => {
  return (
    <div onClick={onClick} className="flex flex-col cursor-pointer h-full  bg-topPosts border-none overflow-hidden rounded-lg">
      <div className="bg-red-400 flex-grow" style={{minHeight: "9rem"}}></div>
      <div className="flex flex-col gap-1 justify-between p-3 text-white" style={{
        minHeight: "9rem",
      }}>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-md">Mask Pencil Vertical</h3>
          <p className="text-sm">
            Proofreading is the final stage of the editing process,
            focusing on surface errors such as misspellings and mistakes
            in grammar and punctuation.
          </p>
        </div>
        <p className="text-sm">17/09/2023</p>
      </div>
    </div>
  );
}
export default TopPost;
