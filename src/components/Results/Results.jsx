import { Container, Text } from "@mantine/core";

export const Results = ({ correctAnswersQty, quiz }) => {
  return (
    <Container size="xs" px={0}>
      <Text ta="center">
        YOUR RESULT IS: {correctAnswersQty} / {quiz.quizData.length}
      </Text>
    </Container>
  );
};
