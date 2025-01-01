import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "../../Pages/Landing";
import CharacterGame from "../../Pages/CharacterGame";


const MyRoutes = () =>{
    return(
        <>
        <Router>
            <Routes>
                <Route path ="/game" element ={<CharacterGame/>} />
                <Route path ="/" element ={<Landing/>} />
                                
            </Routes>
        </Router>
        </>
    )
}

export default MyRoutes