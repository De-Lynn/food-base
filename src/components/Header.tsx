import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  const onSearchButtonClick = () => {

  }

  return (
    <div className='header-wrapper'>
      <div className='header _container'>
        {/* search */}
        <div className='header__input input__container'>
          <input className='header__input input' type="text" />
          <button onClick={onSearchButtonClick}>S</button>
        </div>

        {/* title */}
        <Link className='link header__logo' to={'/'}>
          Pleasure Food
        </Link>
        
        {/* social media */}
        <div className="social-media">
          <ul className='sm-list'>
            <li className="sm-item">VK</li>
            <li className="sm-item">IG</li>
            <li className="sm-item">TG</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header