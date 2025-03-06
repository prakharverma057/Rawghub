import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";

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
 
const useGame = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { genre: gameQuery.genre?.id, platforms: gameQuery.platform?.id } },
    [gameQuery]
  );

export default useGame;
