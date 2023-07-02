import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Axios } from "../../axiosConfig";
import DisplayCard from "../includes/Cards/DisplayCard";

function CourseList() {

    const [ courseData, setCourseData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const handleCourseData = () =>{
        // setIsLoading(true);

        Axios
        .get(`api/v1/courses/list-subjects/`)
        .then((response) => {
            console.log(response)
            if(response.data.StatusCode === 6000){
                console.log(response.data," student data");
                setCourseData(response.data.data.data)
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
        handleCourseData();
        console.log(courseData,"courseData data");
    },[isLoading])

    return (
        <Container>
            <TopBar>
                <Title>Course List</Title>
            </TopBar>
            <BottomCover>
                {courseData?.map((subject) => (
                    <DisplayCard 
                        title={subject.name}
                        category="course"
                        duration={subject.duration}
                        description={subject.description}
                        label="Enroll"
                        count={100/courseData.length}
                    />

                ))}
            </BottomCover>
        </Container>
    )
}

export default CourseList;

const Container = styled.div`
    padding: 20px;
`;
const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;
const Title = styled.h2`
    color: #0a0a0a;
    font-size: 26px;
`;
const BottomCover = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;