import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Axios } from "../../axiosConfig";

function StudentList() {
    const [ studentData, setStudentData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const handleStudentData = () =>{
        // setIsLoading(true);

        Axios
        .get(`api/v1/accounts/student-list/`)
        .then((response) => {
            console.log(response)
            if(response.data.StatusCode === 6000){
                console.log(response.data," student data");
                setStudentData(response.data.data.data)
                setIsLoading(false);
            }else{
                setIsLoading(false);
            }
        })
        .catch((error) => {
            setIsLoading(false);

            console.log(error)
        })
    }

    useEffect(() => {
        handleStudentData();
        console.log(studentData,"student data");
    },[isLoading])
    
    return (
        <Container>
            <TopBar>
                <Title>Student List</Title>
            </TopBar>
            <ListContainer>
                <HeadRow>
                    <HeadColumnData>Sl. no</HeadColumnData>
                    <HeadColumnData>Name</HeadColumnData>
                    <HeadColumnData>Dob</HeadColumnData>
                    <HeadColumnData>Username</HeadColumnData>
                    <HeadColumnData>Email</HeadColumnData>
                </HeadRow>
                <RowContainer>
                    {studentData?.map((item, index) => (
                        <Row key={index}>
                            <ColumnData>{index + 1}</ColumnData>
                            <ColumnData>{item.name}</ColumnData>
                            <ColumnData>{item.dob}</ColumnData>
                            <ColumnData>{item.username}</ColumnData>
                            <ColumnData>{item.email}</ColumnData>
                        </Row>
                    ))}
                </RowContainer>
            </ListContainer>
        </Container>
    );
}

export default StudentList;

const Container = styled.div`
    padding: 20px;
`;
const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Title = styled.h2`
    color: #0a0a0a;
    font-size: 26px;
`;
const ListContainer = styled.div`
    background-color: #fff;
    /* padding: 0 24px; */
    border: 1px solid #dfe8ed;
    border-radius: 8px;
    margin-top: 10px;
    
    h3 {
        color: #747474;
        font-family: "inter_regular";
        font-size: 22px;
    }
`;

const HeadRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;
`;
const RowContainer = styled.div`
    height: calc(100vh - 260px);
    overflow-y: scroll;
    background-color: #fafafa;
`;
const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;
    border-top: 1px solid #ccc;
    
`;

const HeadColumnData = styled.div`
    color: #747474;
    font-size: 18px;
    font-family: "inter_light";
    width: 20%;
    &:first-child{
        width: 5%;
    }
`;
const ColumnData = styled.div`
    color: #0A0A0A;
    font-size: 18px;
    font-family: "inter_light";
    width: 20%;
    &:first-child{
        width: 5%;
    }
`;