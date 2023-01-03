import {
  Box,
  BoxProps,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import { HorizontalLR, VCenter } from "./SpacingTools";
import { FaAngleDoubleRight } from "react-icons/all";
import React from "react";
import { CapsizedText } from "./CapsizedText";

const GTVerticalLogo = (props: BoxProps) => {

  const textColor = useColorModeValue("#002a4e", "#ffffff")

  return (
    <Box {...props}>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324 324">
        <defs>
          <style>{`.cls-1{fill:#aa985d;}.cls-2{fill:${textColor};}`}</style>
        </defs>
        <path className="cls-1"
              d="M247.34,157.38h0a4.11,4.11,0,0,0,0,8.21,4.11,4.11,0,0,0,0-8.21Zm0,7.57a3.47,3.47,0,0,1,0-6.93h0a3.37,3.37,0,0,1,3.28,3.48A3.33,3.33,0,0,1,247.34,165Z"/>
        <path className="cls-1"
              d="M248.07,161.62v0a1.14,1.14,0,0,0,.89-1.11,1.08,1.08,0,0,0-.42-.95,2.37,2.37,0,0,0-1.41-.34,7.6,7.6,0,0,0-1.3.11v4.56h.73v-2h.51a.85.85,0,0,1,1,.8,3.25,3.25,0,0,0,.31,1.16h.77a3.26,3.26,0,0,1-.29-1.13C248.74,162.06,248.47,161.7,248.07,161.62Zm-1-.29h-.53v-1.54a3.26,3.26,0,0,1,.53,0c.82,0,1.11.4,1.11.8C248.2,161.11,247.69,161.33,247.09,161.33Z"/>
        <path className="cls-1" d="M117.72,23.82h0Z"/>
        <path className="cls-1"
              d="M136.63,68.61v35.74H155.8l2-10.72h8.63c-3.16,16.35-19.42,27.66-40,27.66-1.41,0-2.84-.06-4.26-.17-11.41-.88-21.9-4.55-29.55-10.35-8.43-6.39-12.87-14.94-12.82-24.71A36.48,36.48,0,0,1,92.36,58.65a46.73,46.73,0,0,1,29-11.34c.69,0,1.39,0,2.08,0a60.08,60.08,0,0,1,37,13.53,9.8,9.8,0,0,0,.77.62,8.19,8.19,0,0,1,.73.59l.3.25h22V23.8H161.93v11c-9.39-6-25.46-12.08-44.21-12.08h-.31a77.26,77.26,0,0,0-54.5,22.89C51.29,57.44,45,71.88,45.19,86.29c.2,15.5,7.66,29.94,21,40.65,12.78,10.26,30.1,16.14,47.52,16.14,2.15,0,4.33-.09,6.48-.26,17.25-1.4,32.54-5.34,43.34-11.13l0,4.77h23.69V93.65h8.18V143.3H183.05v22.32h55.1V143.3H225.8V93.63h27.9l2,10.72h19.26V68.61ZM117.72,23.82h0Z"/>
        <path className="cls-2"
              d="M65.5,189.36A27.11,27.11,0,0,1,74,190.69a19,19,0,0,1,6.5,3.41,1.3,1.3,0,0,1,.5,1v8.62a.64.64,0,0,1-.72.72H73.83a.64.64,0,0,1-.72-.72v-4.23a.69.69,0,0,0-.29-.58A13.48,13.48,0,0,0,65.28,197q-7.91,0-10.13,6.54Q54,207.1,54,214.71c0,5.42.31,9.1.94,11.07a9.13,9.13,0,0,0,3.41,4.78,11.47,11.47,0,0,0,6.57,1.61q5.31,0,8-1.72a1.3,1.3,0,0,0,.72-1.15v-9.56a.38.38,0,0,0-.43-.43H65.42a.63.63,0,0,1-.71-.72v-5.74a.63.63,0,0,1,.71-.72H81.08a.64.64,0,0,1,.72.72v20.61a2,2,0,0,1-.93,1.73q-6.39,4.59-16.09,4.6-14.45,0-18.18-11.43-1.22-3.66-1.22-13.65,0-9.41,1.37-13.5Q50.55,189.36,65.5,189.36Z"/>
        <path className="cls-2"
              d="M103.4,203.58a15.65,15.65,0,0,1,9,2.55,13.14,13.14,0,0,1,5.18,7,35.88,35.88,0,0,1,1.15,10.42c0,.48-.27.72-.79.72H96.65a.38.38,0,0,0-.43.43,7.8,7.8,0,0,0,.5,2.66q1.8,5.23,7.76,5.24a10.46,10.46,0,0,0,8.12-3.3c.38-.39.74-.43,1.08-.15l4.23,3.74a.66.66,0,0,1,.08,1q-5,5.88-14.23,5.89a16.11,16.11,0,0,1-9.23-2.55,13.06,13.06,0,0,1-5.21-7.08,27.79,27.79,0,0,1-1.22-8.48,28.13,28.13,0,0,1,1.15-8.55,12.88,12.88,0,0,1,5.21-7A15.77,15.77,0,0,1,103.4,203.58Zm.07,6.82q-5.31,0-6.82,4.46a9.19,9.19,0,0,0-.43,2.94.38.38,0,0,0,.43.44h13.58a.39.39,0,0,0,.43-.44,9.47,9.47,0,0,0-.43-2.94,6.24,6.24,0,0,0-2.52-3.27A7.51,7.51,0,0,0,103.47,210.4Z"/>
        <path className="cls-2"
              d="M139.11,203.58a15.91,15.91,0,0,1,9,2.51,12.88,12.88,0,0,1,5.21,7,32.36,32.36,0,0,1,0,17.1,12.81,12.81,0,0,1-5.21,7,17.51,17.51,0,0,1-18.1,0,12.81,12.81,0,0,1-5.21-7,32.36,32.36,0,0,1,0-17.1,12.88,12.88,0,0,1,5.21-7A16,16,0,0,1,139.11,203.58Zm0,7.18c-3.41,0-5.58,1.51-6.54,4.53a22.27,22.27,0,0,0-.72,6.39,21.92,21.92,0,0,0,.72,6.4,6.93,6.93,0,0,0,13,0,21.92,21.92,0,0,0,.72-6.4,22.27,22.27,0,0,0-.72-6.39Q144.13,210.76,139.11,210.76Z"/>
        <path className="cls-2"
              d="M180.31,203.87a15.74,15.74,0,0,1,3.37.36c.48.09.72.33.72.71v6.26c0,.62-.28.86-.86.71a28.22,28.22,0,0,0-4.24-.57q-7.76,0-7.76,8.91v11.27a.39.39,0,0,0,.44.44h3.37a.63.63,0,0,1,.72.71v5.61a.64.64,0,0,1-.72.72H160a.64.64,0,0,1-.72-.72v-5.61A.63.63,0,0,1,160,232h3.09a.39.39,0,0,0,.43-.44V211.84a.38.38,0,0,0-.43-.43H160a.64.64,0,0,1-.72-.72v-5.6a.64.64,0,0,1,.72-.72h10.85a.63.63,0,0,1,.71.72v3.59h.08A9.55,9.55,0,0,1,180.31,203.87Z"/>
        <path className="cls-2"
              d="M200.29,203.58q6.41,0,9,4.09h.08v-2.58a.63.63,0,0,1,.71-.72h10.85a.64.64,0,0,1,.72.72v5.6a.64.64,0,0,1-.72.72h-3.09a.38.38,0,0,0-.43.43v25q0,7.54-4.13,11.71t-12,4.17a19.08,19.08,0,0,1-7.15-1.4,13.24,13.24,0,0,1-5.42-3.78.65.65,0,0,1,.07-1L193,242.3a.64.64,0,0,1,1.07,0,10.7,10.7,0,0,0,7.55,3.23q7.75,0,7.76-8.26V234h-.08q-2.58,4-9,4a12.47,12.47,0,0,1-7.4-2.15,12.12,12.12,0,0,1-4.38-6.25,29.09,29.09,0,0,1-1.15-8.84,28.75,28.75,0,0,1,1.15-8.76Q191.24,203.58,200.29,203.58Zm2.09,7.18a5.88,5.88,0,0,0-6.11,4.39,17.49,17.49,0,0,0-.79,5.67,16.78,16.78,0,0,0,.79,5.68,6.47,6.47,0,0,0,12.29,0,17,17,0,0,0,.79-5.68,17.77,17.77,0,0,0-.79-5.67A5.93,5.93,0,0,0,202.38,210.76Z"/>
        <path className="cls-2"
              d="M226.4,204.37h10.85a.64.64,0,0,1,.72.72v26.43a.38.38,0,0,0,.43.44h3.09a.63.63,0,0,1,.72.71v5.61a.64.64,0,0,1-.72.72H226.4a.64.64,0,0,1-.72-.72v-5.61a.63.63,0,0,1,.72-.71h3.09a.38.38,0,0,0,.43-.44V211.84a.38.38,0,0,0-.43-.43H226.4a.64.64,0,0,1-.72-.72v-5.6A.64.64,0,0,1,226.4,204.37Zm4.24-14.22h6.61a.63.63,0,0,1,.72.71v6.25a.64.64,0,0,1-.72.72h-6.61a.64.64,0,0,1-.72-.72v-6.25A.63.63,0,0,1,230.64,190.15Z"/>
        <path className="cls-2"
              d="M260.39,203.58q7.83,0,11.1,2.8t3.27,9.27v15.87a.39.39,0,0,0,.43.44h3.09a.63.63,0,0,1,.72.71v5.61a.64.64,0,0,1-.72.72H268a.64.64,0,0,1-.72-.72v-2.52h-.07q-2.81,4-9.63,4a12.47,12.47,0,0,1-8.29-2.73q-3.27-2.73-3.27-7.91c0-3.68,1.21-6.45,3.62-8.29s5.81-2.77,10.17-2.77h6.9a.38.38,0,0,0,.43-.43V216.3q0-3.17-1.55-4.6T260,210.26a16.39,16.39,0,0,0-3.74.43.45.45,0,0,0-.36.51v3.08a.64.64,0,0,1-.72.72H249a.64.64,0,0,1-.72-.72V207a1,1,0,0,1,.58-.94A26.54,26.54,0,0,1,260.39,203.58Zm6.33,20.55h-5.61q-7.4,0-7.4,4.74c0,2.92,2,4.38,5.89,4.38q7.54,0,7.55-5.89v-2.8A.38.38,0,0,0,266.72,224.13Z"/>
        <path className="cls-2"
              d="M119.92,251.7h38.59a.63.63,0,0,1,.71.71v11.48a.63.63,0,0,1-.71.72h-6.17a.64.64,0,0,1-.72-.72v-4.3a.38.38,0,0,0-.43-.43h-7.31a.38.38,0,0,0-.43.43V293a.38.38,0,0,0,.43.43h3.73a.63.63,0,0,1,.71.71v5.6a.63.63,0,0,1-.71.71H130.82a.63.63,0,0,1-.71-.71v-5.6a.63.63,0,0,1,.71-.71h3.73A.38.38,0,0,0,135,293V259.59a.38.38,0,0,0-.43-.43h-7.31a.38.38,0,0,0-.43.43v4.3a.64.64,0,0,1-.72.72h-6.17a.63.63,0,0,1-.71-.72V252.41A.63.63,0,0,1,119.92,251.7Z"/>
        <path className="cls-2"
              d="M171.17,265.11a15.71,15.71,0,0,1,9,2.54,13.12,13.12,0,0,1,5.16,7A35.35,35.35,0,0,1,186.52,285c0,.48-.26.72-.79.72h-21.3a.38.38,0,0,0-.43.43,7.8,7.8,0,0,0,.5,2.66q1.8,5.23,7.75,5.23a10.43,10.43,0,0,0,8.1-3.3c.38-.38.74-.43,1.08-.14l4.23,3.73a.65.65,0,0,1,.07,1q-5,5.88-14.2,5.88a16.15,16.15,0,0,1-9.22-2.54,13,13,0,0,1-5.19-7.07,27.35,27.35,0,0,1-1.22-8.46,28.28,28.28,0,0,1,1.14-8.53,12.82,12.82,0,0,1,5.2-7A15.76,15.76,0,0,1,171.17,265.11Zm.07,6.81c-3.53,0-5.81,1.48-6.81,4.45a9.19,9.19,0,0,0-.43,2.94.38.38,0,0,0,.43.43H178a.38.38,0,0,0,.43-.43,9.47,9.47,0,0,0-.43-2.94,6.18,6.18,0,0,0-2.52-3.26A7.47,7.47,0,0,0,171.24,271.92Z"/>
        <path className="cls-2"
              d="M207.35,265.11a23.62,23.62,0,0,1,11.9,2.72,1,1,0,0,1,.57.94v7.88a.63.63,0,0,1-.71.72H213a.64.64,0,0,1-.72-.72V273.5a.59.59,0,0,0-.35-.5,10.21,10.21,0,0,0-4.38-.72c-3.73,0-6.09,1.51-7.1,4.52a21.32,21.32,0,0,0-.72,6.38,21.74,21.74,0,0,0,.72,6.46c1,3,3.37,4.44,7.1,4.44a10.63,10.63,0,0,0,4.38-.64.51.51,0,0,0,.35-.51v-3.22A.64.64,0,0,1,213,289h6.1a.63.63,0,0,1,.71.72v8a1,1,0,0,1-.57.93,25.37,25.37,0,0,1-11.9,2.65q-11.7,0-14.71-9.32a28.83,28.83,0,0,1-1.07-8.75,27.89,27.89,0,0,1,1.07-8.53,12.94,12.94,0,0,1,5.35-7.07A16.87,16.87,0,0,1,207.35,265.11Z"/>
        <path className="cls-2"
              d="M226.35,251.7h10.83a.63.63,0,0,1,.71.71v16.71H238q2.79-4,9-4a11.1,11.1,0,0,1,8.64,3.58,13.22,13.22,0,0,1,3.26,9.26V293a.39.39,0,0,0,.44.43h2.94a.63.63,0,0,1,.71.71v5.6a.63.63,0,0,1-.71.71H247.29a.63.63,0,0,1-.72-.71v-5.6a.63.63,0,0,1,.72-.71h3.08a.38.38,0,0,0,.43-.43v-13.2a8.5,8.5,0,0,0-1.65-5.49,6.63,6.63,0,0,0-9.57,0,8.34,8.34,0,0,0-1.69,5.49V293a.39.39,0,0,0,.43.43h3.09a.63.63,0,0,1,.71.71v5.6a.63.63,0,0,1-.71.71H226.35a.63.63,0,0,1-.72-.71v-5.6a.63.63,0,0,1,.72-.71h3.08a.38.38,0,0,0,.43-.43V259.16a.38.38,0,0,0-.43-.43h-3.08a.64.64,0,0,1-.72-.72v-5.6A.63.63,0,0,1,226.35,251.7Z"/>
        <path className="cls-2"
              d="M271.54,293.44h0a3.51,3.51,0,1,0,3.46,3.5A3.47,3.47,0,0,0,271.52,293.44Zm0,6.48a3,3,0,0,1,0-5.94h0a2.89,2.89,0,0,1,2.8,3A2.86,2.86,0,0,1,271.54,299.92Z"/>
        <path className="cls-2"
              d="M272.16,297.07v0a1,1,0,0,0,.76-1,.91.91,0,0,0-.36-.81,2,2,0,0,0-1.21-.3,8,8,0,0,0-1.11.09V299h.63V297.3h.43a.73.73,0,0,1,.84.69,2.69,2.69,0,0,0,.27,1h.65a3.37,3.37,0,0,1-.25-1C272.73,297.44,272.5,297.13,272.16,297.07Zm-.84-.25h-.45v-1.33a3.79,3.79,0,0,1,.45,0c.7,0,.95.35.95.69S271.83,296.82,271.32,296.82Z"/>
      </svg>
    </Box>
  );
};

interface EduProps extends BoxProps {
  school: string,
  startDate: string,
  endDate?: string,
  degree: string,
}

const Edu = (props: EduProps) => {
  return (
    <VStack align="left" fontSize={20} w="100%">
      <Heading size="2xl">{props.degree}</Heading>
      <Heading as="h3" size="lg" pl="1.5rem">{props.school}</Heading>
      <Heading as="h3" size="md" pl="3rem">{props.startDate} - {props.endDate || "Present"}</Heading>
      <Box>
        <List pl="3rem" spacing="0.25em">
          {
            React.Children.map(props.children, (value) => (
              <ListItem key={`${props.school}_${props.degree}`} as={HStack}>
                <ListIcon as={FaAngleDoubleRight} color="brightBlue.200"/>
                <CapsizedText capsizeOptions={{ capHeight: 15 }}>
                  {value}
                </CapsizedText>
              </ListItem>
            ))
          }
        </List>
      </Box>
    </VStack>
  )
}

const Grad = () => {
  return (
    <Edu
      school="Georgia Institute of Technology"
      startDate="Jan. 2023"
      degree="Master of Science in Computer Science"
    >
      <Text as="span">Expected Graduation: May 2024</Text>
      <Text as="span">Concentration: Computer Graphics</Text>
    </Edu>
  );
};

const Undergrad = () => {
  return (
    <Edu
      school="Georgia Institute of Technology"
      startDate="Aug. 2020"
      endDate="Dec. 2022"
      degree="Bachelor of Science in Computer Science"
    >
      <Text as="span">Graduated with Full Honors</Text>
      <Text as="span">Concentrations: Artificial Intelligence, Modeling & Simulation</Text>
      <Text as="span">GPA: 3.87</Text>
    </Edu>
  );
};

export const Education = () => {
  return (
    <HorizontalLR>
      <VCenter>
        <VStack>
          <Grad/>
          <Box h="2rem"></Box>
          <Undergrad/>
        </VStack>
      </VCenter>

      <VCenter>
        <GTVerticalLogo
          boxSize="xl"
          mr="2em"
          display={{ "xl": "block", "base": "none" }}
        />
      </VCenter>
    </HorizontalLR>
  )
}
