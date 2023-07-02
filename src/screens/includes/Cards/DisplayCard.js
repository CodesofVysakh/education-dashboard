import React from "react";
import { styled } from "styled-components";
import Add from "../../../assets/images/add.svg";

function DisplayCard({ title, icon, number, label }) {
    return (
        <Container>
            {/* <Icon>
                <img src={Add} alt="icon" />
            </Icon> */}
            <Title>No. of Students</Title>
            <Cover>
                <h1>1222</h1>
                <h3>nos </h3>
            </Cover>
        </Container>
    );
}

export default DisplayCard;

const Container = styled.div`
    position: relative;
    background-color: #fff;
    padding: 20px 30px;
    width: 100%;
    /* height: 250px; */
    margin-right: 20px;
    border: 1px solid #dfe8ed;
    border-radius: 8px;
    &:last-child {
        margin-right: 0;
    }
    h1 {
        color: #596332;
        font-size: 40px;
        margin-right: 10px;
    }
    h3 {
        color: #596332;
        font-family: "inter_regular";
        font-size: 22px;
    }
`;
const Cover = styled.div`
    display: flex;
    align-items: baseline;
    margin-top: 10px;
    margin-bottom: 20px;
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
    font-family: "inter_regular";
    font-weight: unset;
    font-size: 20px;
`;
const Curve = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    img {
        width: 100%;
        display: block;
    }
`;
