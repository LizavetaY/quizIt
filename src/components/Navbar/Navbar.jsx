import { Link } from "react-router-dom";
import { Anchor, Navbar as MantineNavbar, Stack } from "@mantine/core";
import PropTypes from "prop-types";

import { ColorSchemeToggle } from "@/components";

export const Navbar = ({ isOpened }) => {
  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!isOpened}
      width={{ sm: 100 }}
    >
      <MantineNavbar.Section grow>
        <Stack align="center">
          <Anchor component={Link} variant="link" to="/">
            Home
          </Anchor>
          <Anchor component={Link} variant="link" to="/login">
            Login
          </Anchor>
        </Stack>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <Stack align="center">
          <Anchor component={Link} variant="link" to="/settings">
            Settings
          </Anchor>
          <ColorSchemeToggle />
        </Stack>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

Navbar.propTypes = { isOpened: PropTypes.bool };
