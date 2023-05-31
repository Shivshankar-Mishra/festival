import React from "react";
import { useMediaQuery, Box } from "@chakra-ui/react";
import { Flex,Text,Image,Button } from "@chakra-ui/react";



function Fest2() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
    maxWidth={{ base: "100vh", md: "130vh", xl:"130vh"}} >
      <Box alignSelf="start" px="32" py="16">
      <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
        <Flex rounded="xl" direction="column" m={5} mt={5} bg="red.400" h="40vh" w="60vh" justify="flex-end"  _hover={{ bg: "teal.400",}}>
        <Box >
          <Image id="Holi" src='https://img.freepik.com/premium-photo/holi-festival-abstract-background_806675-289.jpg' alt='Holi' width="500px" height="228" />
        </Box>
        <Text color="white" p='4' fontSize="xl" fontWeight="semibold">Holi</Text>
        </Flex>
      </Flex>
      </Box>
      <Text position="absolute" mt="110" ml="650">
      The festival of colours, Holi is one of the famous festivals of India, celebrated with a lot of fervour across the country. On the eve of Holi, people make huge Holika bonfires and sing and dance around it. On the day of Holi, the famous festival of Indian states, people gather in open areas and apply dry and wet colors of multiple hues to each other, with some carrying water guns and colored water-filled balloons. It tops the charts of 10 famous festivals in India as it is celebrated all across the world with happiness.<br/>
      <b>Significance:</b> It signifies the victory of good (Prince Prahlad) over evil (Holika) and the arrival of spring.<br/>
      <b>Key attractions:</b> Holika bonfire, playing with colors, and bhang thandai<br/>
      <b>When:</b> Full moon (Purnima) of the Phalgun month of the Hindu lunisolar calendar, which corresponds to the month of March of the Gregorian calendar<br/>
      <b>Things To Do:</b> Holika bonfires and sing and dance around it, play with colors, eat sweets esp. Gujiya<br/> 
      <Button colorScheme='blue' mt="3" w="50" border="2px" borderColor="green.500">Learn More</Button> 
     </Text>
    </Flex>
  )
}
export default Fest2