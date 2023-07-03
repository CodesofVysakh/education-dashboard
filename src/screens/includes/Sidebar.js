import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Add from '../../assets/images/add.svg'
import { styled } from 'styled-components'
import { Context } from "../../components/context/Store";

const Sidebar = () => {
    const { state, dispatch } = useContext(Context)
    const role = state.user_data.role;

    return (
        <Cover>
            <Left>
                <LogoContainer>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="Logo" />
                </LogoContainer>
                <h1>Edu-Com</h1>
            </Left>
            {role == "admin" ? 
                <Navigation>
                    <NavLinks to="/">
                        <ImageContainer>
                            <img src={Add} />
                        </ImageContainer>
                        <h4>Dashboard</h4>
                    </NavLinks>
                    <NavLinks to="/student-list">
                        <ImageContainer>
                            <img src={Add} />
                        </ImageContainer>
                        <h4>Students List</h4>
                    </NavLinks>
                    <NavLinks to="/course">
                        <ImageContainer>
                            <img src={Add} />
                        </ImageContainer>
                        <h4>Course List</h4>
                    </NavLinks>
                    <NavLinks to="/create">
                        <ImageContainer>
                            <img src={Add} />
                        </ImageContainer>
                        <h4>Add Subject</h4>
                    </NavLinks>
                    <NavLinks to="/profile">
                        <ImageContainer>
                            <img src={Add} />
                        </ImageContainer>
                        <h4>Profile</h4>
                    </NavLinks>
                </Navigation>
                :
                <Navigation>
                    <NavLinks to="/student/">
                        <ImageContainer>
                            <img src={Add} />
                        </ImageContainer>
                        <h4>Dashboard</h4>
                    </NavLinks>
                    <NavLinks to="/student/enroll-course">
                        <ImageContainer>
                            <img src={Add} />
                        </ImageContainer>
                        <h4>Course List</h4>
                    </NavLinks>
                    <NavLinks to="/student/student-profile">
                        <ImageContainer>
                            <img src={Add} />
                        </ImageContainer>
                        <h4>Profile</h4>
                    </NavLinks>
                </Navigation>
            }
        </Cover>
    );
};

export default Sidebar;

const Cover = styled.div`
    height: 100vh;
    width: 200px;
    background: #3b4704d6;
`;
const LogoContainer = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
`;
const Left = styled.div`
    padding: 25px;
    display: flex;
    align-items: center;
    color: #000;
    gap: 10px;
    h1 {
        font-size: 20px;
    }
`;

const Navigation = styled.div`
    padding: 5px;
`;
const NavLinks = styled(Link)`
    display: flex;
	align-items: center;
    padding: 15px 20px;
    gap: 8px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    transition: 0.4s ease;
	&.innerNav {
		padding: 15px 30px;
		img {
			height: 10px;
			width: 10px;
		}
	}
    &:hover {
        background: #0a0a0a;
        transition: 0.4s ease;
        h4 {
            color: #fff;
        }
        &:after {
            content: "";
            position: absolute;
            width: 6px;
            height: 80%;
            background: #0a0a0a;
            left: 0;
            top: 5px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }

    h4 {
        color: #000;
    }
`;

const ImageContainer = styled.div`
    width: 30px;
    filter: brightness(0.8);

    img {
        width: 100%;
        display: block;
    }
`;
