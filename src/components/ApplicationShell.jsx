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
  IconMoon,
  IconSettings,
  IconSunFilled,
  IconSwitchHorizontal,
  IconUserCircle,
} from "@tabler/icons-react";
import { useState } from "react";
import { DemoComponent } from "./DemoComponent/DemoComponent";

export const ApplicationShell = () => {
  const theme = useMantineTheme();
  const [isOpened, setIsOpened] = useState(false);
  const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);

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
                onClick={() => setIsOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text fz="xl" fw={700}>
              QuizIt
            </Text>
            <Menu
              width={260}
              position="bottom-end"
              transitionProps={{ transition: "pop-top-right" }}
              onClose={() => setIsUserMenuOpened(false)}
              onOpen={() => setIsUserMenuOpened(true)}
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
            <Stack align="center">
              <UnstyledButton>Home</UnstyledButton>
            </Stack>
          </Navbar.Section>
          <Navbar.Section>
            <Stack align="center">
              <UnstyledButton>Settings</UnstyledButton>
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
      <DemoComponent />
    </AppShell>
  );
};
