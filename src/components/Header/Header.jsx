import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Burger,
  Header as MantineHeader,
  MediaQuery,
  Menu,
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
import PropTypes from "prop-types";

export const Header = ({ toggleBurger, isOpened }) => {
  const [, setIsUserMenuOpened] = useState(false);

  const { colors } = useMantineTheme();

  const toggleMenu = () => setIsUserMenuOpened((bool) => !bool);

  return (
    <MantineHeader height={{ base: 50, md: 70 }} p="xl" sx={{ border: "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger opened={isOpened} onClick={toggleBurger} />
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
              <IconUserCircle color={colors.textLogo} />
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
    </MantineHeader>
  );
};

Header.propTypes = {
  toggleBurger: PropTypes.func,
  isOpened: PropTypes.bool,
};
