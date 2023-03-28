import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mantine/core";

import { useFetchTemp } from "@/api/useFetchTemp";
import { QuizPreview, QuizQuestion, Results } from "@/components";

export const Quiz = () => {
  const [quizData, setQuizData] = useState({});

  const [isGameWithTimer, setIsGameWithTimer] = useState("");
  const [questionPage, setQuestionPage] = useState(0);
  const [correctAnswersQty, setCorrectAnswersQty] = useState(0);

  const { id: quizId } = useParams();

  const data = useFetchTemp();

  useEffect(() => {
    let quizDataObj = {};

    quizDataObj = data.find((quiz) => quiz.quizId == quizId);

    setQuizData(quizDataObj);
  }, [quizId, data]);

  const setTypeOfGame = (isTimerActive) => {
    setIsGameWithTimer(isTimerActive);
  };

  const countCorrectAnswersQty = (isCorrect) => {
    isCorrect && setCorrectAnswersQty(correctAnswersQty + 1);
  };

  const setNextQuestionPage = () => {
    setQuestionPage(questionPage + 1);
  };

  return (
    <>
      {!!quizData && !!Object.keys(quizData)?.length && (
        <Container
          size="sm"
          p="30px"
          h="100%"
          sx={{
            justifyContent: "flex-end",
            overflowY: "scroll",
          }}
        >
          {(isGameWithTimer === "" && (
            <QuizPreview
              quizName={quizData.quizName}
              quizDescription={quizData.quizDescription}
              setTypeOfGame={setTypeOfGame}
            />
          )) ||
            (questionPage < quizData.quizData.length && (
              <QuizQuestion
                isGameWithTimer={isGameWithTimer}
                question={quizData.quizData[questionPage].question}
                answers={quizData.quizData[questionPage].answers}
                correctAnswerId={
                  quizData.quizData[questionPage].correctAnswerId
                }
                explanation={quizData.quizData[questionPage].explanation}
                questionsQty={quizData.quizData.length}
                questionIndex={questionPage + 1}
                isCorrectAnswer={countCorrectAnswersQty}
                setNextQuestionPage={setNextQuestionPage}
              />
            )) || (
              <>
                <Results
                  correctAnswersQty={correctAnswersQty}
                  quiz={quizData}
                />
              </>
            )}
        </Container>
      )}
    </>
  );
};
