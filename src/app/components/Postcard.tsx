import React from "react";






interface PostProps {
    title: string;
    description: string;
    onClick: () => void;
  }
  
  const Post = ({onClick}: PostProps): JSX.Element => {
    return (
      <div onClick={onClick} className="flex flex-col cursor-pointer h-96 bg-cardBackground overflow-hidden rounded-lg">
        <div className=" bg-red-400 pb-40"></div>
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
    );
  }
  export default Post;