import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

export const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "dark",
  });

  const toggleColorScheme = () =>
    setColorScheme((current) => (current === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const dark = colorScheme === "dark";

  const darkViolet = "#200034",
    white = "#FFFFFF",
    middleViolet = "#45377d",
    lightViolet = "#cfc7e7",
    darkYellow = "#fcc826",
    lightYellow = "#f6d964",
    darkText = "#4F4284",
    lightGrey = "#a79fb8",
    darkOrange = "#e77817",
    lightOrange = "#ff8f00",
    darkRed = "#ad2929",
    lightRed = "#e84541",
    darkBlue = "#00589b",
    lightBlue = "#2bcbff",
    darkGreen = "#4e8e1a",
    lightGreen = "#85bd24";

  const bg0 = dark ? darkViolet : white; //dark bg
  const bg1 = dark ? middleViolet : lightViolet; //middle bg
  const bgHeader = dark ? darkYellow : middleViolet;
  const textLogo = dark ? middleViolet : darkYellow;
  const text0 = dark ? white : darkText; // dark text
  const text1 = dark ? white : middleViolet; //middle text
  const text2 = dark ? lightYellow : lightGrey; //secondary text
  const yellow = dark ? darkYellow : lightYellow; //yellow dark->light theme
  const orange = dark ? darkOrange : lightOrange; //orange dark->light theme
  const red = dark ? lightRed : darkRed; //red dark->light theme
  const blue = dark ? lightBlue : darkBlue; //blue dark->light theme
  const green = dark ? lightGreen : darkGreen; //yellow dark->light theme

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
            bgHeader,
            textLogo,
            text0,
            text1,
            text2,
            yellow,
            orange,
            red,
            blue,
            green,
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
