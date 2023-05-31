import React from "react";
import { useMediaQuery, Box } from "@chakra-ui/react";
import { Flex,Text,Image,Button } from "@chakra-ui/react";



function Fest0() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
    maxWidth={{ base: "100vh", md: "130vh", xl:"130vh"}} >
      <Box alignSelf="start" px="32" py="16">
      <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
        <Flex rounded="xl" direction="column" m={5} mt={5} bg="red.400" h="40vh" w="60vh" justify="flex-end"  _hover={{ bg: "teal.400",}}>
        <Box >
          <Image id="Diwali" src='https://cdn.dribbble.com/users/1732368/screenshots/7840161/media/3a24bf58c1fd728b1e42ed14e9c78268.gif' alt='Dan Abramov' width="500px" height="228"  />
            
        </Box>
        <Text color="white" p='4' fontSize="xl" fontWeight="bold">Diwali - The Light Festival</Text>
        </Flex>
      </Flex>
      
      </Box>
      <Text position="absolute" mt="110" ml="650">
      Diwali, one of the most prominent Hindu festivals of India, is celebrated with a lot of pomp and show. During this festival of lights, houses are decorated with clay lamps, candles, and Ashok leaves. People wear new clothes, participate in family puja, burst crackers, and share sweets with friends, families, and neighbours. It is the most popular festival in India.
      Significance: The festival marks the return of Lord Rama, along with his wife Sita and brother Lakshmana, after a long exile of 14 years.<br/>
      <b>Key attractions:</b> Homes decorated with fancy lights, candles and clay lamps, bustling shops and markets, and fireworks and crackers<br/>
      <b>When:</b> The darkest new moon night of Kartik month of the Hindu lunisolar calendar, which corresponds to mid-October – mid-November as per the Gregorian Calendar<br/>
      <b>Things To Do:</b> Light diyas, decorate your home, share sweets and gifts with family and loved ones<br/>
      <Button colorScheme='blue' mt="3" w="50" border="2px" borderColor="green.500">Learn More</Button> 
     </Text>
    
    </Flex>
    
  )
}
export default Fest0
