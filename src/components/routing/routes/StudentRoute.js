import React, { useContext } from "react";
import { Context } from "../../context/Store";


const StudentRoute = ({ children }) => {
    const { state } = useContext(Context);
    const role = state.user_data.role;

    return role.includes("student") ? children : <h1>404</h1>;
};

export default StudentRoute;
