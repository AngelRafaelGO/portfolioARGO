import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

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
                    <Text as='u'>1988</Text>
                    <Text>Born in Houston, Texas</Text>
                    <Text as='u'>2019</Text>
                    <Text>Completed a masters degree in Logic & Philosophy of Science</Text>
                    <Text>Worked for Maison Kitsuné </Text>
                    <Text as='u'>2021</Text>
                    <Text>During the pandemic, went to engineering school to learn code (ESIEE-Tech)</Text>
                    <Text as='u'>2022</Text>
                    <Text>Fullstack dev intern at Play'in, by Magic Bazar</Text>
                </Box>
            </Section>
        </Box>
    );
}

export default Bio;