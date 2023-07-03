import React, { useContext, useEffect } from "react";
import { styled } from "styled-components";
import { Context } from "../../components/context/Store";

function Profile() {
    const { state, dispatch } = useContext(Context);
    const userData = state?.user_data;

    useEffect(() => {
        let user_data = localStorage.getItem("user_data");
		user_data = JSON.parse(user_data);
		dispatch({ type: "UPDATE_USER_DATA", user_data: user_data });

        console.log(userData,"userData");
    }, [])
    return (
        <Container>
            <Title>{userData ? userData.name : "-"}</Title>
            <Cover>
                <h3>email: {userData ? userData.email : "-"}</h3>
                <h3>Username: {userData ? userData.username : "-"}</h3>
                <h3>DOB: {userData ? userData.dob : "-"}</h3>
            </Cover>

        </Container>
    );
    
}



export default Profile;

const Container = styled.div`
    padding: 20px;
    width: 70%;
    margin: 20px auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    /* height: 250px; */

    h3 {
        color: #596332;
        font-size: 22px;
        margin-bottom: 20px;
    }
`;
const Cover = styled.div`
    /* display: flex;
    align-items: baseline; */
    text-align: center;
    margin-top: 10px;
    /* margin-bottom: 20px; */
`;
const Icon = styled.div`
    width: 55px;
    margin-bottom: 30px;
    border: 1px solid #0a0a0a;
    border-radius: 50%;
    padding: 10px;
    img {
        width: 100%;
        display: block;
        filter: invert(1);
    }
`;
const Title = styled.h4`
    color: #747474;
    font-weight: unset;
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
`;
const ContentContainer = styled.div`
    button {
        display: block;
        padding: 10px 20px;
        background-color: #29c8a878;
        border: none;
        border-radius: 4px;
        margin: 10px auto;
    }
`;