import { Card, Center, Stack, Text, useMantineTheme } from "@mantine/core";
import { useHover } from "@mantine/hooks";

export const QuizCard = () => {
  const { colors } = useMantineTheme();
  const { hovered, ref } = useHover();

  return (
    <Card component="a" href="/quiz" bg={colors.bg1} ref={ref}>
      <Center h={120} mx="auto">
        <Stack align="center">
          {hovered ? <Text size={18}>Play Quiz</Text> : undefined}
          <Text fw={700} size={18}>
            QuizName from DB
          </Text>
        </Stack>
      </Center>
    </Card>
  );
};
