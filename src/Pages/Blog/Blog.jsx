import React from "react";
import { useNavigation } from "react-router";
import { useLoaderData } from "react-router";
import "../../App.css";
import Post from "../../component/Post/Post";

const Blog = () => {
  const posts = useLoaderData();
  console.log(posts);

  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center gap-1 min-h-[300px]">
        <span className="loading loading-ball loading-xs text-[#176AE5]"></span>
        <span className="loading loading-ball loading-sm text-[#176AE5]"></span>
        <span className="loading loading-ball loading-md text-[#176AE5]"></span>
        <span className="loading loading-ball loading-lg text-[#176AE5]"></span>
        <span className="loading loading-ball loading-xl text-[#176AE5]"></span>
      </div>
    );
  }
  return (
    <>
      <div className="bg-[#EFEFEF] pb-20">
        <div className="py-10 text-center">
          <h1 className="font-plus-jakarta-sans text-3xl font-bold">Blogs</h1>
          <p className="my-8  text-[#847577] font-medium font-plus-jakarta-sans">
            Let's explore some basic concepts that will make you a good
            developer
          </p>
        </div>
        <div>
          {posts.map((post, idx) => (
            <Post key={idx} post={post}></Post>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
