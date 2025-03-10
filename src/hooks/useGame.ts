import { GameQuery } from "../App";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  //title: string;
  //thumbnail: string;
  image: { original_url: string; medium_url: string, small_url: string };
  platforms: {
    map(arg0: (platform: any) => import("react/jsx-runtime").JSX.Element): any;
    platform: any;
    id: number;
    name: string;
  };
}

const useGame = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genre: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        sort: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );

export default useGame;
