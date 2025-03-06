import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return <Text>{error}</Text>;
  if (isLoading) return <Spinner />;
  return data.map((genre) => {
    return (
      <List key={genre.id} paddingY={2}>
        <ListItem>
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={genre.image.icon_url} />
            <Button
              variant="link"
              fontSize="lg"
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      </List>
    );
  });
};

export default GenreList;
