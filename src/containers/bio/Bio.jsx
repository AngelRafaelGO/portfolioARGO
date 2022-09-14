import React from "react";
import {Box, Text, Heading, List, Link, ListItem, ListIcon, useColorModeValue} from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";

import Section from "../../components/modal/motionDiv";
import "./bio.css";

function Bio() {
    return (
        <Box className="general__div" bg={useColorModeValue('#D8BEAF', '#29282E')}>
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
                        <Box className="bio_my_story_text_box">
                            <List>
                                <ListItem className="bio_my_story_text">
                                    <ListIcon as={MdKeyboardArrowRight} color='green.500' />
                                    University of Salamanca -> Bachelor
                                </ListItem>
                                <ListItem className="bio_my_story_text">
                                    <ListIcon as={MdKeyboardArrowRight} color='green.500' />
                                    La Sorbonne -> Master
                                </ListItem>
                            </List>
                        </Box>
                        <Text>Worked for <Link className="bio_my_story_link" href="https://maisonkitsune.com/fr/" target="_blank" rel="noopener">Maison Kitsuné</Link></Text>
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
                                    <Link className="bio_my_story_link" href="https://codingfactory.fr/" target="_blank" rel="noopener">Coding Factory by ESIEE-Tech</Link>
                                </ListItem>
                            </List>
                        </Box>
                        <Text as='u' className="bio_my_story_date">2022</Text>
                        <Text>Internship -> Full Stack dev at <Link className="bio_my_story_link" href="https://www.play-in.com/" target="_blank" rel="noopener">Playin, by Magic Bazar</Link></Text>
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
                        <Text>Contrat Pro -> Full Stack dev at <Link className="bio_my_story_link" href="https://infotel.com/" target="_blank" rel="noopener">Infotel</Link></Text>
                        <Box className="bio_my_story_text_box">
                            <List>
                                <ListItem className="bio_my_story_text">
                                    <ListIcon as={MdKeyboardArrowRight} color='green.500' />
                                    Back-end development with Nest.js
                                </ListItem>
                                <ListItem className="bio_my_story_text">
                                    <ListIcon as={MdKeyboardArrowRight} color='green.500' />
                                    Front-end development with React
                                </ListItem>
                                <ListItem className="bio_my_story_text">
                                    <ListIcon as={MdKeyboardArrowRight} color='green.500' />
                                    Unit testing
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Section>
            </Box>
        </Box>
    );
}

export default Bio;