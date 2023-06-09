import { useState } from "react";
import { Button, Container, Flex, Text, useMantineTheme } from "@mantine/core";
import PropTypes from "prop-types";

import { ProgressBar } from "@/components";

const LIMIT = 30;

export const QuizQuestion = ({
  isGameWithTimer,
  question,
  answers,
  correctAnswerId,
  explanation,
  questionsQty,
  questionPage,
  isCorrectAnswer,
  setNextQuestionPage,
}) => {
  const [timerValue, setTimerValue] = useState(LIMIT);
  const [chosenBtnId, setChosenBtnId] = useState("");
  const [isShownExplanation, setIsShownExplanation] = useState(false);

  const { colors } = useMantineTheme();

  const setBtnId = (event) => {
    const chosenBtnId = event.currentTarget.id;

    setChosenBtnId(chosenBtnId);
    isCorrectAnswer(chosenBtnId == correctAnswerId);
  };

  const toggleExplanation = () => {
    setIsShownExplanation(!isShownExplanation);
  };

  const setNextQuestionPageOnClick = () => {
    setTimerValue(LIMIT);
    setChosenBtnId("");
    setNextQuestionPage();
  };

  const getBtnDisabledColor = (btnId) => {
    const stylesObj = {};

    if (chosenBtnId || (!chosenBtnId && timerValue <= 0)) {
      if (chosenBtnId == btnId) {
        stylesObj.border = `3px solid ${colors.btnBorderChosenAnswer}`;
      }

      if (
        btnId == correctAnswerId ||
        (btnId == correctAnswerId && timerValue <= 0)
      ) {
        stylesObj.color = "#fff";
        stylesObj.backgroundColor = colors.btnBgSuccess;
      } else if (chosenBtnId == btnId && btnId != correctAnswerId) {
        stylesObj.color = "#fff";
        stylesObj.backgroundColor = colors.btnBgDanger;
      }
    }

    return stylesObj;
  };

  return (
    <>
      <Flex
        align="center"
        justify="center"
        pos="relative"
        mih="30%"
        sx={{
          borderRadius: "1rem",
          backgroundColor: colors.bgSecondary,
        }}
      >
        <Container>
          <Text size="md" weight="700" color={colors.textPrimary} ta="center">
            {question}
          </Text>
        </Container>

        <Flex
          pos="absolute"
          top="0"
          right="0"
          p="0.8rem 1.2rem"
          sx={{
            borderRadius: "0 1rem 0 2rem",
            backgroundColor: colors.bgPrimary,
          }}
        >
          <Text size="md" weight="700">
            {questionPage + 1} / {questionsQty}
          </Text>
        </Flex>
      </Flex>

      <Flex align="center" justify="space-between" wrap="wrap" mt="20px">
        {answers.map((button) => (
          <Button
            key={button.id}
            id={button.id}
            disabled={!!chosenBtnId || timerValue <= 0}
            mt="20px"
            w="100%"
            maw="48%"
            h="80px"
            ta="center"
            lh="1.2"
            variant="primary"
            sx={{
              borderRadius: "1rem",
            }}
            styles={() => ({
              root: {
                "&:disabled": {
                  ...getBtnDisabledColor(button.id),
                },
              },
              label: {
                whiteSpace: "break-spaces",
              },
            })}
            onClick={setBtnId}
          >
            {button.data}
          </Button>
        ))}
      </Flex>

      <Flex direction="column" align="center" mt="50px">
        {(!chosenBtnId && isGameWithTimer && timerValue && (
          <ProgressBar
            LIMIT={LIMIT}
            timerValue={timerValue}
            setTimerValue={setTimerValue}
          />
        )) ||
          ((chosenBtnId || (!chosenBtnId && !timerValue)) && (
            <>
              <Button
                mb="20px"
                miw="50%"
                variant="secondary"
                onClick={setNextQuestionPageOnClick}
                size="md"
                sx={{
                  borderRadius: "1rem",
                }}
              >
                {(questionsQty != questionPage && "Next question") ||
                  "See results"}
              </Button>

              <Button
                maw="80%"
                h="80px"
                ta="center"
                lh="1.2"
                fullWidth
                variant="primary"
                sx={{
                  borderRadius: "1rem",
                }}
                styles={() => ({
                  label: {
                    whiteSpace: "break-spaces",
                  },
                })}
                onClick={toggleExplanation}
              >
                {(!isShownExplanation && "See the explanation") || explanation}
              </Button>
            </>
          ))}
      </Flex>
    </>
  );
};

QuizQuestion.propTypes = {
  isGameWithTimer: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      data: PropTypes.string,
    })
  ).isRequired,
  correctAnswerId: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  questionsQty: PropTypes.number.isRequired,
  questionPage: PropTypes.number.isRequired,
  isCorrectAnswer: PropTypes.func.isRequired,
  setNextQuestionPage: PropTypes.func.isRequired,
};
