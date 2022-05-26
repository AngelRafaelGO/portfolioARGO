import React from "react";
import { Box, Text,Heading, Image } from '@chakra-ui/react';

import Section from "../../components/modal/motionDiv";
import './tech.css';
import { reactLogo, jsLogo, nodeLogo, htmlLogo, cssLogo, pythonLogo, sqlLogo, phpLogo, symfonyLogo } from '../../assets/logos';

function Tech() {
    return (
        <Box className="tech__main_div">
            <Section delay={0.1}>
                <Box className="tech__tech_div">
                    <Box className="tech__heading_div">
                        <Heading>My dev tools</Heading>
                        <Text className="tech__subtxt">These are the main technologies I used in my projects</Text>
                    </Box>
                    <Box className="tech__logos_div">
                        <Box className="tech__logo_div">
                            <Image src={jsLogo}/>
                        </Box>
                        <Box className="tech__logo_div">
                            <Image src={reactLogo}/>
                        </Box>
                        <Box className="tech__logo_div">
                            <Image src={nodeLogo}/>
                        </Box>
                        <Box className="tech__logo_div">
                            <Image src={phpLogo}/>
                        </Box>
                        <Box className="tech__logo_div">
                            <Image src={symfonyLogo}/>
                        </Box>
                        <Box className="tech__logo_div">
                            <Image src={pythonLogo}/>
                        </Box>
                        <Box className="tech__logo_div">
                            <Image src={htmlLogo}/>
                        </Box>
                        <Box className="tech__logo_div">
                            <Image src={cssLogo}/>
                        </Box>
                        <Box className="tech__logo_div">
                            <Image src={sqlLogo}/>
                        </Box>
                    </Box>
                </Box>
            </Section>
        </Box>
    );
}

export default Tech;