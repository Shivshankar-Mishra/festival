import React from "react";
import { useMediaQuery, Box } from "@chakra-ui/react";
import { Flex,Text,Image,Button } from "@chakra-ui/react";



function Fest6() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
    maxWidth={{ base: "100vh", md: "130vh", xl:"130vh"}} >
      <Box alignSelf="start" px="32" py="16">
      <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
        <Flex rounded="xl" direction="column" m={5} mt={5} bg="red.400" h="40vh" w="60vh" justify="flex-end"  _hover={{ bg: "teal.400",}}>
        <Box >
          <Image src='https://media1.giphy.com/media/WW33vGSPHXym7Wh80e/giphy.gif' alt='Navratri'  width="500px" height="229"/>
        </Box>
        <Text color="white" p='4' fontSize="xl" fontWeight="semibold">Navratri</Text>
        </Flex>
      </Flex>
      </Box>
      <Text position="absolute" mt="110" ml="650">
      Dedicated to Lord Shiva, this Indian festival holds great reverence among the devotees of Lord Shiva. It has a huge significance in Hindu mythology celebrated on the 14th day of the dark fortnight in the month of Phalgun. It is believed that whoever worships Lord Shiva on this day attains salvation and redemption from their sins. It is also among the most crucial festivals of India for unmarried and married women to attain marital bliss.
      <b>Significance:</b>Devotion to Lord Shiva<br/>
      <b>Key attractions:</b> Fasting and worshipping Lord Shiva<br/>
      <b>When:</b>1st March (Tuesday)<br/>
      <b>Things To Do:</b> Visit temples and witness celebrations and festivity<br/> 
      <Button colorScheme='blue' mt="3" w="50" border="2px" borderColor="green.500">Learn More</Button> 
     </Text>
    </Flex>
  )
}
export default Fest6