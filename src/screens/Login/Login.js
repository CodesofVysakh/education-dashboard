import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Login() {
    const navigate = useNavigate();
    return(
        <MainContainer>
            <ContentContainer>
                <Title>Welcome !</Title>
                <BottomContainer>
                    <InputContainer>
                        <input type="text" placeholder="Enter username" />
                        <input type="password" placeholder="Enter password" />
                    </InputContainer>
                    <SubmitButton onClick={() => navigate("/index")}>Submit</SubmitButton>
                </BottomContainer>
            </ContentContainer>
        </MainContainer>
    )
}

export default Login;

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eef7fbff;
`;
const ContentContainer = styled.div`
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
`;
const Title = styled.h3`
    margin-bottom: 10px;
`;
const BottomContainer = styled.div`

`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    input {
        padding: 10px 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 15px;
    }
`;
const SubmitButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #754faff0;
    border-radius: 4px;
    padding: 10px 15px;
    background: #754faff0;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
`;