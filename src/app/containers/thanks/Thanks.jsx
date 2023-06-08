import React from "react";
import { Box, Text, Heading, Icon, useColorModeValue } from "@chakra-ui/react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

import Section from "../../components/modal/motionDiv";
import "./thanks.css";

function Thanks() {
  return (
    <Box className="thanks__main_div">
      <Section>
        <Box className="thanks__message">
          <Heading className="thanks__main-heading">
            Your message has been sent !
          </Heading>
          <Text className="thanks__main-text">
            Thank you for contacting me, I'll get back to you asap
          </Text>
          <Text className="thanks__main-text">
            In the meantime, feel free to check out my work
          </Text>
          <Box className="thanks__arrow">
            <Icon
              as={BsFillArrowDownSquareFill}
              w={50}
              h={50}
              color={useColorModeValue("red.500", "orange.400")}
            />
          </Box>
        </Box>
      </Section>
    </Box>
  );
}

export default Thanks;
