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

export const Header = ({ toggleMenu, toggleBurger, isOpened }) => {
  const { colors } = useMantineTheme();

  return (
    <MantineHeader
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
            sx={{ fontWeight: "600" }}
          />
        </MediaQuery>
        <Text
          component={Link}
          variant="link"
          to="/"
          fz="xl"
          fw={700}
          color={colors.textLogo}
        >
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
    </MantineHeader>
  );
};

Header.propTypes = {
  toggleMenu: PropTypes.func,
  toggleBurger: PropTypes.func,
  isOpened: PropTypes.bool,
};
