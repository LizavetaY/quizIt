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
    orange5 = "#FF922B",
    orange7 = "#F76707",
    green6 = "#40C057",
    green9 = "#2B8A3E",
    red6 = "#FA5252",
    red9 = "#C92A2A",
    yellow6 = "#FAB005",
    yellow8 = "#F08C00",
    darkBlue = "#00589b",
    lightBlue = "#2bcbff";

  const bgPrimary = isDark ? darkViolet : white;
  const bgSecondary = isDark ? middleViolet : lightViolet;
  const btnBgPrimary = isDark ? middleViolet : lightViolet;
  const btnBgSecondary = isDark ? orange7 : orange5;
  const btnBgSuccess = isDark ? green9 : green6;
  const btnBgDanger = isDark ? red9 : red6;
  const btnBorderChosenAnswer = isDark ? yellow8 : yellow6;
  const btnBgHover = isDark ? yellow8 : yellow6;
  const bgHeader = isDark ? darkYellow : middleViolet;
  const textPrimary = isDark ? white : darkText;
  const textSecondary = isDark ? lightYellow : lightGrey;
  const textLogo = isDark ? middleViolet : darkYellow;
  const textLink = isDark ? white : middleViolet;

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            bgPrimary,
            bgSecondary,
            btnBgPrimary,
            btnBgSecondary,
            btnBgSuccess,
            btnBgDanger,
            btnBorderChosenAnswer,
            btnBgHover,
            bgHeader,
            textPrimary,
            textSecondary,
            textLogo,
            textLink,
          },
          components: {
            Menu: {
              styles: {
                dropdown: {
                  backgroundColor: bgSecondary,
                },
                label: {
                  color: textSecondary,
                },
                item: {
                  color: textPrimary,
                },
              },
            },

            Header: {
              defaultProps: () => ({
                bg: bgHeader,
              }),
            },
            Footer: {
              defaultProps: () => ({
                bg: bgSecondary,
                height: "60px",
                p: "md",
              }),
              root: () => ({
                borderColor: bgHeader,
              }),
            },
            Navbar: {
              defaultProps: () => ({
                bg: bgSecondary,
              }),
            },
            Burger: {
              defaultProps: () => ({
                color: textLogo,
                size: "sm",
                fontWeight: "600",
              }),
            },
            Text: {
              defaultProps: () => ({
                color: textPrimary,
                size: "sm",
              }),
              variants: {
                link: (theme) => ({
                  root: {
                    color: textLogo,
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
              defaultProps: () => ({
                color: textLink,
              }),
              variants: {
                link: (theme) => ({
                  root: {
                    color: textLink,
                    fontWeight: "600",
                    ...theme.fn.hover({
                      opacity: "0.6",
                      transition: "all 0.2s ease",
                      textDecoration: "none",
                    }),
                  },
                }),
              },
            },
            Button: {
              variants: {
                primary: (theme) => ({
                  root: {
                    backgroundColor: btnBgPrimary,
                    color: textPrimary,
                    ...theme.fn.hover({
                      backgroundColor: btnBgHover,
                    }),
                  },
                }),
                secondary: (theme) => ({
                  root: {
                    backgroundColor: btnBgSecondary,
                    color: textPrimary,
                    ...theme.fn.hover({ backgroundColor: btnBgHover }),
                  },
                }),
                danger: (theme) => ({
                  root: {
                    backgroundColor: btnBgDanger,
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
                    backgroundColor: btnBgSuccess,
                    color: white,
                    ...theme.fn.hover({ backgroundColor: green6 }),
                  },
                }),
              },
            },
            Progress: {
              defaultProps: () => ({
                color: btnBgHover,
              }),
            },
          },
          defaultGradient: {
            from: bgPrimary,
            to: bgSecondary,
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
