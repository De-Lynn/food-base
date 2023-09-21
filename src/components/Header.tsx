import './Header.scss'

function Header() {


  return (
    <div className='header'>
      {/* search */}
      <div className='search-input-container'>
        <input className='search-input' type="text" />
      </div>

      {/* title */}
      <div className='header-title'>
        Pleasure Food
      </div>
      
      {/* social media */}
      <div className="social-media">
        <span className="sm-item">VK</span>
        <span className="sm-item">IG</span>
        <span className="sm-item">TG</span>
      </div>
    </div>
  )
}

export default Header