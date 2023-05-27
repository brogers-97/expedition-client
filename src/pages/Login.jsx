import '../styles/login.css'
import { useState } from 'react'

export default function Login() {

    const [login, setLogin] = useState(false)


    // HANDLE LOGIN/LOGOUT FORM RENDER
    const loginClick = () => {
        setLogin(true)
    }
    const signupClick = () => {
        setLogin(false)
    }


    return(
        <div className='login-container'>
            <div className='login-title'>
                <p>Welcome To,</p>
                <h1>Expedition</h1>
            </div>
            <div className='main-login'>
                <div className='login-btn'>
                    <button onClick={loginClick}>Log In</button>
                    <button onClick={signupClick}>Sign Up</button>
                </div>

                <div className='login-forms'>
                    {login ? (
                        <form className='login' action="">
                            <input type="name" placeholder='username' />
                            <input type="password" placeholder='password' />
                            <input type="submit" />
                        </form>
                    ) : (
                        <form className='signup' action="">
                            <input type="name" placeholder='username' />
                            <input type="password" placeholder='password' />
                            <input type="email" placeholder='email' />
                            <input type="submit" />
                        </form>
                    )}
                </div>

            </div>
        </div>
    )
}