import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

interface Game {
  id: number;
  title: string;
}

const GameGrid = () => {
  const { games, error } = useGame();

  if (!games) return <Text>Loading...</Text>;
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game: Game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
