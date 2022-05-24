import React from "react";

import { Box, Text, Heading, FormControl, Input, Textarea } from '@chakra-ui/react';
import Section from '../../components/modal/motionDiv';
import './contact.css';

function Contact() {
    return (
        <Box className="contact__main_div">
            <Section>
                <Box>
                    <Heading className="contact__main_heading">Send me a message !</Heading>
                    <Box>
                        <FormControl className="contact__form-control">
                            <Input id="name" type="text" placeholder="Name" />
                            <Input id="email" type="email" placeholder="Email" />
                            <Textarea placeholder="Message" size="sm" />
                            <Input className="contact__send_input" id="contact-send" type="submit" />
                        </FormControl>
                    </Box>
                </Box>
            </Section>
        </Box>
    );
}

export default Contact;
