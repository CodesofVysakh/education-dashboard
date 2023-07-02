import React from 'react'
import { styled } from 'styled-components';

function NotFound() {
  return (
    <MainContainer>
            <ContentContainer>
                <Title>Oops !</Title>
                    <BottomContainer>

                    </BottomContainer>
            </ContentContainer>
        </MainContainer>
    )
}

export default NotFound;

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
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
    p{
        font-size: 12px;
        text-align: center;
    }
    span{
        font-size: 13px;
        color: blue;
        cursor: pointer;
        text-decoration: underline;
    }
    small {
        font-size: 10px;
    }
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
    margin-bottom: 10px;
    max-height: 35px;
`;