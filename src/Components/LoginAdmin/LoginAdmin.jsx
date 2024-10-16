import React, { useState } from 'react';
import './LoginAdmin.css';
import { FaUserGraduate, FaLock, FaEnvelope } from "react-icons/fa";

const LoginAdmin = () => {
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('');
    };

    return (
        <div className={`wrapper ${action}`}>
            <div className='form-box login'>
                <form>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required />
                        <FaUserGraduate className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember me</label>
                        <a href='#'>Forgot password</a>
                    </div>
                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p><a href='#' onClick={registerLink}>Admin Login</a></p>
                    </div>
                </form>
            </div>

            <div className='form-box admin'>
                <form>
                    <h1>Admin Login</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required />
                        <FaUserGraduate className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='E-mail' required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Agree to the terms and conditions</label>
                    </div>
                    <button type='submit'>Admin Login</button>
                    <div className='register-link'>
                        <p><a href='#' onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginAdmin;
