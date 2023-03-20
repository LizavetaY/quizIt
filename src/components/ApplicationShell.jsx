import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppShell, useMantineTheme } from "@mantine/core";

import { Footer, Header, Navbar } from "@/components";

export const ApplicationShell = () => {
  const { fn, colors } = useMantineTheme();

  const [isOpened, setIsOpened] = useState(false);
  const [, setIsUserMenuOpened] = useState(false);

  const toggleMenu = () => setIsUserMenuOpened((bool) => !bool);
  const toggleBurger = () => setIsOpened((bool) => !bool);

  return (
    <AppShell
      sx={{
        backgroundImage: fn.gradient(),
      }}
      header={
        <Header
          toggleMenu={toggleMenu}
          toggleBurger={toggleBurger}
          isOpened={isOpened}
        />
      }
      navbarOffsetBreakpoint="sm"
      footer={<Footer />}
    >
      <Outlet />
    </AppShell>
  );
};
