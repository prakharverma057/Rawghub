import { Game } from "../hooks/useGame";
import { Box, Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box
      overflow="hidden"
      _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
    >
      <Card>
        <Image src={game.background_image} alt={game.name} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          {game.platforms && (
            <HStack justifyContent={"space-between"} marginBottom={3}>
              <PlatformIconList
                platforms={game.platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
          )}
        </CardBody>
      </Card>
    </Box>
  );
};

export default GameCard;
