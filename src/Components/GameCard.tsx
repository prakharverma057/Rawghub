import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        {game.platforms && (
          <HStack justifyContent={"space-between"}marginBottom={3}>
            <PlatformIconList
              platforms={game.platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        )}
      </CardBody>
    </Card>
  );
};

export default GameCard;
