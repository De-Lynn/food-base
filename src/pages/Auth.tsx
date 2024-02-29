import { Link, useLocation } from 'react-router-dom'
import './Auth.scss'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <div className="auth _container">
            <div className={'auth__card'}>
                <h2 className="auth__header">{isLogin ? 'Login' : 'Sign up'}</h2>
                <form className="auth__form" action="">
                    <div className='auth__pages'>
                        <Link className={'auth__link' + (isLogin ? ' active' : '')} to={LOGIN_ROUTE}>Login</Link>
                        <Link className={'auth__link' + (!isLogin ? ' active' : '')} to={REGISTRATION_ROUTE}>Sign up</Link>
                    </div>

                    {!isLogin && 
                        <input className="auth__input" type="text" placeholder="User name"/>
                    }
                    <input className="auth__input" type="text" placeholder="Email"/>
                    <input className="auth__input" type="text" placeholder="Password"/>

                    <button className='auth__button'>{isLogin ? 'Sign in' : 'Sign up'}</button>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Auth