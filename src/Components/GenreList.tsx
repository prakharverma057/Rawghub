import {
  Box,
  Button,
  Heading,
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

  return (
    <>
      <Heading fontSize="2xl" paddingY={2}>
        Genres
      </Heading>

      <List>
        {data.map((genre) => (
          <Box
            overflow="hidden"
            _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}
          >
            <ListItem key={genre.id} paddingY={2}>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={genre.image_background}
                />
                <Button
                  variant="link"
                  fontSize="lg"
                  whiteSpace="normal"
                  textAlign="left"
                  onClick={() => onSelectGenre(genre)}
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          </Box>
        ))}
      </List>
    </>
  );
};
export default GenreList;
