import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Meaning = ({ word, meaning, match, data: { phonetics } }) => {
  return (
    <Stack
      spacing="10px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="white"
      w={{ base: "500px", md: "700px", lg: "900px" }}
      borderRadius={10}
      p={10}
    >
      {meaning.map(({ antonyms, partOfSpeech, definitions, synonyms }, ind) => (
        <Box key={ind}>
          
          <Flex
            gap={5}
            
            justify="space-between"
            align="end"
            width="fit-content"
            marginBottom={5}
          >
            <Text fontSize="48px" color="#303336" fontWeight="700">
              {word}
            </Text>
            <Text
              fontSize="26px"
              color="#4a7d95"
              fontWeight="700"
              paddingBottom={2}
            >
              {partOfSpeech}
            </Text>
          </Flex>
          <Box color="#265667" fontSize="22px" fontWeight="700">
            Definition of <i>{word} </i>
          </Box>
          <Box paddingTop={4}>
            {definitions.map((def, ind) => (
              <Box
                key={ind}
                color="#303336"
                fontSize="22px"
                fontWeight="400px"
                marginBottom={4}
                lineHeight="30px"
                textAlign='justify'
              >
                <b>{ind + 1}.</b> {def.definition}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
      <Text
        color="#265667"
        fontSize="22px"
        fontWeight="700"
        marginBottom={3}
        marginTop={10}
      >
        Synonyms for <i>{word}</i>
      </Text>
      {meaning.map(({ antonyms, partOfSpeech, definitions, synonyms }, ind) => (
        <Text
          key={ind}
          color="#303336"
          fontSize="22px"
          fontWeight="400px"
          marginBottom={4}
          lineHeight="30px"
        >
        {synonyms.map(syn=> syn + ' ')}  
        </Text>
      ))}
    </Stack>
  );
};

export default Meaning;
