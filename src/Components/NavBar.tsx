import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={4}>
      <Box
        overflow="hidden"
        _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
        onClick={() => window.location.reload()}
        cursor="pointer"
      >
        <Image src={logo} boxSize="100px" />
      </Box>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
