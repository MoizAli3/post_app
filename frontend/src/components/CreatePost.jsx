import { useState, useCallback } from "react";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { BsEmojiSmile } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { avater } from "../costant/constant";

function CreatePost() {
  const [state, setState] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Filter valid file types
      const validTypes = [
        "image/svg+xml",
        "image/png",
        "image/jpeg",
        "image/gif",
      ];
      const validFiles = acceptedFiles.filter((file) =>
        validTypes.includes(file.type)
      );
      setState([...state, ...validFiles]);

      acceptedFiles.map((item) => {
        console.log(item.name);
      });
    },
  });

  // Function to remove an image from state
  const removeImage = (indexToRemove) => {
    setState(state.filter((_, index) => index !== indexToRemove));
  };
  const [value, setValue] = useState(false);

  const dropzoneHandler = () => {
    setValue(!value);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    console.log(data);
    formData.append("file", data.file);
    console.log(formData);
  };

  return (
    <>
      <form className="mx-auto mt-4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <CiSearch style={{ fontSize: "1.2rem", color: "gray" }} />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-91 md:w-2xl p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-400 focus:border-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Something here...."
          required=""
        />
      </form>
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative flex flex-col w-90 md:w-2xl my-6 py-2 bg-white shadow-sm border border-slate-200 rounded-lg">
          <div className="relative m-2.5 overflow-hidden text-white rounded-md">
            <div className="flex items-center gap-4">
              <img className="w-15 h-15 rounded-full" src={avater} alt="" />
              <div className="font-medium w-full dark:text-white">
                <input
                  type="content"
                  id="content"
                  className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-400 focus:border-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="What's happenning"
                  required=""
                  {...register("content")}
                />
              </div>
            </div>
          </div>
          <div>
            {value && (
              <div>
                {state && state.length > 0 ? (
                  <div className="grid grid-cols-2 flex-wrap items-center justify-center w-full">
                    {state.map((file, index) => {
                      const validTypes = [
                        "image/svg+xml",
                        "image/png",
                        "image/jpeg",
                        "image/gif",
                      ];
                      if (!validTypes.includes(file.type)) {
                        return (
                          <p key={index} className="text-red-500 text-sm">
                            Invalid file type for {file.name}. Please upload
                            SVG, PNG, JPG, or GIF.
                          </p>
                        );
                      }
                      return (
                        <div key={index} className="relative p-3 inline-block">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="w-xl"
                            onLoad={(e) => {
                              // Clean up URL after image loads
                              URL.revokeObjectURL(e.target.src);
                            }}
                          />
                          <button
                            onClick={() => removeImage(index)}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                            aria-label={`Remove ${file.name}`}
                          >
                            &times;
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div
                    className="flex p-3 items-center justify-center w-full"
                    {...getRootProps()}
                  >
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
                          {isDragActive ? (
                            <span className="font-semibold">
                              Drop the files here ...
                            </span>
                          ) : (
                            <span className="font-semibold">
                              Drag 'n' drop some files here, or click to select
                              files
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        {...getInputProps()}
                      />
                    </label>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4">
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
                className="rounded-md bg-pink-400 py-2 px-8 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreatePost;
