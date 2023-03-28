import { Link, useParams } from "react-router-dom";
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
  const { id: quizId } = useParams();

  const totalQuestions = quiz.quizData.length;

  return (
    <Container h="inherit" size="xs" px={0}>
      <Center h="inherit">
        <Stack align="center">
          <Container
            h={200}
            w={200}
            sx={{
              borderRadius: "20px",
              backgroundColor: colors.bgSecondary,
            }}
          >
            <Center h="inherit">
              <Stack>
                <Text ta="center">
                  YOUR RESULT: {correctAnswersQty} / {totalQuestions}
                </Text>
                <Text ta="center">100%</Text>
              </Stack>
            </Center>
          </Container>
          <Stack>
            <Button
              variant="primary"
              radius="md"
              component={Link}
              to={`/${quizId}`}
            >
              Retry
            </Button>
            <Button component={Link} to={"/"} variant="secondary" radius="md">
              To Home Page
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Container>
  );
};
