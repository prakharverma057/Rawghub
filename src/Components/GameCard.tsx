import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      {/* <Image src={game.thumbnail} alt={game.title} /> */}
      <Image src={game.image.original_url} alt={game.name} />
      <CardBody>
        {/* <Heading fontSize={"2xl"}>{game.title}</Heading> */}
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.platforms.map((p) => p.platform)}
          games={[game]}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
