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

  const clearLocalStorage = () => {
    localStorage.removeItem("quizId");
    localStorage.removeItem("questionPage");
    localStorage.removeItem("correctAnswersQty");
    localStorage.removeItem("isGameWithTimer");
  };
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
              borderRadius: "1rem",
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
              size="md"
              w={220}
              onClick={clearLocalStorage}
              sx={{
                borderRadius: "1rem",
              }}
            >
              Back to Quizzes
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Container>
  );
};
