import { Wrap, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { Stack, Circle, Flex,Box, Image,Text,Button } from "@chakra-ui/react";
import { Avatar ,WrapItem } from '@chakra-ui/react'
import React from "react";

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
       <Stack>
        <Circle position="absolute" bg="blue.100" w="300px" h="300px" zIndex='-1' alignSelf="flex-end">
        <Wrap>
        <WrapItem>
         <Avatar name='Chandan' src='https://media.tenor.com/AQYuwHCG7BAAAAAC/ashoka-chakram-national-flag.gif' boxShadow='lg'
                boxSize='300px'/>
         </WrapItem>
        </Wrap>
        </Circle>
      
        <Flex direction={isNotSmallerScreen ? "row" : "column"}
              spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
              alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" :"16"} align="flex-start">
                    <Text fontSize="5xl" fontWeight="semibold"  bgGradient="linear(to-r, red.400, blue.500, purple.600)" bgClip='text'> Most Famous Festivals Of India </Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400,blue.500, purple.600)" bgClip='text' ></Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>
                    The greatness of India’s culture can be found in its festivals. The vivid and vivacious festivals of India depict the greatness of our Indian culture. Indians celebrate festivals with sheer enthusiasm and devotion. India is a country that is appreciated and comprehended as a plethora of festivals are celebrated here.  </Text>
                <a href="#Diwali"><Button mt={8} colorScheme="blue">Explore</Button></a>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                backgroundColor='transparent' boxShadow='lg'
                boxSize='300px' src="https://media.istockphoto.com/id/185142722/vector/couple-playing-dandiya.jpg?s=612x612&w=0&k=20&c=3NaQYDOnMMWlMjhIpDNhLA8KFeYPjbE4LSDkPAH7XfQ=" />

              </Flex>
       </Stack>
    )
}

export default Header