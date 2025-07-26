import { useState } from "react";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { BsEmojiSmile } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { avater, baseURL } from "../costant/constant";
import { Text, AppShell, Image, SimpleGrid } from "@mantine/core";
import axios from "axios";
import { toast } from "react-toastify";

function CreatePost() {
  const [files, setFiles] = useState([]);
  //  const [state , setState] = useState();

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  });

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

  const onSubmit = async (data) => {
    await axios
      .post(`${baseURL}v1/users/login`, {  })
      .then(() => {
        toast.success("Uploaded successfully");
      })
      .catch(function (error) {
        toast.error();
        console.log(error.message);
      });
    // Here you can handle the form submission, e.g., send data and files to the server
  };

  return (
    <AppShell>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative flex flex-col w-90 md:w-2xl py-2 bg-white shadow-sm border border-slate-200 rounded-lg">
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
            <div></div>
            {value && (
              <>
                <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
                  <Text ta="center">Drop images here</Text>
                </Dropzone>

                <SimpleGrid
                  cols={{ base: 1, sm: 4 }}
                  mt={previews.length > 0 ? "xl" : 0}
                  className="m-4"
                >
                  {previews}
                </SimpleGrid>
              </>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4 ">
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
    </AppShell>
  );
}

export default CreatePost;
