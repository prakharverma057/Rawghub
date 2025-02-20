import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
