import React from "react";
import { CiSearch, CiHeart, CiChat1 } from "react-icons/ci";
import { PiShareFatLight } from "react-icons/pi";
import { TbLocationShare } from "react-icons/tb";

function Post() {
  const avater =
    "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg";
  return (
    <>
      <div class="relative w-90 md:w-2xl flex flex-col my-6 py-3 bg-white shadow-sm border border-slate-200 rounded-lg ">
        <div>
          <div className="flex items-center gap-4 mx-3">
            <img className="w-10 h-10 rounded-full" src={avater} alt="" />
            <div className="font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-xxl m-2.5 overflow-hidden text-white rounded-md">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
            alt="card-image"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-gray-500 gap-1 justify-start ms-5">
            <div className="">
              <div className="flex -space-x-4 rtl:space-x-reverse">
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src={avater}
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src={avater}
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src={avater}
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src={avater}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex justify-around  items-center text-gray-500 gap-1">
            <div className="text-md">
              <span>5 </span> Comments
            </div>
            <div className="">
              <span>20 </span>Likes
            </div>
          </div>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2 space-y-2">
          <hr class="border-gray-300 border-1 dark:border-white"></hr>
          <div class="grid grid-cols-3  gap-4">
            <div className="flex items-center text-gray-500 gap-1 justify-center">
              <div>
                <CiHeart style={{ fontSize: "1.7rem", color: "gray" }} />
              </div>
              <div className="text-md">Like</div>
            </div>
            <div className="flex items-center text-gray-500 gap-1 justify-center">
              <div>
                <CiChat1 style={{ fontSize: "1.5rem", color: "gray" }} />
              </div>
              <div className="text-md">Comment</div>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center text-gray-500 gap-1 justify-center">
                <div>
                  <PiShareFatLight
                    style={{ fontSize: "1.5rem", color: "gray" }}
                  />
                </div>
                <div className="text-md">Share</div>
              </div>
            </div>
          </div>
          <hr class="border-gray-300 border-1 dark:border-white"></hr>
        </div>
        <div className="w-full flex justify-center gap-2">
          <div>
            <img className="w-10 h-10 rounded-full" src={avater} alt="" />
          </div>
          <div className="font-medium">
            <form className="mx-auto  md:w-xl flex items-center gap-3">
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-400 focus:border-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write a Comment...."
                required=""
              />
              <button className="bg-pink-100 rounded-lg p-3">
                <TbLocationShare
                  style={{ color: "#E75480", fontSize: "1rem" }}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
