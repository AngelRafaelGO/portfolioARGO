import React from "react";
import {Heading, Box, SimpleGrid} from "@chakra-ui/react";
import Section from "../../components/modal/motionDiv";

import "./works.css";
import {WorkGridItem} from "../../components/modal/grid_item";
import UkraineFlag from '../../assets/ukraine_flag.jpg'
import AlienMorph from '../../assets/alienMorphSS.PNG'

function Works() {
    return (
        <Box className="works--main-div">
            <Section delay={0.1}>
                <Box className="works--main-heading">
                    <Heading>Works</Heading>
                </Box>
                <Box className="works__works_box">
                    <SimpleGrid columns={2} spacing={10}>
                        <WorkGridItem
                            title="Ukraine War API"
                            href="https://ukrainewarnews.herokuapp.com/"
                            thumbnail={UkraineFlag}
                        >
                        </WorkGridItem>

                        <WorkGridItem
                            title="Magic Shop"
                            thumbnail={UkraineFlag}
                        >
                        </WorkGridItem>

                        <WorkGridItem
                            title="Big Mic"
                            thumbnail={AlienMorph}
                        >
                        </WorkGridItem>

                        <WorkGridItem
                            title="Alien Invasion"
                            thumbnail={AlienMorph}
                        >
                        </WorkGridItem>

                        <WorkGridItem
                            title="Ultrahackathon 2022"
                            thumbnail={AlienMorph}
                        >
                        </WorkGridItem>

                        <WorkGridItem
                            title="This Website"
                            thumbnail={AlienMorph}
                        >
                        </WorkGridItem>
                    </SimpleGrid>
                </Box>
            </Section>
        </Box>
    );
}

export default Works;