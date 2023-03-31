import { Flex, Footer as MantineFooter, Text } from "@mantine/core";

export const Footer = () => {
  return (
    <MantineFooter>
      <Flex justify="center" align="center" h="100%">
        <Text ta="center">
          Build with love by&nbsp;
          <Text
            component="a"
            href="https://github.com/LizavetaY"
            target="_blank"
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Liza
          </Text>
          &#44;&nbsp;
          <Text
            component="a"
            href="https://github.com/HarryPotter-4000"
            target="_blank"
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Kate
          </Text>
          &nbsp;and&nbsp;
          <Text
            component="a"
            href="https://github.com/lazzzaroni"
            target="_blank"
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Mick
          </Text>
          &nbsp;🙂 2023
        </Text>
      </Flex>
    </MantineFooter>
  );
};
