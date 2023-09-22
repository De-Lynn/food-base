import './PopularRecipes.scss'
import recipe1 from '../img/breakfast.jpg'
import recipe2 from '../img/lunch.jpg'
import recipe3 from '../img/snack.jpeg'
import recipe4 from '../img/brunch.jpg'

function PopularRecipes() {
    const recipes = [
        {id: '1', title: 'Recipe', img: recipe1, desciption: 'Some description. Some description. Some description.'},
        {id: '2', title: 'Recipe', img: recipe2, desciption: 'Some description. Some description. Some description.'},
        {id: '3', title: 'Recipe', img: recipe3, desciption: 'Some description. Some description. Some description.'},
        {id: '4', title: 'Recipe', img: recipe4, desciption: 'Some description. Some description. Some description.'},
    ]

    return (
        <div className='popular-recipes-container'>
            <div className='title'>Popular Recipes</div>
            <div className='popular-recipes'>
                {recipes.map(el => {
                    return (
                        <div className='popular-recipe'>
                            <div className='pr-img'>
                                <img src={el.img} alt="" />
                            </div>
                            <div className='descr-container'>
                                <div className='pr-title'>{el.title}</div>
                                <div>rates</div>
                                <div>{el.desciption}</div>  
                                <div>time</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PopularRecipes