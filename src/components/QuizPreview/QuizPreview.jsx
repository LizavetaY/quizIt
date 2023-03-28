import React from "react";
import { Box, Button, Flex, Text, useMantineTheme } from "@mantine/core";
import { IconAlarm, IconAlarmOff } from "@tabler/icons-react";
import PropTypes from "prop-types";

const previewButtonsCode = [
  {
    id: "gameWithoutTimer",
    code: (
      <>
        <Box mr="5px">
          <IconAlarmOff />
        </Box>
        Play without a timer
      </>
    ),
  },
  {
    id: "gameWithTimer",
    code: (
      <>
        <Box mr="5px">
          <IconAlarm />
        </Box>
        Play with a timer
      </>
    ),
  },
];

export const QuizPreview = ({ quizName, quizDescription, setTypeOfGame }) => {
  const { colors } = useMantineTheme();

  const setTypeOfGameOnClick = (event) => {
    const buttonId = event.currentTarget.id.toLowerCase();

    if (buttonId.includes("without")) {
      setTypeOfGame(false);

      return;
    }

    setTypeOfGame(true);
  };

  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="center"
        pos="relative"
        mih="30%"
        sx={{
          borderRadius: "30px",
          backgroundColor: colors.bgSecondary,
        }}
      >
        <Text size="lg" fw="700" color={colors.textPrimary}>
          {quizName}
        </Text>

        {!!quizDescription && (
          <Text mt="20px" size="sm">
            Description: {quizDescription}
          </Text>
        )}
      </Flex>

      <Flex align="center" justify="space-between" wrap="wrap" mt="20px">
        {previewButtonsCode.map((buttonData) => (
          <Button
            key={buttonData.id}
            id={buttonData.id}
            mt="20px"
            w="100%"
            maw="48%"
            h="80px"
            ta="center"
            lh="1.2"
            variant="primary"
            sx={{
              borderRadius: "20px",
            }}
            onClick={setTypeOfGameOnClick}
          >
            {buttonData.code}
          </Button>
        ))}
      </Flex>
    </>
  );
};

QuizPreview.propTypes = {
  quizName: PropTypes.string.isRequired,
  quizDescription: PropTypes.string,
  setTypeOfGame: PropTypes.func.isRequired,
};
