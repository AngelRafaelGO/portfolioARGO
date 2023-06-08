import React from "react";
import {
  Box,
  Text,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuList,
  MenuButton,
  IconButton,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { HamburgerIcon } from "@chakra-ui/icons";
import { SiDarkreader } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

import "./navbar.css";
import myLogo from "../../assets/logoAngel.svg";
import myLogo2 from "../../assets/logoAngel2.svg";

function Navbar() {
  const { toggleColorMode } = useColorMode();

  return (
    <Box className="portfolio__fixed_div">
      <Box className="portfolio__navbar">
        <a href="/">
          <Box className="portfolio__navbar_logo">
            <motion.div
              style={{ display: "inline-block" }}
              key={useColorModeValue("light", "dark")}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                className="header__my_logo"
                src={useColorModeValue(myLogo, myLogo2)}
                alt="my logo"
              />
            </motion.div>
          </Box>
        </a>
        <Box className="portfolio__navbar_links">
          <Text>
            <a href="/works">Works</a>
          </Text>
          <Box>
            <Text>
              <a
                className="portfolio__navbar__links_source"
                target="_blank"
                href="https://github.com/AngelRafaelGO"
                rel="noreferrer"
              >
                <AiFillGithub className="git_logo" />
                Source
              </a>
            </Text>
          </Box>
          <Text>
            <a href="/contact">Contact</a>
          </Text>
        </Box>
        <Box className="portfolio__navbar_buttons">
          <Box className="portfolio__navbar_hamburger_menu">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="menu"
                icon={<HamburgerIcon />}
                bg={useColorModeValue("yellow.400", "green.200")}
              />
              <MenuList>
                <MenuItem>
                  <a href="/works">Works</a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="portfolio__navbar__links_source"
                    target="_blank"
                    href="https://github.com/AngelRafaelGO"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="git_logo" />
                    Source
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="/contact">Contact</a>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              style={{ display: "inline-block" }}
              key={useColorModeValue("light", "dark")}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconButton
                icon={<SiDarkreader />}
                bg={useColorModeValue("green.500", "purple.500")}
                onClick={toggleColorMode}
                aria-label="dark-theme"
              ></IconButton>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
