import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineCopyright } from "react-icons/ai";

import "./footer.css";

function Footer() {
    return (
        <Box className="main__footer_div"
             bg={useColorModeValue('#008F8C', '#F2A516')}
             color={useColorModeValue('white', 'black')}>
            <Box className="footer__copyright">
                <Text>Angel Rafael Gonzalez</Text>
                <Text>All Rights Reserved</Text>
                <Box className="footer__copyright_logo">
                    <AiOutlineCopyright/>
                    <Text>2022</Text>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
