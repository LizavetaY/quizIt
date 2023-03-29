import { useEffect, useState } from "react";

export const useFetchById = (id) => {
  const [data, setData] = useState();
  async function getData() {
    const response = await fetch("http://localhost:8080/data");
    const data = await response.json();

    let quizDataObj = {};
    quizDataObj = data.find((quiz) => quiz.quizId == id);
    setData(quizDataObj);
  }

  useEffect(() => {
    getData();
  }, []);

  return data;
};
