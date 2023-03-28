import { Flex, Progress, Text } from "@mantine/core";
import PropTypes from "prop-types";

export const ProgressBar = ({ LIMIT, timerValue, setTimerValue }) => {
  let timerId = setTimeout(() => {
    setTimerValue(timerValue - 1);
  }, 1000);

  if (timerValue <= 0) {
    clearTimeout(timerId);
  }

  const getProgressBarValue = () => Math.ceil((timerValue * 100) / LIMIT);

  const getTime = () => {
    if (timerValue < 10) {
      return `0${timerValue}`;
    }

    return timerValue;
  };

  return (
    <Flex pos="relative" w="100%">
      <Progress
        role="progressbar"
        w="100%"
        mih="20px"
        size="xl"
        radius="xl"
        value={getProgressBarValue()}
      />

      <Text
        pos="absolute"
        top="50%"
        left="50%"
        lh="1"
        fw="bold"
        sx={{ transform: "translate(-50%, -50%)" }}
      >
        00:{getTime()}
      </Text>
    </Flex>
  );
};

ProgressBar.propTypes = {
  LIMIT: PropTypes.number.isRequired,
  timerValue: PropTypes.number.isRequired,
  setTimerValue: PropTypes.func.isRequired,
};
