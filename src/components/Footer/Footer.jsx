import { Footer as MantineFooter, Text, useMantineTheme } from "@mantine/core";

export const Footer = () => {
  const { colors } = useMantineTheme();

  return (
    <MantineFooter
      height={60}
      p="md"
      bg={colors.bg1}
      sx={{ borderColor: colors.bg0 }}
    >
      <Text fz="sm" ta="center" color={colors.text1}>
        Build with love by Liza, Kate and Mick 🙂 2023
      </Text>
    </MantineFooter>
  );
};
