import React from "react";
import { useMediaQuery, Box } from "@chakra-ui/react";
import { Flex,Text,Image,Button } from "@chakra-ui/react";


function Fest3() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
    maxWidth={{ base: "100vh", md: "130vh", xl:"130vh"}} >
      <Box alignSelf="start" px="32" py="16">
      <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
        <Flex rounded="xl" direction="column" m={5} mt={5} bg="red.400" h="40vh" w="60vh" justify="flex-end"  _hover={{ bg: "teal.400",}}>
        <Box >
          <Image src='https://www.greetingseveryday.com/wp-content/uploads/2017/09/Happy-Dussehra-GIF-1.gif' alt='Dussehra'  width="500px" height="229"/>
        </Box>
        <Text color="white" p='4' fontSize="xl" fontWeight="semibold">Dussehra</Text>
        </Flex>
      </Flex>
      </Box>
      <Text position="absolute" mt="110" ml="650">
      Dussehra, also referred to as Vijayadashami, is also among the most famous festivals of India in Hindu religion. It is celebrated in different forms of countrywide. Ramlila (enactment of scenes from Ramayana) is held everywhere for 10 days. It’s culminated with “Ravan Dahan” – the burning of huge effigies of Ravana, Meghnath, and Kumbhkaran which is a real spectacle to see. While in Mysore, a colorful procession is taken out, in Kullu it is celebrated for 10 days welcoming their mountain deities in the valley. The Mysore Palace is lit like a bride and the atmosphere is filed with the music of drums. It is a spectacle to not miss on your trip to the city of royals. It is one of the most religious festivals of India. <br/>
      <b>Significance:</b>  It celebrates the death of the demon king Ravana at the hands of Lord Rama<br/>
      <b>Key attractions:</b>Hustle bustle of the decorated markets, Ram-Leela acts, and the big event of the burning of effigies of Ravana, Meghnath, and Kumbhkaran<br/>
      <b>When:</b> 10th day of the month of Ashwin according to the Hindu lunisolar calendar, which corresponds to September or October of the Gregorian calendar<br/>
      <b>Things To Do:</b> Visit Dussehra celebrations, attend ravan dahan, visit prominent temples to glance celebrations <br/> 
      <Button colorScheme='blue' mt="3" w="50" border="2px" borderColor="green.500">Learn More</Button> 
     </Text>
    </Flex>
  )
}
export default Fest3