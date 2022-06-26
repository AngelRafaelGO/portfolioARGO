import React from "react";
import { Box, Text, Heading, List, Link, ListItem, ListIcon } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";

import Section from "../../components/modal/motionDiv";
import "./bio.css";

function Bio() {
    return (
        <Box className="bio__main_div">
            <Section delay={0.1}>
                <Box className="bio_my_story">
                    <Box className="bio_my_story_title">
                        <Heading>Bio</Heading>
                    </Box>
                    <Text as='u' className="bio_my_story_date">1988</Text>
                    <Text>Born in Houston, Texas</Text>
                    <Text as='u' className="bio_my_story_date">2019</Text>
                    <Text>Completed a masters degree in Logic & Philosophy of Science</Text>
                    <Text>Worked for <Link className="bio_my_story_link" href="https://maisonkitsune.com/fr/" target="_blank">Maison Kitsuné</Link></Text>
                    <Box className="bio_my_story_text_box">
                        <List>
                            <ListItem className="bio_my_story_text">
                                <ListIcon as={MdKeyboardArrowRight} color='green.500' />
                                As an assistant manager
                            </ListItem>
                        </List>
                    </Box>
                    <Text as='u' className="bio_my_story_date">2021</Text>
                    <Text>During the pandemic, went to engineering school to learn code</Text>
                    <Box className="bio_my_story_text_box">
                        <List>
                            <ListItem className="bio_my_story_text">
                                <ListIcon as={MdKeyboardArrowRight} color='green.500' />
                                <Link className="bio_my_story_link" href="https://codingfactory.fr/" target="_blank">Coding Factory by ESIEE-Tech</Link>
                            </ListItem>
                        </List>
                    </Box>
                    <Text as='u' className="bio_my_story_date">2022</Text>
                    <Text>Fullstack dev intern at Play'in, by Magic Bazar</Text>
                    <Box className="bio_my_story_text_box">
                        <List>
                            <ListItem className="bio_my_story_text">
                                <ListIcon as={MdKeyboardArrowRight} color='green.500' />
                                Creation of new php scripts
                            </ListItem>
                            <ListItem className="bio_my_story_text">
                                <ListIcon as={MdKeyboardArrowRight} color='green.500' />
                                Improvement of existing php scripts
                            </ListItem>
                            <ListItem className="bio_my_story_text">
                                <ListIcon as={MdKeyboardArrowRight} color='green.500' />
                                Back-end development with Symfony
                            </ListItem>
                            <ListItem className="bio_my_story_text">
                                <ListIcon as={MdKeyboardArrowRight} color='green.500' />
                                Front-end development with React
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Section>
        </Box>
    );
}

export default Bio;