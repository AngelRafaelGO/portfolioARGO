import React from "react";
import { Box, Heading, FormControl, Input, Textarea } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

import Section from '../../components/modal/motionDiv';
import './contact.css';

function Contact() {

    const navigate = useNavigate();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_kadw3uk', 'template_y5uhc5m', e.target, 'BPkswuDA4tvKz_uH7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

        navigate('/thanks');
    }

    return (
        <Box className="contact__main_div">
            <Section>
                <Box>
                    <Heading className="contact__main_heading">Send me a message !</Heading>
                    <Box>
                        <form onSubmit={sendEmail} name="my_site">
                            <FormControl className="contact__form-control">
                                <Input id="name" type="text" placeholder="Name" name="name" />
                                <Input id="email" type="email" placeholder="Email" name="email" />
                                <Textarea placeholder="Message" size="sm" name="message" />
                                <Input className="contact__send_input" id="contact-send" type="submit"/>
                            </FormControl>
                        </form>
                    </Box>
                </Box>
            </Section>
        </Box>
    );
}

export default Contact;
