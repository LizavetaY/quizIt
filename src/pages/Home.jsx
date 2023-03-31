import { SimpleGrid } from "@mantine/core";

import { useFetch } from "@/api/useFetch";
import { QuizCard, Spinner } from "@/components";

export const Home = () => {
  const { data, loading } = useFetch();

  return (
    <>
      {loading && <Spinner />}
      <SimpleGrid
        cols={3}
        m={20}
        spacing="xl"
        verticalSpacing="xl"
        breakpoints={[
          { maxWidth: "md", cols: 2, spacing: "xl" },
          { maxWidth: "sm", cols: 1, spacing: "sm" },
        ]}
      >
        {data.map((quiz) => {
          return (
            <QuizCard
              key={quiz.quizId}
              name={quiz.quizName}
              path={quiz.quizId}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
};
