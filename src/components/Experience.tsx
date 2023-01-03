import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";

export const Experience = () => {
  return (
    <VStack>
      <Heading>Resume (<Link href="./resume.pdf">Download</Link>)</Heading>
      <Box w={"85vw"} h={"110vw"}>
        <iframe width="100%" height="100%" title="Resume" src="resume.pdf?#view=fitV&scrollbar=0&toolbar=0&navpanes=0">
          <Text>Error displaying my Resume. Please click the download link above to view it.</Text>
        </iframe>
      </Box>
    </VStack>
  );
}
