import { useEffect, useState } from "react";

export const useFetchTemp = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch("http://localhost:8080/data");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return data;
};
