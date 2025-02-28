import { Game } from "../hooks/useGame";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiApplearcade, SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  games: Game[];
  platforms: any;
}

const PlatformIconList = ({ games }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    "Nintendo Entertainment System": SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    Arcade: SiApplearcade,
  };
  return (
    <HStack marginY={1}>
      {games.map((game) =>
        game.platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.name.toLowerCase()]}
            color="gray.500"
          />
        ))
      )}
    </HStack>
  );
};

export default PlatformIconList;
