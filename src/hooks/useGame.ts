import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGame = (selectedGenre: Genre | null) => useData<Game>("/games", {params: {genre: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGame;
