import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../../screens/includes/Sidebar";
import Header from "../../screens/includes/Header";
import { styled } from 'styled-components'
import Login from "../../screens/Login/Login";
import Dashboard from "../../screens/pages/Dashboard";
import StudentList from "../../screens/pages/StudentList";
import CourseList from "../../screens/pages/CourseList";
import Profile from "../../screens/pages/Profile";
import { Context } from "../context/Store";

function AppRouter() {
    const { state, dispatch } = useContext(Context);
	const role = state.user_data.role;

    return (
        <Container>
            <Left>
                <Sidebar />
            </Left>
            <Right>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route path="/student" element={<StudentList />} />
                        <Route path="/course" element={<CourseList />} />
                        <Route path="/profile" element={<Profile />} />
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