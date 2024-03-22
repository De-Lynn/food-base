import '../styles/Categories.scss'
import breakfast from '../img/breakfast.jpg'
import brunch from '../img/brunch.jpg'
import lunch from '../img/lunch.jpg'
import snack from '../img/snack.jpeg'
import teatime from '../img/teatime.jpg'

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
function Categories() {
    function toLeft() {
        const carouselBlock = document.querySelector(".categories-carousel")
        carouselBlock?.scrollBy({
            left: -200, 
            behavior: 'smooth'
        })
    }

    function toRight() {
        const carouselBlock = document.querySelector(".categories-carousel")
        carouselBlock?.scrollBy({
            left: 200, 
            behavior: 'smooth'
        })
    }

    return (
        <div className="categories">
            <div className="title">Categories</div>
            <div className='categories-carousel__container'>
                <button onClick={toLeft}></button>
                <div className="categories-carousel">
                    {categories.map(el => {
                        return (
                            <div key={el.id} className="category">
                                <div className='img'>
                                    <img src={el.url} alt="" />
                                </div>
                                <div className="category-title">{el.title}</div> 
                            </div>
                        )
                    })}
                </div>
                <button onClick={toRight}></button>
            </div>
        </div>
    )
}

export default Categories