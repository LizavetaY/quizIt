import { useState } from "react";
import {
  AppShell,
  Burger,
  Footer,
  Header,
  MediaQuery,
  Menu,
  Navbar,
  Stack,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import {
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUserCircle,
} from "@tabler/icons-react";

import { ColorSchemeToggle } from "@/components/ColorSchemeToggle";
import { DemoComponent } from "@/components/DemoComponent/DemoComponent";

export const ApplicationShell = () => {
  const { colors } = useMantineTheme();
  const theme = useMantineTheme();

  const [isOpened, setIsOpened] = useState(false);
  const [, setIsUserMenuOpened] = useState(false);

  const toggleMenu = () => setIsUserMenuOpened((bool) => !bool);

  const toggleBurger = () => setIsOpened((bool) => !bool);

  return (
    <AppShell
      sx={{
        backgroundImage: theme.fn.gradient(),
      }}
      header={
        <Header
          height={{ base: 50, md: 70 }}
          p="xl"
          bg={colors.bgHeader}
          sx={{ border: "none" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={isOpened}
                onClick={toggleBurger}
                size="sm"
                color={colors.textLogo}
                mr="xl"
                sx={{ fontWeight: "600" }}
              />
            </MediaQuery>

            <Text fz="xl" fw={700} color={colors.textLogo}>
              QuizIt
            </Text>
            <Menu
              width={260}
              position="bottom-end"
              transitionProps={{ transition: "pop-top-right" }}
              onClose={toggleMenu}
              onOpen={toggleMenu}
              withinPortal
            >
              <Menu.Target>
                <UnstyledButton>
                  <IconUserCircle color={colors.textLogo} />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown bg={colors.bg1}>
                <Menu.Label>Settings</Menu.Label>
                <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
                  Account settings
                </Menu.Item>
                <Menu.Item
                  icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}
                >
                  Change account
                </Menu.Item>
                <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </Header>
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
            <Stack align="center">
              <UnstyledButton>
                <Text color={colors.text1}>Home</Text>
              </UnstyledButton>
            </Stack>
          </Navbar.Section>
          <Navbar.Section>
            <Stack align="center">
              <UnstyledButton>
                <Text color={colors.text2}>Settings</Text>
              </UnstyledButton>
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
      <DemoComponent />
    </AppShell>
  );
};
