import { SimpleGrid } from "@mantine/core";

import { useFetchTemp } from "@/api/useFetchTemp";
import { QuizCard } from "@/components";
import { Spinner } from "@/components/Spinner";

export const Home = () => {
  const { data, loading } = useFetchTemp();

  return (
    <>
      {loading && <Spinner />}
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: "md", cols: 2, spacing: "md" },
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
