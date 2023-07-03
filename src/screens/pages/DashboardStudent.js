import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import Add from "../../assets/images/add.svg";
import DisplayCard from "../includes/Cards/DisplayCard";
import VerticalChart from "../includes/Charts/VerticalChart";
import DoughnutChart from "../includes/Charts/DoughnutChart";
import { Axios } from "../../axiosConfig";
import { Context } from "../../components/context/Store";

function DashboardStudent() {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ studentData, setStudentData ] = useState("");
    const [ enrollmentCount, setEnrollmentCount ] = useState("");

    const { state, dispatch } = useContext(Context);
    const userData = state.user_data

    const handleEnrollmentData = () => {
        // setIsLoading(true);
        if(userData?.id){
            Axios
                .post(`api/v1/activity/dashboard-list/`,{
                    student_id: userData.id
                },{})
                .then((response) => {
                    console.log(response)
                    if(response.data.StatusCode === 6000){
                        setStudentData(response.data.data)
                        setEnrollmentCount(response.data.data.enrollment_count)
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
    }

    useEffect(() => {
        handleEnrollmentData();
        console.log(studentData, enrollmentCount);
    }, [])
    

    return (
        <Container>
            <TopBar>
                <Title>Dashboard</Title>
            </TopBar>
            {/* <BottomBar>
                <CoverCard>
                    <DisplayCard 
                        title="No. of Students"
                        number={studentData.studentCount}
                        label="nos"
                        category="statistics"
                    />
                    <DisplayCard 
                        title="Enrollments"
                        number={enrollmentCount}
                        label="nos"
                        category="statistics"
                    />
                </CoverCard>
            </BottomBar> */}
            <GraphContainer>
                {/* <Cover>
                    <TitleCover>
                        <CoverTitle>Students Registration</CoverTitle>
                        <VerticalChart />
                    </TitleCover>
                </Cover> */}
                <Cover>
                    <TitleCover>
                        <CoverTitle>Course Popularity</CoverTitle>
                        <DoughnutChart />
                    </TitleCover>
                </Cover>
                {studentData?.courses?.length > 0 &&
                    <Cover>
                        <EnrollTitleCover>
                            <CoverTitle>Course Enrolled</CoverTitle>
                            <div>
                                {studentData?.courses?.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </EnrollTitleCover>
                    </Cover>
                
                }
            </GraphContainer>
        </Container>
    );
}

export default DashboardStudent;

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
const BottomBar = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-top: 20px;
`;
const CoverCard = styled.div`
    display: flex;
    width: 70%;
`;
const GraphContainer = styled.div`
    display: flex;
    align-items: stretch;
    margin: 30px 0;
`;
const Cover = styled.div`
    background-color: #fff;
    margin-right: 20px;
    padding: 20px;

    &:last-child {
        margin-right: 0;
    }
`;
const TitleCover = styled.div`
    color: #0a0a0a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;

    p{
        font-size: 14px;
    }
`;
const CoverTitle = styled.h3`
    margin-bottom: 10px;

`;
const EnrollTitleCover = styled.div`
    ${CoverTitle}{
    }
`;
const Drop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #0a0a0a;
    font-size: 14px;
`;

