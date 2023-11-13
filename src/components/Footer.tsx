import { v1 } from 'uuid'
import './Footer.scss'

function Footer() {
    const footerContent = [
        {id: 1, title: 'TOP RECIPES', content: [
            'Breakfast', 'Snack', 'Salads', 'Dinner', 'Soup', 'Desserts', 'Cookies', 'Main Dishes',
        ]},
        {id: 2, title: 'BROWSE', content: []},
        {id: 3, title: 'INFORMATION', content: [
            'About us', 'Contact', 'Privacy Policy'
        ]},
        {id: 4, title: 'CONNECT', content: [
            'VK', 'IG', 'TG'
        ]},
    ]

    return (
        <div className="footer _container">
            <div className='chapters'>
                {footerContent.map(el => {
                    return (
                        <div key={el.id} className='chapter'>
                            <div className='chapter-title'>{el.title}</div>
                            <div className='chapter-content'>
                                {el.content.map(content => <span key={v1()}>{content}</span>)}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='header__logo'>
                Pleasure Food
            </div>
        </div>
    )
}

export default Footer