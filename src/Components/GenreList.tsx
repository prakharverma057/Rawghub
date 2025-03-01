import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return <Text>{error}</Text>;
  if (isLoading) return <Spinner />;
  return data.map((genre) => {
    return (
      <List paddingY={2}>
        <ListItem key={genre.id}>
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={genre.image.icon_url} />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      </List>
    );
  });
};

export default GenreList;
