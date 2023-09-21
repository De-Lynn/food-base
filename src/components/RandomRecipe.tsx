import './RandomRecipe.scss'
import lasagna from '../img/lasagna.jpg'

function RandomRecipe() {
    return (
        <div className='random-recipe'>
            {/* dish img */}
            <div className='rr-img'>
                <img src={lasagna} alt="" />
            </div>

            {/* description */}
            <div className='rr-description'>
                <div>Recipe title</div>
                <p>
                    There will be recipe description. There will be recipe description.
                    There will be recipe description. There will be recipe description.
                </p>
                <button>View recipe</button>
            </div>
        </div>
    )
}

export default RandomRecipe