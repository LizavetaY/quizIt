import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppShell, useMantineTheme } from "@mantine/core";

import { Footer, Header, Navbar } from "@/components";

export const ApplicationShell = () => {
  const [isOpened, setIsOpened] = useState(false);

  const { fn } = useMantineTheme();

  const toggleBurger = () => setIsOpened((bool) => !bool);

  return (
    <AppShell
      sx={{
        backgroundImage: fn.gradient(),
      }}
      header={<Header toggleBurger={toggleBurger} isOpened={isOpened} />}
      navbar={<Navbar isOpened={isOpened} />}
      navbarOffsetBreakpoint="sm"
      footer={<Footer />}
    >
      <Outlet />
    </AppShell>
  );
};
