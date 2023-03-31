import { useFetch } from "./useFetch";

export const useFetchById = (id) => {
  const { data, loading } = useFetch();
  const quizDataById = data.find((quiz) => quiz.quizId == id);
  return { quizDataById, loading };
};
