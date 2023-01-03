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

const fontSize = 54;

const Info = (props: InfoType) => {
  return (
    <ListItem as={HStack}>
      <ListIcon as={props.icon} color="brightBlue.200"/>
      <CapsizedText capsizeOptions={{ capHeight: 42 }}>
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
      <Heading fontSize={fontSize * 1.5} as="h1">Get in Touch!</Heading>

      <List fontSize={fontSize} pl="6rem" spacing="0.25em">
        {
          info.map((value) => (
            <Info {...value} key={`contact-${value.def}`}/>
          ))
        }
      </List>
    </Box>
  );
}
