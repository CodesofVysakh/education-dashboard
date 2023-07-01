import React from "react";
import AppRouter from "./AppRouter";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../../screens/Login/Login";


function MainRouter() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/index" element={<AppRouter />} />
            </Routes>

        </Router>
    )
}

export default MainRouter;
