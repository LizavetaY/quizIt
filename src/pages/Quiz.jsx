import React from "react";
import { Container, Text } from "@mantine/core";

import { QuizQuestion } from "@/components";
import { reactRules } from "@/data/fakeData";

export const Quiz = () => {
  const [questionPage, setQuestionPage] = React.useState(0);
  const [correctAnswersQty, setCorrectAnswersQty] = React.useState(0);

  const countCorrectAnswersQty = (isCorrect) => {
    isCorrect && setCorrectAnswersQty(correctAnswersQty + 1);
  };

  const setNextQuestionPage = () => {
    setQuestionPage(questionPage + 1);
  };

  return (
    <Container
      size="sm"
      p="30px"
      h="100%"
      sx={{
        justifyContent: "flex-end",
        overflowY: "scroll",
      }}
    >
      {(questionPage < reactRules.length && (
        <QuizQuestion
          id={reactRules[questionPage].id}
          question={reactRules[questionPage].question}
          answers={reactRules[questionPage].answers}
          correctAnswerId={reactRules[questionPage].correctAnswerId}
          explanation={reactRules[questionPage].explanation}
          questionsQty={reactRules.length}
          questionIndex={questionPage + 1}
          isCorrectAnswer={countCorrectAnswersQty}
          setNextQuestionPage={setNextQuestionPage}
        />
      )) || (
        <Text>
          YOUR RESULT IS: {correctAnswersQty} / {reactRules.length}
        </Text>
      )}
    </Container>
  );
};
