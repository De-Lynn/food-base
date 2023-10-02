import './LatestRecipes.scss'
import recipe1 from '../img/main-page-banner.jpg'
import recipe2 from '../img/banner2.jpg'
import recipe3 from '../img/lasagna.jpg'
import { Link } from 'react-router-dom'

function LatestRecipes() {
    const recipes = [
        {id: '1', title: 'Recipe', img: recipe1, desciption: 'Some description. Some description.'},
        {id: '2', title: 'Recipe', img: recipe2, desciption: 'Some description. Some description.'},
        {id: '3', title: 'Recipe', img: recipe3, desciption: 'Some description. Some description.'},
    ]

    return (
        <div className="latest-recipes-container">
            <div className="title">Latest Recipes</div>
            <div className='latest-recipes'>
                {recipes.map(el => {
                    return (
                        <div className='latest-recipe'>
                            <div className='img-container'>
                                <img src={el.img} alt="" />
                            </div>
                            <Link className='link' to={'/recipes/1'}>
                                <div className='lr-title'><span>{el.title}</span></div>
                            </Link>
                            <div className='description'>
                                <span>{el.desciption}</span>
                                <br/>
                                <span>time</span>
                            </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LatestRecipes