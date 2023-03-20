import { Link } from "react-router-dom";
import {
  Anchor,
  Navbar as MantineNavbar,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import PropTypes from "prop-types";

import { ColorSchemeToggle } from "@/components";

export const Navbar = ({ isOpened }) => {
  const { colors } = useMantineTheme();

  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!isOpened}
      width={{ sm: 100 }}
      bg={colors.bg1}
      sx={{ borderColor: colors.bg0 }}
    >
      <MantineNavbar.Section grow>
        <Stack>
          <Anchor component={Link} variant="link" to="/" color={colors.text1}>
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
      </MantineNavbar.Section>
      <MantineNavbar.Section>
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
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

Navbar.propTypes = { isOpened: PropTypes.bool };
