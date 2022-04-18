import React, { useState } from "react";
import { Box,IconButton, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { VscArrowRight } from "react-icons/vsc";
import { BsHeart } from "react-icons/bs";

import Section from '../../components/modal/motionDiv'
import myPhoto from "../../assets/my_picture.png";
import amyIdle from "../../assets/amy_idle.gif"
import "./header.css";

function Header() {

    let counter = 0;
    const [likeCount, setLikeCount] = useState(counter);
    function setCounter() {
        setLikeCount(likeCount + 1);
    }

    return (
        <Box className="header__main_div">
            <Section delay={0.1}>
                <Box  className="header__text" bg={useColorModeValue('red.200', 'gray.700')}>
                    <Text>Hello! I'm a fullstack developer student based in Paris &#128681;</Text>
                </Box>
            </Section>
            <Section delay={0.1}>
                <Box className="header__my_information">
                    <Box className="header__about_me">
                        <Heading>About me</Heading>
                        <Text>I've always been a tech enthusiast, since I was a teen &#129299;</Text>
                        <Text>I design and build web projects that are colorful and minimalistic, ergonomic
                            and easy to read. I do my best to write clean an maintainable code</Text>
                        <Text>I also build API's</Text>
                        <Text>When I'm not doing work, I enjoy developing games, playing them,
                            cycling, running and playing board games. I'm a fan of sci-fi movies and
                            european literature</Text>
                    </Box>
                    <Image className="header__my_photo" boxSize="15%" borderRadius="full" src={myPhoto}
                           alt="angel's picture" />
                </Box>
            </Section>
            <Section delay={0.1}>
                <Box className="header__amy_container">
                    <Box>
                        <Box className="header__amy_container_text">
                            <Text>This is Amy the nurse, I made her</Text>
                           <VscArrowRight className="header__amy_arrow" />
                        </Box>
                        <Box className="header__amy_like_button">
                            <Text className="header__amy_like_button_text">Click to like!</Text>
                            <IconButton aria-label="like amy"
                                        className="header__like_button"
                                        icon={<BsHeart />}
                                        bg={useColorModeValue('gray.400', 'teal.200')}
                                        onClick={setCounter}
                            />
                            <Text
                                color={useColorModeValue('red.600', 'pink.600')}
                                className="header__like_counter">{likeCount}</Text>
                        </Box>
                    </Box>
                    <Box className="header__amy_container_image_interaction">
                        <Image src={amyIdle}/>
                    </Box>
                </Box>
            </Section>
        </Box>
    );
}

export default Header;