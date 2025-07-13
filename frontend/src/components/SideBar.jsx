import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";


// import { icon } from "../assets/icon.png"

export default function SideBar({ children }) {
 
  return (
    <>
      <LeftSideBar />
      <div className="p-4 sm:ml-64 bg-gray-100">{children}</div>
      <RightSideBar />
    </>
  );
} 
