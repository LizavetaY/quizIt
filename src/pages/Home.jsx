import { useEffect, useState } from "react";
import { SimpleGrid } from "@mantine/core";

import { QuizCard } from "@/components";

export const Home = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch("http://localhost:8080/data");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: "md", cols: 2, spacing: "md" },
        { maxWidth: "sm", cols: 1, spacing: "sm" },
      ]}
    >
      {data.map((quiz) => {
        return (
          <QuizCard key={quiz.quizId} name={quiz.quizName} path={quiz.quizId} />
        );
      })}
    </SimpleGrid>
  );
};
