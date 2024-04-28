import React, { useState, useEffect } from 'react';
import { HeaderEditUpload } from '../../layout/headerEditUpload/headerEditUpload';
import { useDispatch } from 'react-redux';
import { login } from '../../slices/authSlice';
import { loginApi } from '../../services/auth.service';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


export const SignUp = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const callAPI = async () => {
        try {
            console.log("userNameuserNameuserName", userName, password);

            const getResult = await loginApi({ userName: userName, password: password });

            if (getResult) {
                callToast('Login Successfully', 'success')
                dispatch(login(getResult?.data));
                navigate('/')
            } else {
                callToast("Somthing went wrong!", 'danger')
            }

        } catch (error) {
            console.error('Login failed:', error);
            setError(error.response.data.message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        callAPI();
    }

    const callToast = (message, type) => {
        if (type === 'success') {
            toast.success({ message }, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.danger({ message }, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const toastContainer = () => {
        return (
            <>
                <ToastContainer
                    position="top-right"
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
                <ToastContainer />
            </>
        );
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate("/");
        }
    }, [])

    return (
        <>
            <HeaderEditUpload />
            <div className='container-fluid'>
                <div className='row align-items-center'>
                    <div className='col-lg-7 ps-0'>
                        <div className='img-part'>
                            <img className='img-fluid' src="https://s3-alpha-sig.figma.com/img/275c/50c2/c4f9ca9eb8bc59825323d394118268f1?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hr7~rIOBN9zVYsHUcc61NT0iHVfSX98Hp~dNMSTFYMMhYWDEsAyvw-Ye6P6wRa39EpseYchT3m4GXifX1Q7~t2uVzb5HhbAgt766a6EvB6ZOKXTjlWvqlpZNEV8wH5hzMhhfx795vgk-Qw1jHgN9hxti6U9NFfNZSkL-2lCioAmIhsP0Ug1uW3iNedqWsY2Rq8RWFY2NobH7FLCcw53ebUGmoN97STYShQDFLpUqnVUhKuHnOFMhyCoWsvtMfRThOW0IIkO4onVWZfJvhVBLxNnxZ944JT~bzmE-06Qr6K-g5QB4S6fEp~sFpMNLirrIoMFSaa7ExXrI4zl06F5vSw__" alt="" />
                        </div>
                    </div>
                    <div className='col-lg-5 px-5'>
                        <div className='h2 fw-bold mb-4'>Sign in</div>
                        <form onSubmit={handleSubmit}>
                            {error && <div className="alert alert-danger">{error}</div>}

                            <div className='username-container d-flex flex-column gap-2 mb-3'>
                                <label htmlFor="username">Email</label>
                                <input onChange={(e) => setUsername(e.target.value)} required className='p-2' name='email' typeof='text' placeholder='Email' type="email" />
                            </div>
                            <div className='password-container d-flex flex-column gap-2 mb-3'>
                                <label htmlFor="password">Password</label>
                                <input required className='p-2' onChange={(e) => setPassword(e.target.value)} name='password' typeof='text' placeholder='Password' type="text" />
                            </div>
                            <button type="submit" className="select-size-btn border-1 size-btn m-auto d-block text-center p-3 w-100 rounded text-white">Sign in</button>
                            <div className='d-flex align-items-center justify-content-between mt-4'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Remember Me
                                    </label>
                                </div>
                                <a href="#" className='forgot-pass text-dark'>Forgot password?</a>
                            </div>

                            <div className='text-center mt-4'><span>Dont have an account?</span><a href="/signup" className='create-ac'>Create Account</a></div>
                        </form>
                    </div>
                </div>
            </div>
            {toastContainer()}
        </>
    )
}
