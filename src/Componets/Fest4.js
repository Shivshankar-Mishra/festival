import React from "react";
import { useMediaQuery, Box } from "@chakra-ui/react";
import { Flex,Text,Image,Button } from "@chakra-ui/react";



function Fest5() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
    maxWidth={{ base: "100vh", md: "130vh", xl:"130vh"}} >
      <Box alignSelf="start" px="32" py="16">
      <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
        <Flex rounded="xl" direction="column" m={5} mt={5} bg="red.400" h="40vh" w="60vh" justify="flex-end"  _hover={{ bg: "teal.400",}}>
        <Box >
          <Image src='https://cdn.dribbble.com/users/3476934/screenshots/15825901/happy_navratri.gif' alt='Navratri'  width="500px" height="229"/>
        </Box>
        <Text color="white" p='4' fontSize="xl" fontWeight="semibold">Navratri</Text>
        </Flex>
      </Flex>
      </Box>
      <Text position="absolute" mt="110" ml="650">
      Navratri is one of the most important festivals of India. This festival is celebrated by all people throughout India in different ways. In Gujarat, it is a nine-day celebration of rejuvenating Garba nights and highly energetic Dandiya Raas dances. People are dressed in beautiful, colorful traditional clothes and the environment is very youthful and invigorating. Fasting is a famous tradition of Hindu religion and is associated with a scientific fact. Whenever there is a change in season, one should fast to give rest to their digestive system and boost their immunity for the next season.
      <b>Significance:</b>It represents the celebration of the Goddess Amba (Power) in nine different forms.<br/>
      <b>Key attractions:</b> The 9 days of dance festivities in Gujarat, the exquisite Chaniya Choli’s (traditional skirt & blouse), and the Gujarati cuisine – Sabudana Khichdi, Mandvi Paak, Singoda ki Kheer, and Potato Wafers<br/>
      <b>When:</b>The first nine days of the month of Ashwin according to the Hindu lunisolar calendar, which corresponds to September or October of the Gregorian calendar<br/>
      <b>Things To Do:</b>9-days fasting, visit temples and religious places, 8th and 9th day of Navratri are celebrated with Kanya Pujan, attend dandiya nights<br/> 
      <Button colorScheme='blue' mt="3" w="50" border="2px" borderColor="green.500">Learn More</Button> 
     </Text>
    </Flex>
  )
}
export default Fest5