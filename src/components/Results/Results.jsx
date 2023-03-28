import { Link } from "react-router-dom";
import {
  Button,
  Center,
  Container,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";

export const Results = ({ correctAnswersQty, quiz }) => {
  const { colors } = useMantineTheme();

  const totalQuestions = quiz.quizData.length;
  const percentage = Math.round((correctAnswersQty / totalQuestions) * 100);

  return (
    <Container h="inherit" size="xs" px={0}>
      <Center h="inherit">
        <Stack align="center">
          <Container
            h={280}
            w={280}
            mb={32}
            sx={{
              borderRadius: "20px",
              backgroundColor: colors.bgSecondary,
            }}
          >
            <Center h="inherit">
              <Stack>
                <Text ta="center" fz="xl" fw={500}>
                  Your result:
                </Text>
                <Text ta="center" fz="lg" fw={300}>
                  {correctAnswersQty} / {totalQuestions}
                </Text>
                <Text ta="center" fz="lg" fw={500}>
                  {percentage}%
                </Text>
              </Stack>
            </Center>
          </Container>
          <Stack>
            <Button
              component={Link}
              to={"/"}
              variant="primary"
              radius="xl"
              size="md"
              w={220}
            >
              Back to Quizzes
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Container>
  );
};
