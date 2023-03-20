import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Anchor,
  AppShell,
  Footer,
  Navbar,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";

import { ColorSchemeToggle, Header } from "@/components";

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
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!isOpened}
          width={{ sm: 100 }}
          bg={colors.bg1}
          sx={{ borderColor: colors.bg0 }}
        >
          <Navbar.Section grow>
            <Stack>
              <Anchor
                component={Link}
                variant="link"
                to="/"
                color={colors.text1}
              >
                Home
              </Anchor>
              <Anchor
                component={Link}
                variant="link"
                to="/login"
                color={colors.text1}
              >
                Login
              </Anchor>
            </Stack>
          </Navbar.Section>
          <Navbar.Section>
            <Stack align="center">
              <Anchor
                component={Link}
                variant="link"
                to="/settings"
                color={colors.text1}
              >
                Settings
              </Anchor>
              <ColorSchemeToggle />
            </Stack>
          </Navbar.Section>
        </Navbar>
      }
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
