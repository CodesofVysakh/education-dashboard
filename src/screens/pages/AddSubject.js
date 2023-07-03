import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { Axios } from "../../axiosConfig";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Context } from "../../components/context/Store";

function AddSubject() {

    const [ courseData, setCourseData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ name, setName ] = useState();
    const [ duration, setDuration ] = useState();
    const [ description, setDescription ] = useState();

    const { state, dispatch } = useContext(Context);
    const userData = state.user_data;

    const notify = (message) => toast(message);

    const handleCourseData = () =>{
        setIsLoading(true);

        Axios
        .post(`api/v1/courses/add-subject/`,{
            name: name,
            duration: duration,
            description: description
        },{})
        .then((response) => {
            console.log(response)
            if(response.data.StatusCode === 6000){
                console.log(response.data," student data");
                // setCourseData(response.data.data.data)
                setName("");
                setDescription("");
                setDuration("");
                setIsLoading(false);
                notify(response.data.data.message)
            }else{
                notify(response.data.data.message)
                setIsLoading(false);
            }
        })
        .catch((error) => {
            setIsLoading(false);

            console.log(error)
        })
    }

    useEffect(() => {

    },[isLoading])

    return (
        <Container>
            <TopBar>
                <Title>Add Subject</Title>
            </TopBar>
            <BottomContainer>
                <InputContainer>
                    <input type="text" value={name} placeholder="Enter course name" onChange={(e) => setName(e.target.value)}/>
                    <input type="text" value={duration} placeholder="Enter course duration in hours" onChange={(e) => setDuration(e.target.value)}/>
                    <input type="textarea" value={description} placeholder="Enter course description" onChange={(e) => setDescription(e.target.value)}/>
                </InputContainer>
                
                <SubmitButton onClick={() => {
                        handleCourseData();
                    }}>
                        {isLoading ? 
                        "Loading..."
                        :
                        "Create"
                        }
                    </SubmitButton>
            </BottomContainer>
            <div style={{ width: '100%', margin: '0 auto' }}>
                <ToastContainer 
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />
            </div>
        </Container>
    )
}

export default AddSubject;

const Container = styled.div`
    padding: 20px;
    width: 70%;
    margin: 20px auto;
    border-radius: 8px;
    background-color: #fff;
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