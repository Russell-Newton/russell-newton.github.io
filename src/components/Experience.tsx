import { Text, VStack } from "@chakra-ui/react";

export const Experience = () => {

  return (
    <VStack>
      <Text>Experience Section</Text>
      <iframe width="850px" height="1100px" title="Resume" src="resume.pdf?#view=fitH&scrollbar=0&toolbar=0&navpanes=0">
        <p>Error Displaying Resume. Alternative download can be found <a href="./resume.pdf">here</a>.</p>
      </iframe>
    </VStack>
  );
}
