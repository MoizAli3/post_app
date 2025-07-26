import { AppShell, AppShellAside, Flex, Burger } from "@mantine/core";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

// import { icon } from "../assets/icon.png"

export default function SideBar({ children }) {
  return (
    <>
      <AppShell>
        <AppShell.Header>
          <Burger
            // opened={opened}
            // onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            className="m-3"
          />
        </AppShell.Header>
        <LeftSideBar />
        <AppShell.Main>
          <Flex
            justify="flex-start"
            align="flex-start"
            direction="column"
            gap="lg"
          >
            {children}
          </Flex>
        </AppShell.Main>
        <RightSideBar />
      </AppShell>
    </>
  );
}
