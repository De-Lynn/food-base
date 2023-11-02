import { Field, Form, Formik, FormikHelpers, useFormik, useFormikContext } from 'formik'
import './AdvancedSearch.scss'
import { useState } from 'react'

function AdvancedSearch() {
    const initialValues = {
        include: '',
        exclude: '',
        mealType: '',
        dishType: '',
        cuisineType: '',
        health: '',
    }
    const mealType = ['', 'Breakfast', 'Dinner', 'Lunch', 'Snack', 'Teatime']
    const dishType = [
        '', 'Biscuits and cookies', 'Bread', 'Cereals',
        'Condiments and sauces', 'Desserts', 'Drinks', 'Main course',
        'Pancake', 'Preps', 'Preserve', 'Salad', 'Sandwiches',
        'Side dish', 'Soup', 'Starter', 'Sweets'    
    ]
    const cuisineType = [
        '', 'American', 'Asian', 'British', 'Caribbean', 'Central Europe', 
        'Chinese', 'Eastern Europe', 'French', 'Indian', 'Italian', 
        'Japanese', 'Kosher', 'Mediterranean', 'Mexican', 'Middle Eastern', 
        'Nordic', 'South American', 'South East Asian'    
    ]
    const health = [
        '', 'alcohol-coctail', 'alcohol-free', 'celery-free', 'crustacean-free', 
        'dairy-free', 'DASH', 'egg-free', 'fish-free', 'fodmap-free', 'gluten-free', 
        'immuno-supportive', 'keto-friendly', 'kosher', 'low-fat-abs', 'low-potassium', 
        'low-sugar', 'lupine-free', 'mollusk-free', 'mustard-free', 'no-oil-added',
        'paleo', 'peanut-free', 'pescatarian', 'pork-free', 'red-meat-free', 'sesame-free',
        'shellfish-free', 'soy-free', 'sugar-conscious', 'sulfite-free', 'tree-nut-free',
        'vegan', 'vegetarian', 'wheat-free'    
    ]

    const [isDetailsShown, showDetails] = useState(false)

    return (
        <div className='advanced-search'>
            <div className="separator-container">
                <div className='h-line'></div>
                <div className='separator-title'>Picking of recipes</div>
            </div>

            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {(props) => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        resetForm
                    } = props;
                    return (
                        <Form className='search-form'>
                            <Field className="field select-field" id="mealType" name="mealType" 
                                as="select"
                            >
                                {mealType.map(el => {
                                    return (
                                        el === ''
                                        ? <option value={el}>Any meal type</option>
                                        : <option value={el}>{el}</option>
                                    )
                                })}
                            </Field>
                            <Field className="field select-field" id="dishType" name="dishType" as="select">
                                {dishType.map(el => {
                                    return (
                                        el === ''
                                        ? <option value={el}>Any category</option>
                                        : <option value={el}>{el}</option>
                                    )
                                })}
                            </Field>
                            <Field className="field select-field" id="cuisineType" name="cuisineType" 
                                as="select"
                            >
                                {cuisineType.map(el => {
                                    return (
                                        el === ''
                                        ? <option value={el}>Any cuisine</option>
                                        : <option value={el}>{el}</option>
                                    )
                                })}
                            </Field>
                            <Field className="field select-field" id="health" name="health" as="select">
                                {health.map(el => {
                                    return (
                                        el === ''
                                        ? <option value={el}>Any diet</option>
                                        : <option value={el}>{el}</option>
                                    )
                                })}
                            </Field>
                            <button className="field btn more-btn" type='button'
                                onClick={() => showDetails(!isDetailsShown)}
                            >
                                Ingredients, details
                            </button>
                            <button className="field btn submit-btn" type='submit'>Search for recipes</button>
                            {
                            isDetailsShown && 
                                <div className='details'>
                                    <div className='h-line'></div>
                                    <div className='ingredients'>
                                        <div className='type include'>
                                            <span className='title'>INCLUDE INGREDIENTS</span>
                                            <Field className='input-field' id="include" name="include" placeholder="+ Ingredient">

                                            </Field>
                                        </div>
                                        <div className='type exclude'>
                                            <span className='title'>EXCLUDE INGREDIENTS</span>
                                            <Field className='input-field' id="exclude" name="exclude" placeholder="- Ingredient">

                                            </Field>
                                        </div>
                                    </div>
                                    <button className='field btn reset-btn' type='button' 
                                        onClick={() => resetForm()}
                                    >
                                       &#10005; Clear all
                                    </button>
                                </div>
                            }
                        </Form>
                    )
                }}
                
            </Formik>
        </div>
    )
}

export default AdvancedSearch