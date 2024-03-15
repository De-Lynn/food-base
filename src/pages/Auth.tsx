import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Auth.scss'
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { useState } from 'react'
import { useAppDispath } from '../store/hooks'
import { setIsAuth, setUser } from '../store/userReducer'

const Auth = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useAppDispath()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.currentTarget

        dispatch(setUser({
            name: target.username?.value, 
            email: target.email.value, 
            password: target.password.value
        }))
        dispatch(setIsAuth(true))
        
        navigate(HOME_ROUTE)
    }

    return (
        <div className="auth _container">
            <div className={'auth__card'}>
                <h2 className="auth__header">{isLogin ? 'Login' : 'Sign up'}</h2>
                <form className="auth__form" action="" onSubmit={onSubmit}>
                    <div className='auth__pages'>
                        <Link className={'auth__link' + (isLogin ? ' active' : '')} to={LOGIN_ROUTE}>Login</Link>
                        <Link className={'auth__link' + (!isLogin ? ' active' : '')} to={REGISTRATION_ROUTE}>Sign up</Link>
                    </div>

                    {!isLogin && 
                        <input name='username' className="auth__input" type="text" placeholder="User name"
                            value={userName} onChange={e => setUserName(e.target.value)}
                        />
                    }
                    <input name='email' className="auth__input" type="text" placeholder="Email" 
                        value={email} onChange={e => setEmail(e.target.value)}
                    />
                    <input name='password' className="auth__input" type="text" placeholder="Password" 
                        value={password} onChange={e => setPassword(e.target.value)}
                    />

                    <button type='submit' className='auth__button'>{isLogin ? 'Sign in' : 'Sign up'}</button>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Auth