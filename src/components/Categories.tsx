import './Categories.scss'
import breakfast from '../img/breakfast.jpg'
import brunch from '../img/brunch.jpg'
import lunch from '../img/lunch.jpg'
import snack from '../img/snack.jpeg'
import teatime from '../img/teatime.jpg'

function Categories() {
    const categories = [
        {id: '1', title: 'Breakfast', url: breakfast},
        {id: '2', title: 'Brunch', url: brunch},
        {id: '3', title: 'Lunch/Dinner', url: lunch},
        {id: '4', title: 'Snack', url: snack},
        {id: '5', title: 'Teatime', url: teatime},
    ]

    return (
        <div className="categories">
            <div className="title">Categories</div>
            <div className="categories-carousel">
                {categories.map(el => {
                    return (
                        <div className="category">
                            <div className='img'>
                                <img src={el.url} alt="" />
                            </div>
                            <div className="category-title">{el.title}</div> 
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories