import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../../screens/includes/Sidebar";
import { styled } from 'styled-components'
import { Context } from "../context/Store";
import AdminRoute from "./routes/AdminRoute";
import AdminRouter from "./router/AdminRouter";
import StudentRouter from "./router/StudentRouter";
import StudentRoute from "./routes/StudentRoute";

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
                    <Route
                        path="/*"
                        element={
                            <AdminRoute>
                                <AdminRouter />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="/student/*"
                        element={
                            <StudentRoute>
                                <StudentRouter />
                            </StudentRoute>
                        }
                    />
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