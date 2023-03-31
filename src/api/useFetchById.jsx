import { useFetch } from "./useFetch";

export const useFetchById = (id) => {
  const { data } = useFetch();

  return data.find((quiz) => quiz.quizId == id);
};
