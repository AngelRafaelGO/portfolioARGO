import React from "react";
import { Routes, Route } from "react-router-dom";

import {Footer, Header, Bio, Works} from "./containers";
import {Navbar} from "./components";
import './App.css'
import {useColorModeValue} from "@chakra-ui/react";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<><Header/><Bio/><Footer/></>} />
                <Route path="/works" element={<><Works /><Footer/></>} />
            </Routes>
        </div>

    );
}

export default App;