import React from "react";
import { Box, Text,Heading, Image } from '@chakra-ui/react';

import Section from "../../components/modal/motionDiv";
import reactLogo from '../../assets/logos/1174949_js_react js_logo_react_react native_icon.png';
import jsLogo from '../../assets/logos/9035061_logo_javascript_icon.png';
import nodeLogo from '../../assets/logos/1269842_development_install_javascript_js_node_icon.png';
import htmlLogo from '../../assets/logos/317755_badge_html_html5_achievement_award_icon.png';
import cssLogo from '../../assets/logos/317756_badge_css_css3_achievement_award_icon.png';
import pythonLogo from '../../assets/logos/4375050_logo_python_icon.png';
import './tech.css';

function Tech() {
    return (
        <Box className="tech__main_div">
            <Section delay={0.1}>
                <Box className="tech__mystack_div">
                    <Box className="tech__heading_div">
                        <Heading>Dev tools</Heading>
                    </Box>
                    <Box className="tech__logos_div">
                        <Box className="tech__logo_div">
                            <Image src={reactLogo}/>
                        </Box>
                        <Box className="tech__logo_div">
                            <Image src={jsLogo}/>
                        </Box>
                        <Box className="tech__logo_div">
                            <Image src={nodeLogo}/>
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
                    </Box>
                </Box>
            </Section>
        </Box>


    );
}

export default Tech;