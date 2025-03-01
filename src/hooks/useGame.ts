import useData from "./useData";

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

const useGame: any = () => useData<Game>("/games");

export default useGame;
