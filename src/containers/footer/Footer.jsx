import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { AiOutlineCopyright } from "react-icons/ai";
import "./footer.css";

function Footer() {
    return (
        <Box className="main__footer_div">
            <Box className="footer__copyright">
                <Text>Angel Rafael Gonzalez.</Text>
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