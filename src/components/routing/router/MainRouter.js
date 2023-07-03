import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../../../screens/Login/Login";
import AppRouter from "../AppRouter";
import { Context } from "../../context/Store";

const MainRouter = () => {
    const { state, dispatch } = useContext(Context);
	const isVerified = state.user_data.isVerified;
	const location = window.location;

	useEffect(() => {
        let user_data = localStorage.getItem("user_data");
		user_data = JSON.parse(user_data);
		dispatch({ type: "UPDATE_USER_DATA", user_data: user_data });

        console.log(isVerified,"isVerified location", location);
    }, [])
	

	console.log(isVerified, "isVerified from local")

    const isAuthenticated = () => {
        return isVerified;
    };
    return (
        <Routes>
            <Route
                path="/login"
                element={!isAuthenticated() ? <Login /> : <Navigate to="/" />}
            />
            <Route
                path="/*"
                element={
                    isAuthenticated() ? <AppRouter /> : <Navigate to="/login" />
                }
            />
        </Routes>
    );
};

export default MainRouter;
