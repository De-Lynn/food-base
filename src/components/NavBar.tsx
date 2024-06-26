import { Link } from "react-router-dom"
import { useAppDispath, useAppSelector } from "../store/hooks"
import { getIsAuth, setIsAuth, setUser} from "../store/userReducer"
import '../styles/NavBar.scss'
import { HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE } from "../utils/consts"

const NavBar = () => {
    const isAuth = useAppSelector(getIsAuth)
    const dispatch = useAppDispath()

    const onSearchButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // alert(e.target)
    }

    const onSingoutButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(setUser({}))
        dispatch(setIsAuth(false))
    }
  
    return (
        <div className='navbar _container'>
            {/* search */}
            <div className='navbar__input input__container'>
                <input className='navbar__input input' type="text"  placeholder='Enter an ingredients'/>
                <Link to={SEARCH_ROUTE}>
                    <button onClick={onSearchButtonClick}>Search</button>
                </Link>
            </div>
                
            {/* title */}
            <Link className='link navbar__logo' to={HOME_ROUTE}>
                Pleasure Food
            </Link>

            <div className="navbar__right">
                {/* social media */}
                <div className="social-media">
                    <ul className='sm-list'>
                        <li className="sm-item">VK</li>
                        <li className="sm-item">IG</li>
                        <li className="sm-item">TG</li>
                    </ul>
                </div>

                {isAuth 
                    ? <div className="navbar__auth">
                        <Link to={PROFILE_ROUTE}>Profile</Link>
                        <button onClick={onSingoutButtonClick}>Sign out</button>
                    </div>
                    : <div className="navbar__auth">
                        <Link to={LOGIN_ROUTE}>
                            <button>Sign in</button>
                        </Link>
                        <Link to={REGISTRATION_ROUTE}>
                            <button>Sign up</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar