import { Center, Loader } from "@mantine/core";

export const Spinner = () => {
  return (
    <Center maw={400} h={300} mx="auto">
      <Loader color="yellow" size="xl" />
    </Center>
  );
};
