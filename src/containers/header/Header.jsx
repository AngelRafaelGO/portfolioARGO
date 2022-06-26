import React, { useState, useEffect } from "react";
import { Box,IconButton, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { VscArrowRight } from "react-icons/vsc";
import { BsHeart } from "react-icons/bs";
import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, collection, doc, updateDoc } from "firebase/firestore";

import Section from '../../components/modal/motionDiv'
import amyIdle from "../../assets/amy_idle.gif"
import Chris_me from '../../assets/chris_me.svg';
import "./header.css";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXBue5Si_s5EGPrwMh1t3MXMvYuqmKndQ",
    authDomain: "mywebsite-10750.firebaseapp.com",
    projectId: "mywebsite-10750",
    storageBucket: "mywebsite-10750.appspot.com",
    messagingSenderId: "796603426673",
    appId: "1:796603426673:web:13121669eb019ae39cb8d0",
    measurementId: "G-BY4LW6BD1Q"
};

// Initialize Firebase
const appFB = initializeApp(firebaseConfig);
const firestore = getFirestore();

function Header() {
    const [counterLikes, setCounterLikes] = useState([]);
    const [totalLikes, setTotalLikes] = useState(0);

    // Get data from Firebase
    useEffect(() => {
        onSnapshot(collection(firestore, 'counter'), (snapshot => {
            setCounterLikes(snapshot.docs.map(doc => doc.data()));
        }))
    }, [])


    // Add likes to counter
    function addLike() {
        setTotalLikes( totalLikes + 1);
    }

    return (
        <Box className="header__main_div">
            <Section delay={0.1}>
                <Box  className="header__text" bg={useColorModeValue('red.200', 'teal.500')}>
                    <Text>Hello! I'm a fullstack developer based in Paris &#128681;</Text>
                </Box>
            </Section>
            <Section delay={0.1}>
                <Box className="header__my_information">
                    <Box className="header__about_me">
                        <Heading>About me</Heading>
                        <Text>I've always been a tech enthusiast, since I was a teen &#129299;</Text>
                        <Text>As a developer, I mostly write scripts and query databases. I also work with REST api's, using both javascript and php framworks. I do my best to write clean, maintainable and scalable code</Text>
                        <Text>Design-wise, I enjoy creating minimalistic and functional UI's</Text>
                        <Text>When I'm not doing work, I enjoy developing games, playing them,
                            cycling, running and playing board games. I'm a fan of sci-fi movies and
                            european literature</Text>
                    </Box>
                    <Box className="header__profile_picture">
                        <Image className="header__my_photo" borderRadius="full" src={Chris_me}
                               alt="angel's picture" />
                    </Box>
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
                                        bg={useColorModeValue('gray.200', 'gray.600')}
                                        onClick={addLike}
                            />
                            <Text
                                color={useColorModeValue('red.600', 'pink.600')}
                                className="header__like_counter">{totalLikes}</Text>
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
