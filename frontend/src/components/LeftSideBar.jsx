import MenuList from "./MenuList";
import { GoHome, GoPeople } from "react-icons/go";
import { CiGrid41, CiBookmark, CiSettings, CiLogout } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";
import { TbLocationShare } from "react-icons/tb";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { AppShell, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function LeftSideBar() {
  const { handleLogoutUser } = useContext(UserContext);
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <AppShell
        padding="md"
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
      >
        <AppShell.Header >
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            className="m-3"
          />
        </AppShell.Header>

        <AppShell.Navbar className="space-y-2">
          <NavLink
            to="/"
            label="Feed"
            leftSection={<GoHome size={26} stroke={1.5} color={"gray"} />}
            styles={{ label: { fontSize: "1rem", color: "gray" } }}
            
          />
          <NavLink
            to="/"
            label="Explore"
            leftSection={<CiGrid41 size={26} stroke={1.5} color={"gray"} />}
            styles={{ label: { fontSize: "1rem", color: "gray" } }}
          />
          <NavLink
            to="/"
            label="Marketplace"
            leftSection={
              <CgShoppingBag size={26} color={"gray"} />
            }
            styles={{ label: { fontSize: "1rem", color: "gray" } }}
          />
          <NavLink
            to="/"
            label="Groups"
            leftSection={<GoPeople size={26}  color={"gray"} />}
            styles={{ label: { fontSize: "1rem", color: "gray" } }}
          />
          <NavLink
            to="/"
            label="My favorities"
            leftSection={<CiBookmark size={26} color={"gray"} />}
            styles={{ label: { fontSize: "1rem", color: "gray" } }}
          />
          <NavLink
            to="/"
            label="Messages"
            leftSection={<TbLocationShare size={26} color={"gray"} />}
            styles={{ label: { fontSize: "1rem", color: "gray" } }}
          />
          <NavLink
            to="/"
            label="Settings"
            leftSection={<CiSettings size={26} color={"gray"} />}
            styles={{ label: { fontSize: "1rem", color: "gray" } }}
          />
          <NavLink
            to="/"
            label="Logout"
            leftSection={<CiLogout size={26} color={"gray"} />}
            styles={{ label: { fontSize: "1rem", color: "gray" } }}
            onClick={handleLogoutUser}
          />
        </AppShell.Navbar>
      </AppShell>
    </>
  );
}

export default LeftSideBar;
