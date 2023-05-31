import React from "react";
import { Box, Flex, Heading, useMediaQuery, Text } from "@chakra-ui/react";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="red.500" size="2xl" position="absolute" ml="400">
          | Festivals of Bharat |
        </Heading>
        <Text fontSize="2xl" color="gray.400"></Text>
      </Box>
     
    </Flex>
  );
}



export default Profile;
