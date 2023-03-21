import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

export const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    // defaultValue: "dark",
  });

  const toggleColorScheme = () =>
    setColorScheme((current) => (current === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const isDark = colorScheme === "dark";

  const darkViolet = "#200034",
    white = "#FFFFFF",
    middleViolet = "#45377d",
    lightViolet = "#cfc7e7",
    darkYellow = "#fcc826",
    lightYellow = "#f6d964",
    darkText = "#4F4284",
    lightGrey = "#a79fb8",
    violet2 = "#D0BFFF",
    violet7 = "#7048E8",
    orange4 = "#FFA94D",
    orange7 = "#F76707",
    green6 = "#40C057",
    green9 = "#2B8A3E",
    red6 = "#FA5252",
    red9 = "#C92A2A",
    yellow6 = "#FAB005",
    yellow8 = "#F08C00";

  const bg0 = isDark ? darkViolet : white; //dark bg
  const bg1 = isDark ? middleViolet : lightViolet; //middle bg
  const btnBg0 = isDark ? violet7 : violet2; //button main bg
  const btnBg1 = isDark ? orange7 : orange4; //button additional bg
  const btnBg2 = isDark ? green9 : green6; //button success bg
  const btnBg3 = isDark ? red9 : red6; //button danger bg
  const btnBorder0 = isDark ? yellow8 : yellow6; //button chosen answer border
  const bgHeader = isDark ? darkYellow : middleViolet;
  const textLogo = isDark ? middleViolet : darkYellow;
  const text0 = isDark ? white : darkText; // dark text
  const text1 = isDark ? white : middleViolet; //middle text
  const text2 = isDark ? lightYellow : lightGrey; //secondary text
  const text3 = isDark ? middleViolet : middleViolet; // bth hover text

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            bg0,
            bg1,
            btnBg0,
            btnBg1,
            btnBg2,
            btnBg3,
            btnBorder0,
            bgHeader,
            textLogo,
            text0,
            text1,
            text2,
            text3,
          },
          defaultGradient: { from: bg0, to: bg1, deg: 180 },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
