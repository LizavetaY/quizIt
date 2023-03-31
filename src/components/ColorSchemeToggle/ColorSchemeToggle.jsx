import {
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

export const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const { colors } = useMantineTheme();

  return (
    <ActionIcon
      variant="transparent"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {isDark ? (
        <IconSun size={24} color={colors.textLogo} />
      ) : (
        <IconMoonStars size={24} color={colors.textLogo} />
      )}
    </ActionIcon>
  );
};
