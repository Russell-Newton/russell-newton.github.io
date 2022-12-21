import { Box, Flex, Heading, Link, List, ListIcon, ListItem } from "@chakra-ui/react";
import { IconType } from "react-icons";
import React from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/all";
import { VCenter } from "./SpacingTools";

type InfoType = {
  def: string,
  display: string,
  link: string,
  icon: IconType,
}

const fontSize = 54;

const Info = (props: InfoType) => {
  return (
    <ListItem>
        <Flex>
          <VCenter>
            <ListIcon as={props.icon} color="brightBlue.200" pb={`${fontSize * 0.2}px`}/>
          </VCenter>
          <Link
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.display}
          </Link>
        </Flex>
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

      <List fontSize={fontSize} pl="6rem">
        {
          info.map((value) => (
            <Info {...value} key={`contact-${value.def}`}/>
          ))
        }
      </List>
    </Box>
  );
}
