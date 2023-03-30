import { useEffect, useState } from "react";

export const useFetchTemp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    const response = await fetch("http://localhost:8080/data");
    const data = await response.json();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
};
