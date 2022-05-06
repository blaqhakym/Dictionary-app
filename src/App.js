import { Box, Fade, Flex, Heading, Input, Link } from "@chakra-ui/react";

import axios from "axios";
import { useEffect, useState } from "react";
import Meaning from "./components/Meaning";
import theme from "./theme";

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [match, setMatch] = useState("");
  const [data, setData] = useState([]);

  const changeWord = (e) => {
    setWord(e.target.value);
  };

  const dictApi = async () => {
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        const data = res.data[0];
        const mean = data.meanings;
        const matc = res?.data.word;
        setData(data);
        setMeaning(mean);
        setMatch(matc);
      })
      .catch((err) => console.log());
  };

  useEffect(() => {
    dictApi();
  }, [word]);

  return (
    <Box>
      <Flex direction="column" align="center" bg="rgb(35,78,82)" gap={7}>
        <Flex
          wrap="wrap"
          gap={7}
          paddingBottom={10}
          fontWeight="100"
          direction="column"
          justify="space-between"
          align="center"
        >
          <Heading as="h1" color="gray.400">
            {word ? word : "Hakym Dictionary"}
          </Heading>
          <Input
            bg="white"
            placeholder="Enter word"
            size="lg"
            w="500px"
            onChange={changeWord}
          />
        </Flex>
        {word && (
            <Meaning word={word} match={match} meaning={meaning} data={data} />
        )}
      </Flex>
      {word && (
        <Flex
          justify="center"
          alignItems="center"
          w="100%"
          bg="blue.500"
          fontSize="lg"
          gap="100px"
          p={3}
          color="white"
          position="sticky"
          bottom="0"
          left={0}
        >
          <Link textAlign="center">Dictionary</Link>
          <Link textAlign="center">Thesaurus</Link>
        </Flex>
      )}
    </Box>
  );
}

export default App;
