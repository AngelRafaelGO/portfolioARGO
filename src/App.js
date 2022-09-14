import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { Footer, Header, Bio, Works, Tech, Contact, Thanks } from "./containers";
import { Navbar } from "./components";
import './App.css'

function App() {
    return (
        <Box>
            <Navbar/>
            <Routes>
                <Route path="/" element={<><Header /><Bio /><Tech /><Footer /></>} />
                <Route path="/works" element={<><Works /><Footer /></>} />
                <Route path="/contact" element={<><Contact /><Footer /></>} />
                <Route path ="/thanks" element={<><Thanks /><Footer /></>} />
            </Routes>
        </Box>
    );
}

export default App;
