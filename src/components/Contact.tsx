import { Box, Heading, HStack, Link, List, ListIcon, ListItem } from "@chakra-ui/react";
import { IconType } from "react-icons";
import React from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/all";
import { CapsizedText } from "./CapsizedText";

type InfoType = {
  def: string,
  display: string,
  link: string,
  icon: IconType,
}

const Info = (props: InfoType) => {
  return (
    <ListItem as={HStack}>
      <ListIcon as={props.icon} color="brightBlue.200" fontSize={{ base: 18, sm: 26, md: 30, lg: 46, xl: 54 }}/>
      <CapsizedText capsizeOptions={{ capHeight: { base: 14, sm: 20, md: 24, lg: 36, xl: 42 } }}>
        <Link
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.display}
        </Link>
      </CapsizedText>
    </ListItem>
  );
};

const info: Array<InfoType> = [
  {
    def: "Email",
    display: "Russell.Newton01@gmail.com",
    link: "mailto:russell.newton01@gmail.com",
    icon: SiGmail,
  },
  {
    def: "LinkedIn",
    display: "RussellNewton01",
    link: "https://www.linkedin.com/in/russellnewton01/",
    icon: SiLinkedin,
  },
  {
    def: "GitHub",
    display: "Russell-Newton",
    link: "https://github.com/Russell-Newton",
    icon: SiGithub,
  },
]

export const Contact = () => {

  return (
    <Box>
      <Heading fontSize={{ base: 36, sm: 54, md: 81 }} as="h1">Get in Touch!</Heading>

      <List pl={{ base: "0.5rem", sm: "1rem", md: "2rem", lg: "6rem" }} spacing="0.25em">
        {
          info.map((value) => (
            <Info {...value} key={`contact-${value.def}`}/>
          ))
        }
      </List>
    </Box>
  );
}
