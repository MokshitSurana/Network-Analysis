import React from "react";

type Props = {};

const Article = (props: Props) => {
  return (
    <div className="my-card h-48 p-4 gap-4">
      <div className="grid grid-cols-2">
        <div className="article text-green text-2xl"> hi</div>
        <div className="reccom w-1">hi</div>
      </div>
    </div>
  );
};

export default Article;
