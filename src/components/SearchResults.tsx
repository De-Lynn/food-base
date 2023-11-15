import { Link } from "react-router-dom"
import { v1 } from "uuid"
import "./SearchResults.scss"

function SearchResults(props: any) {
    return (
        <div className='recipes'>
                {props.recipes.length !== 0 && props.recipes.map((el: any) => {
                    return (
                        <Link className='link' to={'/recipes/1'}>
                            <div className='recipe' key={v1()}>
                                <div className='description'>
                                    <div className='img-container'>
                                        <img className='img' src={el.recipe.images.SMALL.url} alt="" />
                                    </div>
                                    <div className='text'>
                                        <div className='tags'>
                                            {el.recipe.dishType[0].toUpperCase()}
                                            <span className='delimiter'>&#183;</span>
                                            {el.recipe.cuisineType[0].toUpperCase()}
                                        </div>
                                        <div className='title'>{el.recipe.label}</div>
                                        <div className='health-labels'>
                                            {el.recipe.healthLabels.map((l: string) => <span>{l}
                                                <span className='delimiter'>&#183;</span>
                                            </span>)}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='nutrition'>
                                    <div className='energy-value'>
                                        <div className='yield'>{el.recipe.yield} servings</div>
                                        <div className='calories'>
                                            <span>{Math.floor(el.recipe.calories / el.recipe.yield)}</span> kcal
                                        </div>
                                    </div>
                                    <div className='total-nutrients'>
                                        <div className='protein'>
                                            <span><span className='dot green'></span>&nbsp;&nbsp;&nbsp;PROTEIN</span>
                                            <span>{Math.floor(el.recipe.totalNutrients.PROCNT.quantity)} g</span>
                                        </div>
                                        <div className='fat'>
                                            <span><span className='dot yellow'></span>&nbsp;&nbsp;&nbsp;FAT</span>
                                            <span>{Math.floor(el.recipe.totalNutrients.FAT.quantity)} g</span>
                                        </div>
                                        <div className='carb'>
                                            <span><span className='dot red'></span>&nbsp;&nbsp;&nbsp;CARB</span>
                                            <span>{Math.floor(el.recipe.totalNutrients.CHOCDF.quantity)} g</span>
                                        </div>
                                    </div> 
                                    <div className='total-nutrients'>
                                        <div className='cholesterol'>
                                            <span>Cholesterol</span>
                                            <span>{Math.floor(el.recipe.totalNutrients.CHOLE.quantity)} mg</span>
                                        </div>
                                        <div className='sodium'>
                                            <span>Sodium</span>
                                            <span>{Math.floor(el.recipe.totalNutrients.NA.quantity)} mg</span>
                                        </div>
                                        <div className='calcium'>
                                            <span>Calcium</span>
                                            <span>{Math.floor(el.recipe.totalNutrients.CA.quantity)} mg</span>
                                        </div>
                                        <div className='magnesium'>
                                            <span>Magnesium</span>
                                            <span>{Math.floor(el.recipe.totalNutrients.MG.quantity)} mg</span>
                                        </div>
                                        <div className='potassium'>
                                            <span>Potassium</span>
                                            <span>{Math.floor(el.recipe.totalNutrients.K.quantity)} mg</span>
                                        </div>
                                        <div className='iron'>
                                            <span>Iron</span>
                                            <span>{Math.floor(el.recipe.totalNutrients.FE.quantity)} mg</span>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
    )
}

export default SearchResults