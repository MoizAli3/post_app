import React, { Children } from "react";
import { AppShell, Burger, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconInfoOctagon } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";


function Navbar() {
  const [opened, { toggle }] = useDisclosure();

  const NavbarItems = ["home", "about", "contact"];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <h1 className="text-lg md:text-2xl text-blue-800 font-bold">
            DASHBOARD
          </h1>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {NavbarItems.map((item, index) => (
          <NavLink
            key={index}
            to="/"
            label={item.charAt(0).toUpperCase() + item.slice(1)}
            leftSection={<IconInfoOctagon size="1rem" stroke={1.5} />}
          />
        ))}

        {/* <Button color="ocean-blue">Ocean blue button</Button> */}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default Navbar;
