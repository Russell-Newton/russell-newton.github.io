import { Box, Text, VStack } from "@chakra-ui/react";

export const Experience = () => {

  return (
    <VStack>
      <Text>Experience Section</Text>
      <Box w={"85vw"} h={"110vw"}>
        <iframe width="100%" height="100%" title="Resume" src="resume.pdf?#view=fitV&scrollbar=0&toolbar=0&navpanes=0">
          <p>Error Displaying Resume. Alternative download can be found <a href="./resume.pdf">here</a>.</p>
        </iframe>
      </Box>
    </VStack>
  );
}
