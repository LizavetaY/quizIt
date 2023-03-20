import {
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

export const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { colors } = useMantineTheme();

  return (
    <ActionIcon
      variant="outline"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      sx={{ borderColor: colors.bgHeader }}
    >
      {dark ? (
        <IconSun size="1.2rem" color={colors.bgHeader} />
      ) : (
        <IconMoonStars size="1.1rem" color={colors.bgHeader} />
      )}
    </ActionIcon>
  );
};