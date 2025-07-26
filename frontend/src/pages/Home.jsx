import React from "react";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";
import TestingDiv from "../components/TestingDiv";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <>
      <SearchBar />
      <CreatePost />
      <Post />
    </>
  );
}

export default Home;
