import Platforms from "../Data/Platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatform = () => ({ data: Platforms, isloading: false, error: null });
export default usePlatform;
