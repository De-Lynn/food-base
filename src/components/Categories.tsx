import './Categories.scss'
import breakfast from '../img/breakfast.jpg'
import brunch from '../img/brunch.jpg'
import lunch from '../img/lunch.jpg'
import snack from '../img/snack.jpeg'
import teatime from '../img/teatime.jpg'
import { useState } from 'react'

function Categories() {
    const categories = [
        {id: 1, title: 'Breakfast', url: breakfast},
        {id: 2, title: 'Brunch', url: brunch},
        {id: 3, title: 'Lunch/Dinner', url: lunch},
        {id: 4, title: 'Snack', url: snack},
        {id: 5, title: 'Teatime', url: teatime},
        {id: 6, title: 'Asian', url: breakfast},
        {id: 7, title: 'Italian', url: brunch},
        {id: 8, title: 'Mexican', url: lunch},
        {id: 9, title: 'World', url: snack},
        {id: 10, title: 'More...', url: teatime},
    ]

    const [window, setNewWindow] = useState([
        {id: 1, title: 'Breakfast', url: breakfast},
        {id: 2, title: 'Brunch', url: brunch},
        {id: 3, title: 'Lunch/Dinner', url: lunch},
        {id: 4, title: 'Snack', url: snack},
        {id: 5, title: 'Teatime', url: teatime},
    ])

    const toPrev = () => {
        let firstPosition = (window[0].id - 3)<0 ? 0 : window[0].id - 3
        let lastPosition = (window[window.length-1].id - 3)<5 ? 5 : window[window.length-1].id - 3
        let newWindow = categories.filter(el => el.id>=firstPosition && el.id<=lastPosition)
        setNewWindow(newWindow)
    }

    const toNext = () => {
        let firstPosition = (window[0].id + 3)>categories.length-5 ? categories.length-4 : window[0].id + 3
        let lastPosition = (window[window.length-1].id + 3)>categories.length ? categories.length : window[window.length-1].id + 3
        let newWindow = categories.filter(el => el.id>=firstPosition && el.id<=lastPosition)
        setNewWindow(newWindow)
        
    }

    return (
        <div className="categories">
            <div className="title">Categories</div>
            <div className="categories-carousel">
                <button onClick={toPrev} disabled={window[0].id===1 ? true : false}>
                </button>
                {window.map(el => {
                    return (
                        <div className="category">
                            <div className='img'>
                                <img src={el.url} alt="" />
                            </div>
                            <div className="category-title">{el.title}</div> 
                        </div>
                    )
                })}
                <button onClick={toNext} disabled={window[window.length-1].id===categories.length ? true : false}>
                </button>
            </div>
        </div>
    )
}

export default Categories