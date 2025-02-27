import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  //title: string;
  //thumbnail: string;
  image: { original_url: string };
  platforms: {
    map(arg0: (platform: any) => import("react/jsx-runtime").JSX.Element): any;
    platform: any;
    id: number;
    name: string;
  };
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
        //console.log(res.data);
        console.log(res.data.results);
        setGames(res.data.results);
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
