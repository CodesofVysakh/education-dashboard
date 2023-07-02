import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../../screens/includes/Sidebar";
import Header from "../../screens/includes/Header";
import { styled } from 'styled-components'
import Login from "../../screens/Login/Login";
import Dashboard from "../../screens/pages/Dashboard";

function AppRouter() {
    return (
        <Container>
            <Left>
                <Sidebar />
            </Left>
            <Right>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                </Routes>
            </Right>
        </Container>
    )
}

export default AppRouter;

const Container = styled.div`
  height: 100vh;
  background: #f4f5f8;
  display: flex;
`;
const Left = styled.div`
  width: 14%;
  height: 100%;
`;
const Right = styled.div`
  width: 86%;
`;