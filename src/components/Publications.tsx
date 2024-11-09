import { readFileSync } from "fs";
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
  VStack,
} from "@chakra-ui/react";
import { BibtexParser, Entry } from "bibtex-js-parser";
import React, { useEffect, useState } from "react";

const Pub = (props: Entry) => {
  return (
    <ListItem>
      <Heading size="xl" pl="3rem" textIndent="-3rem">{props.title}</Heading>
      <List pl="1.5rem" spacing="0.5em">
        {
          props.author && <ListItem>
            {props.author}{props.year && ` (${props.year})`}
          </ListItem>
        }
        {
          props.booktitle && <ListItem>
            in <Text as="span" fontStyle="italic">{props.booktitle}</Text>
          </ListItem>
        }
        {
          props.journal && <ListItem fontStyle="italic">
            {props.journal}
          </ListItem>
        }
        {
          props.doi && <ListItem>
            <a href={props.doi}>{props.doi}</a>
          </ListItem>
        }
      </List>
    </ListItem>
  )
}

export const Publications = () => {
  const [pubs, setPubs] = useState<[Entry]>();
  useEffect(() => {
    fetch("/publications.bib").then(response => response.text()).then((input) => {
        setPubs(BibtexParser.parseToJSON(input));
      }
    )
  }, [])

  return (
    <Box>
      <List spacing="2em">
        {
          pubs && pubs.map((entry) => {
            return (
              <Pub key={entry.id} {...entry} />
            )
          })
        }
      </List>
    </Box>
  )
}
