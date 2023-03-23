import { Card, Center, Stack, Text, useMantineTheme } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import PropTypes from "prop-types";

export const QuizCard = ({ name, path }) => {
  const { colors } = useMantineTheme();
  const { hovered, ref } = useHover();

  return (
    <Card component="a" href={`/${path}`} bg={colors.bg1} ref={ref}>
      <Center h={120} mx="auto">
        <Stack align="center">
          {hovered ? <Text size={18}>Play Quiz</Text> : undefined}
          <Text fw={700} size={18}>
            {name}
          </Text>
        </Stack>
      </Center>
    </Card>
  );
};

QuizCard.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};