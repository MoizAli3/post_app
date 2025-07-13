import { useState } from "react";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { BsEmojiSmile } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

function CreatePost() {
  const [value, setValue ] = useState(false);

  const dropzoneHandler = () => {
    setValue(!value);
  }

  const avater =
    "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg";
  return (
    <>
      <div className="font-medium w-full dark:text-white">
        <form className="mx-auto">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <CiSearch style={{ fontSize: "1.2rem", color: "gray" }} />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-72 md:w-xl p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-400 focus:border-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Something here...."
            required=""
          />
        </form>
      </div>
      <div class="relative flex flex-col w-90 md:w-2xl my-6 py-2 bg-white shadow-sm border border-slate-200 rounded-lg">
        <div class="relative m-2.5 overflow-hidden text-white rounded-md">
          <div className="flex items-center gap-4">
            <img className="w-15 h-15 rounded-full" src={avater} alt="" />
            <div className="font-medium w-full dark:text-white">
              <form className="mx-auto">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-400 focus:border-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="What's happenning"
                  required=""
                />
              </form>
            </div>
          </div>
        </div>
        <div>
          {value && (
            <div className="flex p-3 items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          )}
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div className="flex items-center text-gray-500 gap-1 justify-end">
            <div>
              <BsEmojiSmile style={{ fontSize: "1.2rem", color: "gray" }} />
            </div>
            <div className="text-md">Feelings</div>
          </div>
          <div
            className="flex items-center text-gray-500 gap-1 justify-end mr-5"
            onClick={dropzoneHandler}
          >
            <div>
              <TbPhotoSquareRounded
                style={{ fontSize: "1.2rem", color: "gray" }}
              />
            </div>
            <div className="text-md">Photos</div>
          </div>
          <div className="flex justify-end mr-5">
            <button
              class="rounded-md bg-pink-400 py-2 px-8 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
