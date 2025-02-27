import React from "react";
import { Game } from "../hooks/useGame";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  games: Game[];
  platforms: any;
}

const PlatformIconList = ({ games }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    PC: FaWindows,
    playstation: FaPlaystation,
    Xbox: FaXbox,
    Mac: FaApple,
    Android: FaAndroid,
    nintendo: SiNintendo,
    iPhone: MdPhoneIphone,
    Browser: BsGlobe,
    Linux: FaLinux,
  };
  return (
    <HStack marginY={1}>
      {games.map((game) =>
        game.platforms.map((platform) => (
          <Icon as={iconMap[platform]} color="gray.500" />
        ))
      )}
    </HStack>
  );
};

export default PlatformIconList;
