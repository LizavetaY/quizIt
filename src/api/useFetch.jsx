import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    // if DB will be hosted, change .env variable to VITE_API_URL
    const response = await fetch(import.meta.env.VITE_LOCAL_API_URL);
    const data = await response.json();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
};
