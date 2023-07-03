import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../context/Store";

const AdminRoute = ({ children }) => {
    const { state } = useContext(Context);
    const role = state.user_data.role;

    return role.includes("admin") ? (
        children
    ) : role.includes("student") ? (
        <Navigate to="/student/" />
    ) : (
        <h1>404</h1>
    );
};

export default AdminRoute;