import { SimpleGrid } from "@mantine/core";

import { QuizCard } from "@/components";

export const Home = () => {
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: "md", cols: 2, spacing: "md" },
        { maxWidth: "sm", cols: 1, spacing: "sm" },
      ]}
    >
      <QuizCard />
      <QuizCard />
      <QuizCard />
    </SimpleGrid>
  );
};
