import React, { useState } from 'react'
import { FaMailBulk } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState(''); 

    let lognavigate = useNavigate();

    const LocalEmail = 'admin@gmail.com';
    const LocalPassword = "admin123";
    
    let logedin = () => {
        if (email == LocalEmail && password == LocalPassword) {
            localStorage.setItem("login", true);
            props.setlogin(true);
            lognavigate("/");
        }
        else {
            setErrorMessage('Invalid E-mail Or Password.');
        }
    }

    return (
        <>
            <div className='main_login'>
                <div className='container'>
                    <div className='login_form mx-auto p-5 border border-1 border-secondary rounded-5'>
                        <h2 className='fw-bold text-center'>LOGIN</h2>
                        <div className='mt-4'>
                            <label htmlFor="email" className='d-block fw-bold'><FaMailBulk /> E-mail</label>
                            <input
                                type="email"
                                placeholder='Enter E-mail'
                                className='w-100 mt-2 py-1 px-2 form-input border border-2 border-secondary rounded'
                                style={{ outline: "0" }}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                        <div className='my-4'>
                            <label htmlFor="password" className='d-block fw-bold'><RiLockPasswordFill /> Password</label>
                            <input
                                type="password"
                                placeholder='Enter Password'
                                className='w-100 mt-2 py-1 px-2 form-input border border-2 border-secondary rounded'
                                style={{ outline: "0" }}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>
                        {errorMessage && (
                            <div className="text-danger text-center mb-3 fw-bold">
                                {errorMessage}
                            </div>
                        )}
                        <div className='pt-2'>
                            <button
                                onClick={logedin}
                                type='button'
                                className='fw-bold w-100 gradient-btn border-0 text-white fw-bold rounded'
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage