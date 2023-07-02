import React, { useState } from "react";
import { styled } from "styled-components";
import Add from "../../../assets/images/add.svg";

function DisplayCard({ title, category, number, label, duration, description, count }) {

    return (
        <Container count={count}>
            {/* <Icon>
                <img src={Add} alt="icon" />
            </Icon> */}
            <Title category={category}>{title}</Title>
            {category == "statistics" ? 
                <Cover>
                    <h2>{number}</h2>
                    <h3>{label}</h3>
                </Cover>
            :
                category == "course" ?
                    <ContentContainer>
                        <h3>Duration: {duration} hours</h3>
                        <p>{description}</p>
                        <button>{label}</button>
                    </ContentContainer>
                    : null
            
            }
        </Container>
    );
}

export default DisplayCard;

const Container = styled.div`
    position: relative;
    background-color: #fff;
    padding: 20px 30px;
    width: ${(prop) => prop.count < 20 ? `${prop.count}%` : '100%' };
    margin: 5px 15px;
    border: 1px solid #dfe8ed;
    border-radius: 8px;
    &:last-child {
        margin-right: 0;
    }
    h2 {
        color: #596332;
        font-size: 40px;
        margin-right: 10px;
    }
    h3 {
        color: #596332;
        font-family: "inter_regular";
        font-size: 14px;
        text-align: center;
        margin: 10px 0;
    }
`;
const Cover = styled.div`
    display: flex;
    align-items: baseline;
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
    font-family: "inter_regular";
    font-weight: unset;
    font-size: ${(prop) => prop.category == "statistics" ? "20px" : "25px"};
    text-align: ${(prop) => prop.category == "statistics" ? "left" : "center"};
`;
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    button {
        display: block;
        padding: 10px 20px;
        background-color: #29c8a878;
        border: none;
        border-radius: 4px;
        margin: 10px auto;
    }
`;