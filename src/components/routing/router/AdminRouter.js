import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Header from "../../../screens/includes/Header";
import Dashboard from "../../../screens/pages/Dashboard";
import StudentList from "../../../screens/pages/StudentList";
import CourseList from "../../../screens/pages/CourseList";
import Profile from "../../../screens/pages/Profile";
import Sidebar from "../../../screens/includes/Sidebar";
import AddSubject from "../../../screens/pages/AddSubject";

function AdminRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route path="/student-list" element={<StudentList />} />
                    <Route path="/course" element={<CourseList />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/create" element={<AddSubject />} />
                </Route>
            </Routes>
            {/* <Sidebar /> */}
        </>
    );
}

export default AdminRouter;
