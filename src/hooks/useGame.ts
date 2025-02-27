import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame: any = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/games", { signal: controller.signal })
      .then((res) => {
        console.log("games:", res.data);
        setGames(res.data);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        console.error("network error", err);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGame;
