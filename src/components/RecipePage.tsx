import './RecipePage.scss'
import img from '../img/breakfast.jpg'

function RecipePage() {
    const ingredients = [
        '100 ml milk',
        '30 g butter',
        '3 eggs',
        '1 tbs cocoa',
        '2 tsp backing soda',
        'a pinch of salt',
    ]

    const instructions = `There will be instructions. There will be instructions.
        There will be instructions. There will be instructions. There will be instructions.
        There will be instructions. There will be instructions. There will be instructions.
        There will be instructions. There will be instructions. There will be instructions.
    `


    return (
        <div className='recipe-page'>
            {/* title and picture */}
            <div className='random-recipe'>
                <div className='rr-img'>
                    <img src={img} alt="" />
                </div>
                <div className='rr-description recipe-title'>Recipe Title</div>
            </div>

            {/* recipe */}
            <div className='recipe'>
                <div className='recipe-header'>COOKING TIME</div>
                <div className='recipe-ingredients'>
                    <div className='ingredients-title'>INGREDIENTS</div>
                    <div className='ingredients'>
                        {ingredients.map(el => <div className='ingredient'>{el}</div>)}
                    </div>
                </div>
                <div className='recipe-instructions'>
                    <div className='instructions-title'>INSTRUCTIONS</div>
                    <div className='instructions'>{instructions}</div>
                </div>
            </div>
        </div>
    )
}

export default RecipePage