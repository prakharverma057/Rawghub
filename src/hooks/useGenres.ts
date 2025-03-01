import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get("/genres", { signal: controller.signal })
      .then((res) => {
        //console.log(res.data);
        console.log(res.data.results);
        setIsLoading(false);
        setGenre(res.data.results);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        console.error("network error", err);
      });

    return () => controller.abort();
  }, []);

  return { genre, error, isLoading };
};

export default useGenres;
