import React from "react";
import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.thumbnail} alt={game.title} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
