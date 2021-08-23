import React from 'react'
import './Login.css'

function Login() {
    const loginToApp = () => {}
    const register = () => {}

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />

            <form>
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Profile pic url"/>
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <div className="login_register_container">
                <p>Not a member? <span className="login__register" onClick={register}>Register Now</span></p>
            </div>
        </div>
    )
}

export default Login
