import { ColorSchemeProvider, keyframes, MantineProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

export const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "dark",
  });

  const toggleColorScheme = () =>
    setColorScheme((current) => (current === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const bounce = keyframes`
    30% { transform: scale(1.2); }
    40%, 60% { transform: rotate(-20deg) scale(1.2); }
    50% { transform: rotate(20deg) scale(1.2); }
    70% { transform: rotate(0deg) scale(1.2); }
    100% { transform: scale(1); }
`;

  const isDark = colorScheme === "dark";

  const darkViolet = "#200034",
    white = "#FFFFFF",
    middleViolet = "#45377d",
    lightViolet = "#cfc7e7",
    darkYellow = "#fcc826",
    lightYellow = "#f6d964",
    darkText = "#4F4284",
    lightGrey = "#817c8f",
    violet2 = "#D0BFFF",
    violet7 = "#7048E8",
    orange4 = "#FFA94D",
    orange7 = "#F76707",
    green6 = "#40C057",
    green9 = "#2B8A3E",
    red6 = "#FA5252",
    red9 = "#C92A2A",
    yellow6 = "#FAB005",
    yellow8 = "#F08C00",
    darkBlue = "#00589b",
    lightBlue = "#2bcbff";

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
          components: {
            Menu: {
              styles: {
                dropdown: {
                  backgroundColor: bg1,
                },
                label: {
                  color: text2,
                },
                item: {
                  color: text0,
                },
              },
            },

            Header: {
              defaultProps: (theme) => ({
                bg: theme.colorScheme === "dark" ? darkYellow : middleViolet,
              }),
            },
            Footer: {
              defaultProps: (theme) => ({
                bg: theme.colorScheme === "dark" ? middleViolet : lightViolet,
                height: "60px",
                p: "md",
              }),
              root: (theme) => ({
                borderColor:
                  theme.colorScheme === "dark" ? darkYellow : middleViolet,
              }),
            },
            Navbar: {
              defaultProps: (theme) => ({
                bg: theme.colorScheme === "dark" ? middleViolet : lightViolet,
                borderColor: bg0,
              }),
            },
            Burger: {
              defaultProps: (theme) => ({
                color: theme.colorScheme === "dark" ? middleViolet : darkYellow,
                size: "sm",
                fontWeight: "600",
              }),
            },
            Text: {
              defaultProps: (theme) => ({
                color: theme.colorScheme === "dark" ? white : middleViolet,
              }),
              variants: {
                link: (theme) => ({
                  root: {
                    color:
                      theme.colorScheme === "dark" ? middleViolet : darkYellow,
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    ...theme.fn.hover({
                      animation: `${bounce} 1s ease infinite`,
                    }),
                  },
                }),
              },
            },
            Anchor: {
              defaultProps: (theme) => ({
                color: theme.colorScheme === "dark" ? white : middleViolet,
              }),
              variants: {
                link: (theme) => ({
                  root: {
                    color: theme.colorScheme === "dark" ? white : middleViolet,
                    fontWeight: "600",
                    ...theme.fn.hover({
                      opacity: "0.6",
                      transition: "all 0.2s easy",
                      textDecoration: "none",
                    }),
                  },
                }),
              },
            },
            ActionIcon: {
              variants: {
                outline: (theme) => ({
                  root: {
                    borderColor:
                      theme.colorScheme === "dark" ? darkYellow : middleViolet,
                  },
                }),
              },
            },
            Button: {
              variants: {
                darkLight: (theme) => ({
                  root: {
                    backgroundColor:
                      theme.colorScheme === "dark" ? orange7 : lightBlue,
                    color: white,
                    ...theme.fn.hover({
                      backgroundColor:
                        theme.colorScheme === "dark" ? orange4 : darkBlue,
                    }),
                  },
                }),
                primary: (theme) => ({
                  root: {
                    backgroundColor: orange7,
                    color: white,
                    ...theme.fn.hover({ backgroundColor: orange4 }),
                  },
                }),
                danger: (theme) => ({
                  root: {
                    backgroundColor: red9,
                    color: white,
                    ...theme.fn.hover({ backgroundColor: red6 }),
                  },
                }),
                warning: (theme) => ({
                  root: {
                    backgroundColor: darkBlue,
                    color: white,
                    ...theme.fn.hover({ backgroundColor: lightBlue }),
                  },
                }),
                success: (theme) => ({
                  root: {
                    backgroundColor: green9,
                    color: white,
                    ...theme.fn.hover({ backgroundColor: green6 }),
                  },
                }),
              },
            },
          },
          defaultGradient: {
            from: colorScheme === "dark" ? darkViolet : white,
            to: colorScheme === "dark" ? middleViolet : lightViolet,
            deg: 180,
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
