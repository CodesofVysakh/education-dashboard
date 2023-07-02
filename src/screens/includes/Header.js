import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import Add from '../../assets/images/add.svg'

const Header = () => {
  return (
    <>
    <Container>
        <Right>
            <IconContainer2>
                <img src={Add}/>
            </IconContainer2>
            <h4>Profile Name</h4>
        </Right>
    </Container>
    <Outlet/>
    </>
  )
}

export default Header

const Container = styled.div`
    padding:20px 35px;
    background:#fff;
    display:flex;
    justify-content: flex-end;
    align-items: center;
`;

const Right = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
`;
const IconContainer2 = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    padding:12px;
    background:#bfd6643b;
    img{
        filter: invert(1);
        width:100%;
    }
`;