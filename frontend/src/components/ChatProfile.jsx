import React from "react";
import { TbMessage } from "react-icons/tb";

function ChatProfile() {
  const avater =
    "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg";
  return (
    <div className="flex justify-between items-center hover:bg-pink-100 px-1 rounded-lg">
      <div className="flex items-center py-0.5">
        <img className="w-10 h-10 rounded-full" src={avater} alt="" />
        <div className="font-medium text-gray-500 dark:text-white">
          <div>Jese Leos</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Joined in August 2014
          </div>
        </div>
      </div>
      <div>
        <TbMessage style={{ fontSize: "1.8rem", color: "gray" }} />
      </div>
    </div>
  );
}

export default ChatProfile;
