import React from "react";
import {Box, Text} from "@chakra-ui/react";
import {AiOutlineCopyright} from "react-icons/ai";
import "./footer.css";

function Footer() {
    return (
        <Box className="main__footer_div">
            <Box className="footer__copyright">
                <Text><AiOutlineCopyright /></Text>
                <Text>2022</Text>
                <Text>Angel Rafael Gonzalez.</Text>
                <Text>All Rights Reserved</Text>
            </Box>
        </Box>
    );
}

export default Footer;