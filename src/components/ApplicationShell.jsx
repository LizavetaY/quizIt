import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppShell, Footer, Text, useMantineTheme } from "@mantine/core";

import { Header, Navbar } from "@/components";

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
      navbar={<Navbar isOpened={isOpened} />}
      footer={
        <Footer
          height={60}
          p="md"
          bg={colors.bg1}
          sx={{ borderColor: colors.bg0 }}
        >
          <Text fz="sm" ta="center" color={colors.text1}>
            Build with love by Liza, Kate and Mick 🙂 2023
          </Text>
        </Footer>
      }
    >
      <Outlet />
    </AppShell>
  );
};
