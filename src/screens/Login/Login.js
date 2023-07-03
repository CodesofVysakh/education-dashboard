import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Axios } from "../../axiosConfig";
import { getYYMMDD } from "../../components/helpers/function";
import { Context } from "../../components/context/Store";

function Login() {
    const navigate = useNavigate();
    const [ logState, setLogState ] = useState(false);
    const [ mail, setMail ] = useState();
    const [ password, setPassword ] = useState();
    const [ name, setName ] = useState();
    const [ phone, setPhone ] = useState();
    const [ dob, setDob ] = useState();
    const [ isLoading, setIsLoading ] = useState(false);

    const { state, dispatch } = useContext(Context)
    
    const notify = (message) => toast(message);

    const handleLogin = () => {
        console.log(mail, password, "logs");
        setIsLoading(true);
        Axios
            .post(`api/v1/accounts/login/`, {
                email: mail,
                password: password,
            },{

            })
            .then((response) => {
                console.log(response)
                if(response.data.StatusCode === 6000){
                    notify("successFul login")
                    dispatch({
                        type: "UPDATE_USER_DATA",
                        user_data: {
                            name: response.data.data.name,
                            username: response.data.data.username,
                            email: response.data.data.email,
                            dob: response.data.data.dob,
                            id: response.data.data.id,
                            isVerified: response.data.data.is_verified,
                            role: response.data.data.role,
                        }
                    })
                    setTimeout(() => {
                        setIsLoading(false);
                        navigate("/")
                    }, 2000);
                    
                }
                else {
                    notify(response.data?.data?.message || response.data?.message)
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 2000);
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleRegister = () => {
        console.log(mail, password, "logs");
        setIsLoading(true);
        Axios
            .post(`api/v1/accounts/register/`, {
                email: mail,
                password: password,
                name: name,
                dob: getYYMMDD(dob),
                phone: phone,
            },{

            })
            .then((response) => {
                console.log(response)
                if(response.data.StatusCode === 6000){
                    notify("successFul login")
                    dispatch({
                        type: "UPDATE_USER_DATA",
                        user_data: {
                            name: response.data.data.name,
                            username: response.data.data.username,
                            email: response.data.data.email,
                            dob: response.data.data.dob,
                            id: response.data.data.id,
                            isVerified: response.data.data.is_verified,
                            role: response.data.data.role,
                        }
                    })
                    setTimeout(() => {
                        setIsLoading(false);
                        navigate("/")
                    }, 2000);
                }
                else {
                    notify(response.data?.data?.message || response.data?.message)
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 2000);
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return(
        <MainContainer>
            <ContentContainer>
                <Title>Welcome !</Title>
                {logState ?
                    <BottomContainer>
                        <InputContainer>
                            <input type="text" placeholder="*Enter email" onChange={(e) => setMail(e.target.value)}/>
                            <input type="password" placeholder="*Enter password" onChange={(e) => setPassword(e.target.value)}/>
                            <input type="text" placeholder="*Enter name" onChange={(e) => setName(e.target.value)}/>
                            <input type="tel" placeholder="Enter Phone number" onChange={(e) => setPhone(e.target.value)}/>
                            <input type="date" placeholder="*Date" onChange={(e) => setDob(e.target.value)}/>
                        </InputContainer>
                        
                        <SubmitButton onClick={() => {
                            handleRegister();
                            // navigate("/index")
                            }}>
                                {isLoading ? 
                                "Loading..."
                                :
                                "Sign up"
                                }
                            </SubmitButton>
                        <p>Already a member? <span onClick={() => setLogState(false)}>Login</span></p>
                        <small>* - mandatory</small>
                    </BottomContainer>
                    :
                    <BottomContainer>
                        <InputContainer>
                            <input type="text" placeholder="Enter email" onChange={(e) => setMail(e.target.value)}/>
                            <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                        </InputContainer>
                        
                            <SubmitButton onClick={() => {
                                handleLogin();
                                // navigate("/index")
                                }}>
                                    {
                                    isLoading ? 
                                        'Loading...'
                                        :
                                        "Login"
                                    }
                                </SubmitButton>
                        <p>New here? <span onClick={() => setLogState(true)}>Create Account</span></p>
                    </BottomContainer>
                }
            </ContentContainer>
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
        </MainContainer>
    )
}

export default Login;

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eef7fbff;
`;
const ContentContainer = styled.div`
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
`;
const Title = styled.h3`
    margin-bottom: 10px;
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