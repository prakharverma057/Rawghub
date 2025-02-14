import { Grid, GridItem, Show, HStack, Text, Image } from "@chakra-ui/react";
import logo from "./assets/logo.svg";
function App() {
  return (
    <Grid templateAreas={{ base: `"nav nav"`, lg: `"aside main"` }}>
      <HStack>
        <GridItem area={"nav"}>
          <Image src={logo} boxSize="60px" />
        </GridItem>
        <Text>Header</Text>
      </HStack>
      <Show above="lg">
        <GridItem area={"aside"} bgColor="lightblue">
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bgColor="lightgreen">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
