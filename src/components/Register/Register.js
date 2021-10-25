import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="login-form">
                <div>
                    <h2>Create account</h2>
                    <form onSubmit="">
                        <input type="email" name="" id="" placeholder="your email" />
                        <br />
                        <input type="password" name="" id="" placeholder="your password" />
                        <br />
                        <input type="password" name="" id="" placeholder="re-enter your password" />
                        <br />
                        <input className="btn-regular" type="submit" value="Submit" />
                    </form>
                    <p>already have an account?<Link to="/login">Login</Link></p>
                    <button className="btn-regular">Google Sign in</button>
                </div>

            </div>

        </div>

    );
};

export default Register;