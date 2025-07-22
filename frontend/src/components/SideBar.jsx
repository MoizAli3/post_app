import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";


// import { icon } from "../assets/icon.png"

export default function SideBar({ children }) {
 
  return (
    <>
      <LeftSideBar />
      <div className="flex flex-col items-center">{children}</div>
      <RightSideBar />
    </>
  );
} 
