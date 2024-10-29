import React from 'react';
import "./loginRegister/LoginRegister.css"
const LoginRegister = () => {
  return (
    <div className='wrapper'>
        <div className='form-boxlogin'>
            <form action="">
                <h1>LOGIN</h1>
                <div className="input-box">
                    <label htmlFor="">Username:</label>
                    <input type="text" placeholder='Username' required />
                </div>

                <div className="input-box">
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder='*********' required />
                </div>

                <div className="input-box">
                    <label htmlFor="">Email:</label>
                    <input type="mail" placeholder='E-mail' required />
                </div>
                
                <div className="remember-forget">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forget Password</a>
                </div>
                    <button type='submit'>Login</button>

                    <div className="register-link"><p>Don't have an account? <a href="#">Register</a> </p></div>
            </form>

        </div>
    </div>
  );
};

export default LoginRegister;
