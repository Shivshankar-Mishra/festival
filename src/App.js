import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon
} from "react-icons/fa";
import Header from "./Componets/Header";
import Profile from "./Componets/Profile";
import Fest1 from "./Componets/Fest1";
import Potcast3 from "./Componets/Fest2";
import Potcast4 from "./Componets/Fest3";
import Potcast5 from "./Componets/Fest4";
import Fest6 from "./Componets/Fest6";


function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack
      p={5}
      spacing={4}
      align="stretch"
    >
      <Flex w="100%">
        <Heading ml="8" fontWeight="semibold" color="#c13438">
          {/* Festival-web-app */}
        </Heading>

        <Spacer></Spacer>
       
      <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Profile></Profile>
      <Fest1></Fest1>
      <Potcast3></Potcast3>
      <Potcast4></Potcast4>
      <Potcast5></Potcast5>
      <Fest6></Fest6>
    </VStack>
  );
}

export default App;
