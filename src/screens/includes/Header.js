import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Add from "../../assets/images/add.svg";
import { Context } from "../../components/context/Store";

const Header = () => {
    const [ dropdownState, setDropdownState ] = useState(false);
    const { state, dispatch } = useContext(Context);
    const userData = state.user_data;

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login")
        window.location.reload();
        window.localStorage.clear();
        setDropdownState(false)
    }

    return (
        <>
            <Container>
                <Right onClick={() => setDropdownState(!dropdownState)}>
                    <IconContainer2>
                        <img src={Add} />
                    </IconContainer2>
                    <NameBox>
                        <h4>{userData.name}</h4>
                    </NameBox>
                    {dropdownState &&
                        <DropDown onClick={() => {
                            handleLogout()
                            }}>
                            <h3>Logout</h3>
                        </DropDown>
                    }
                </Right>
            </Container>
            <Outlet />
        </>
    );
};

export default Header;

const Container = styled.div`
    padding: 20px 35px;
    background: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    position: relative;
`;
const IconContainer2 = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 12px;
    background: #bfd6643b;
    img {
        filter: invert(1);
        width: 100%;
    }
`;
const NameBox = styled.div`
`;
const DropDown = styled.div`
    position: absolute;
    bottom: -60px;
    right: 0;
    width: 80%;
    padding: 10px;
    background: #ffb9b9;
    border: 1px solid #bfd6643b;
    border-radius: 4px;
    text-align: center;
`;