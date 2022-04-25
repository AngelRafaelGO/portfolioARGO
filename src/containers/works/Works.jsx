import React from "react";
import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import Section from "../../components/modal/motionDiv";

import "./works.css";
import { WorkGridItem } from "../../components/modal/grid_item";
import { alienMorph, bigMic, ultraHack, magicShop, thisSite, ukraineFlag } from '../../assets';

function Works() {
    return (
        <Box className="works--main-div">
            <Section delay={0.1}>
                <Box className="works--main-heading">
                    <Heading>Works</Heading>
                </Box>
                <Box className="works__works_box">
                    <SimpleGrid columns={2} spacing={10}>
                        <WorkGridItem
                            title="Ukraine War API"
                            href="https://github.com/AngelRafaelGO/ukraine_war_news_api"
                            thumbnail={ukraineFlag}
                        >
                        </WorkGridItem>
                        <WorkGridItem
                            title="Magic Shop"
                            href="https://github.com/AngelRafaelGO/magicShop"
                            thumbnail={magicShop}
                        >
                        </WorkGridItem>
                        <WorkGridItem
                            title="Big Mic"
                            href="https://github.com/AngelRafaelGO/app_big_mic"
                            thumbnail={bigMic}
                        >
                        </WorkGridItem>
                        <WorkGridItem
                            title="Alien Invasion"
                            href="https://github.com/AngelRafaelGO/alien_invasion"
                            thumbnail={alienMorph}
                        >
                        </WorkGridItem>
                        <WorkGridItem
                            title="Ultrahackathon 2022"
                            href="https://github.com/AngelRafaelGO/IntereFXWebApp"
                            thumbnail={ultraHack}
                        >
                        </WorkGridItem>
                        <WorkGridItem
                            title="This Website"
                            href="https://github.com/AngelRafaelGO/portfolioARGO"
                            thumbnail={thisSite}
                        >
                        </WorkGridItem>
                    </SimpleGrid>
                </Box>
            </Section>
        </Box>
    );
}

export default Works;