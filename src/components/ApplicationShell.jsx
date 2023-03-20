import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
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
  IconMoon,
  IconSettings,
  IconSunFilled,
  IconSwitchHorizontal,
  IconUserCircle,
} from "@tabler/icons-react";

export const ApplicationShell = ({ children }) => {
  const theme = useMantineTheme();
  const [isOpened, setIsOpened] = useState(false);
  const [, setIsUserMenuOpened] = useState(false);

  const toggleMenu = () => setIsUserMenuOpened((bool) => !bool);
  const toggleBurger = () => setIsOpened((bool) => !bool);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
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
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text component={Link} variant="link" to="/">
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
                  <IconUserCircle />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
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
          width={{ sm: 120 }}
        >
          <Navbar.Section grow>
            <Stack>
              <Anchor component={Link} variant="link" to="/">
                Home
              </Anchor>
              <Anchor component={Link} variant="link" to="/login">
                Login
              </Anchor>
            </Stack>
          </Navbar.Section>
          <Navbar.Section>
            <Stack align="center">
              <Anchor component={Link} variant="link" to="/settings">
                Settings
              </Anchor>
              <UnstyledButton>
                <IconSunFilled />
                <IconMoon />
              </UnstyledButton>
            </Stack>
          </Navbar.Section>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          <Text fz="sm" ta="center">
            Build with love by Liza, Kate and Mick 🙂 2023
          </Text>
        </Footer>
      }
    >
      {children}
    </AppShell>
  );
};
