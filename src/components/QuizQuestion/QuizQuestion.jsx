import React from "react";
import { Button, Flex, Text, useMantineTheme } from "@mantine/core";
import PropTypes from "prop-types";

import { ProgressBar } from "../ProgressBar";

export const QuizQuestion = ({
  question,
  answers,
  correctAnswerId,
  explanation,
  questionsQty,
  questionIndex,
  isCorrectAnswer,
  setNextQuestionPage,
}) => {
  const { colors } = useMantineTheme();

  const [chosenBtnId, setChosenBtnId] = React.useState("");
  const [isShownExplanation, setIsShownExplanation] = React.useState(false);

  const setBtnId = (event) => {
    const chosenBtnId = event.currentTarget.id;

    setChosenBtnId(chosenBtnId);
    isCorrectAnswer(chosenBtnId == correctAnswerId);
  };

  const toggleExplanation = () => {
    setIsShownExplanation(!isShownExplanation);
  };

  const setNextQuestionPageOnClick = () => {
    setChosenBtnId("");
    setNextQuestionPage();
  };

  const getAnswerBtnColor = (btnId) => {
    if (chosenBtnId) {
      let stylesObj = {};

      if (chosenBtnId == btnId) {
        stylesObj = {
          border: `3px solid ${colors.btnBorder0}`,
        };
      }

      if (btnId == correctAnswerId) {
        return {
          ...stylesObj,
          color: "#fff",
          backgroundColor: colors.btnBg2,
        };
      } else if (chosenBtnId == btnId && btnId != correctAnswerId) {
        return {
          ...stylesObj,
          color: "#fff",
          backgroundColor: colors.btnBg3,
        };
      } else {
        return stylesObj;
      }
    }

    return {
      color: colors.text0,
      backgroundColor: colors.bg1,
    };
  };

  return (
    <>
      <Flex
        align="center"
        justify="center"
        pos="relative"
        mih="30%"
        sx={{
          borderRadius: "30px",
          backgroundColor: colors.bg1,
        }}
      >
        <Text size="lg" weight="700" color={colors.text0}>
          {question}
        </Text>

        <Flex
          pos="absolute"
          top="0"
          right="0"
          p="15px 25px"
          sx={{
            borderRadius: "0 30px 0 50%",
            backgroundColor: colors.bg0,
          }}
        >
          <Text size="md" weight="700">
            {questionIndex} / {questionsQty}
          </Text>
        </Flex>
      </Flex>

      <Flex align="center" justify="space-between" wrap="wrap" mt="20px">
        {answers.map((button) => (
          <Button
            key={button.id}
            id={button.id}
            disabled={!!chosenBtnId}
            size="sm"
            mt="20px"
            w="100%"
            maw="48%"
            h="80px"
            ta="center"
            lh="1.2"
            sx={{
              borderRadius: "20px",
              ...getAnswerBtnColor(button.id),
            }}
            styles={() => ({
              root: {
                "&:disabled": {
                  ...getAnswerBtnColor(button.id),
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
        {(!chosenBtnId && <ProgressBar />) || (
          <>
            <Button
              maw="80%"
              h="80px"
              ta="center"
              lh="1.2"
              fullWidth
              sx={(theme) => ({
                borderRadius: "20px",
                backgroundColor: theme.colors.btnBg1,
              })}
              styles={() => ({
                label: {
                  whiteSpace: "break-spaces",
                },
              })}
              onClick={toggleExplanation}
            >
              {(!isShownExplanation && "See the explanation") || explanation}
            </Button>

            <Button
              mt="20px"
              miw="50%"
              sx={{
                color: colors.text0,
                borderRadius: "20px",
                backgroundColor: colors.btnBg0,
              }}
              onClick={setNextQuestionPageOnClick}
            >
              {(questionsQty != questionIndex && "Next question") ||
                "See results"}
            </Button>
          </>
        )}
      </Flex>
    </>
  );
};

QuizQuestion.propTypes = {
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
  questionIndex: PropTypes.number.isRequired,
  isCorrectAnswer: PropTypes.func.isRequired,
  setNextQuestionPage: PropTypes.func.isRequired,
};
