import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";

import NavBar from "./Components/NavBar";
function App() {
  return (
    <Grid templateAreas={{ base: `"nav nav"`, lg: `"aside main"` }}>
      <HStack>
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
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
