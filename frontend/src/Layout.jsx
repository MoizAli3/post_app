import SideBar from "./components/SideBar";
import { Link, Outlet } from "react-router";

function Layout() {
  return (
    <>
      <SideBar>
        <Outlet />
      </SideBar>
    </>
  );
}

export default Layout;
