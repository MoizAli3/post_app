import React from "react";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";


function Home() {
  return (
    <>
      <CreatePost />
      <Post />
    </>
  );
}

export default Home;
