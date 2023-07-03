import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import Add from "../../../assets/images/add.svg";
import { Context } from "../../../components/context/Store";
import { Axios } from "../../../axiosConfig";

function DisplayCard({ title, category, number, label, duration, description, count, subject, handleCourseData }) {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ enrolledCourseData, setEnrolledCourseData ] = useState();
    const { state, dispatch } = useContext(Context);
    const userData = state.user_data;

    const handleEnrollment = () => {
        if(userData.id && userData.role == "student"){
            Axios
            .post(`api/v1/activity/student-enrolled-list/`, {
                student_id: userData.id
            })
            .then((response) => {
                console.log(response)
                if(response.data.StatusCode === 6000){
                    console.log(response.data.data.data," student enrolled data", response.data.data.data.includes(subject?.id));
                    setEnrolledCourseData(response.data.data.data)
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
    const handleEnroll = (username, subjectId) => {
        Axios
        .post(`api/v1/activity/subject-enroll/`, {
            course: subjectId,
            student_id: username
        })
        .then((response) => {
            console.log(response)
            if(response.data.StatusCode === 6000){
                // console.log(response.data," student enroll data");
                // setCourseData(response.data.data.data)
                handleEnrollment();
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
    
    const handleRemoveCourse = (subjectId) => {
        Axios
        .post(`api/v1/courses/delete-subject/`, {
            subject_id: subjectId,
        })
        .then((response) => {
            console.log(response)
            if(response.data.StatusCode === 6000){
                // console.log(response.data," student enroll data");
                // setCourseData(response.data.data.data)
                handleCourseData();
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
        handleEnrollment();
    },[])

    return (
        <Container count={count}>
            <TitleCard>
                <Title category={category}>{title}</Title>
                {category == "course" && userData.role == "admin" &&
                    <RemoveIcon onClick={() => handleRemoveCourse(subject.id)}> - </RemoveIcon>
                }
            </TitleCard>
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
                        { userData.role == "student" ? 
                            Array.isArray(enrolledCourseData) && enrolledCourseData.includes(subject?.id) ? 
                            <button style={{ cursor: 'default'}}>{label}ed</button> 
                            :
                            <button onClick={() => handleEnroll(userData.id, subject.id)}>{label}</button> 
                            : null
                        }
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
    width: ${(prop) => prop.count > 20 ? `${prop.count}%` : '17%' };
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
        font-size: 14px;
        text-align: center;
        margin: 10px 0;
    }
`;
const TitleCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const RemoveIcon = styled.div`
    background-color: #ccc;
    border-radius: 50%;
    padding: 10px;
    line-height: 5px;
    cursor: pointer;
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
    font-weight: unset;
    font-size: ${(prop) => prop.category == "statistics" ? "20px" : "25px"};
    text-align: ${(prop) => prop.category == "statistics" ? "left" : "center"};
`;
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    button {
        cursor: pointer;
        display: block;
        padding: 10px 20px;
        background-color: #29c8a878;
        border: none;
        border-radius: 4px;
        margin: 10px auto;
    }
`;