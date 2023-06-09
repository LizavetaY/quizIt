import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    // if DB will be hosted, add link to it to VITE_API_URL in .env and change variable here
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
