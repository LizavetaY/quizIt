import React from "react";
import { Flex, Progress, Text, useMantineTheme } from "@mantine/core";

const LIMIT = 30;

export const ProgressBar = () => {
  const { colors } = useMantineTheme();

  const [timerValue, setTimerValue] = React.useState(0);

  let timerId = setTimeout(() => {
    setTimerValue(timerValue + 1);
  }, 1000);

  if (timerValue >= LIMIT) {
    clearTimeout(timerId);
  }

  const getProgressBarValue = () =>
    Math.ceil(((LIMIT - timerValue) * 100) / LIMIT);

  const getTime = () => {
    const timeValue = LIMIT - timerValue;

    if (timeValue < 10) {
      return `0${timeValue}`;
    }

    return timeValue;
  };

  return (
    <Flex pos="relative" w="100%">
      <Progress
        role="progressbar"
        w="100%"
        mih="20px"
        size="xl"
        radius="xl"
        color={colors.btnBgHover0}
        value={getProgressBarValue()}
      />

      <Text
        pos="absolute"
        top="50%"
        left="50%"
        size="sm"
        fw="bold"
        lh="1"
        color={colors.text0}
        sx={{ transform: "translate(-50%, -50%)" }}
      >
        00:{getTime()}
      </Text>
    </Flex>
  );
};