import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();

  return (
    <>
      <div>{params.id}</div>
      <div>{params.name}</div>
    </>
  );
};

export default Post;
