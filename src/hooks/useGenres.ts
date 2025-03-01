import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image: { icon_url: string };
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
