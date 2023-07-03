import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Header from "../../../screens/includes/Header";
import CourseList from "../../../screens/pages/CourseList";
import Profile from "../../../screens/pages/Profile";
import Sidebar from "../../../screens/includes/Sidebar";
import DashboardStudent from "../../../screens/pages/DashboardStudent";

function StudentRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route exact path="/" element={<DashboardStudent />} />
                    <Route path="/enroll-course" element={<CourseList />} />
                    <Route path="/student-profile" element={<Profile />} />
                </Route>
            </Routes>
            {/* <Sidebar /> */}
        </>
    );
}

export default StudentRouter;
