import { Field, FieldArray, Form, Formik, FormikHelpers, useFormik, useFormikContext } from 'formik'
import './AdvancedSearch.scss'
import { useState } from 'react'
import axios from 'axios'
import IngredientsBlock from './IngredientsBlock'

export type SearchValuesType = {
    include: string,
    exclude: string,
    mealType: string,
    dishType: string,
    cuisineType: string,
    health: string,
}

export type IncludedInrgedientType = {
    id: number,
    ingr: string,
}

export type InrgedientsType = {
    "included": IncludedInrgedientType[],
    "excluded": IncludedInrgedientType[],
}

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

    const searchParams = [
        {
            name:'mealType',
            selectTitle: 'Any meal type',
            selectOptions: mealType,
        }, 
        {
            name: 'dishType',
            selectTitle: 'Any category',
            selectOptions: dishType,
        }, 
        {
            name: 'cuisineType',
            selectTitle: 'Any cuisine',
            selectOptions: cuisineType,
        }, 
        {
            name: 'health',
            selectTitle: 'Any diet',
            selectOptions: health,
        }]

    const [isDetailsShown, showDetails] = useState(false)

    const appId = '3b872ec0'
    const appKey = '596e8d06586cc0c44bddfde37916282f'

    const [ingredients, setIngredients] = useState<InrgedientsType>({
        "included": [], 
        "excluded": []
    })

    return (
        <div className='advanced-search'>
            <div className="separator-container">
                <div className='h-line'></div>
                <div className='separator-title'>Picking of recipes</div>
            </div>

            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    // let config = {
                    //     url: `https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${appKey}&type=public&q=meat and ${values.include}&random=true`,
                    //     method: "get",
                    //     headers: {
                    //         'Access-Control-Allow-Origin': '*',
                    //         'Access-Control-Allow-Headers': '*',
                    //         'Access-Control-Allow-Credentials': 'true'
                    //     }
                    // };
                    // let recipes = axios.request(config).then(response => response.data)
                    // console.log(recipes)
                    console.log({ values, actions });
                    console.log(ingredients)
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
                            <FieldArray name='searchParams'>
                                {() => (
                                    <div>
                                        {searchParams.map(field => (
                                            <Field className="field select-field" name={field.name} as="select">
                                                {field.selectOptions.map(el => {
                                                    return (
                                                        el === ''
                                                        ? <option value={el}>{field.selectTitle}</option>
                                                        : <option value={el}>{el}</option>
                                                    )
                                                })}
                                            </Field>
                                        ))}
                                    </div>
                                )}
                            </FieldArray>
                            <button className="field btn more-btn" type='button' onClick={() => showDetails(!isDetailsShown)}>
                                Ingredients, details
                            </button>
                            <button className="field btn submit-btn" type='submit'>
                                Search for recipes
                            </button>
                            {isDetailsShown && 
                                <div className='details'>
                                    <div className='h-line'></div>
                                    <IngredientsBlock values={values} ingredients={ingredients} setIngredients={setIngredients}/>
                                    <button className='field btn reset-btn' type='button' 
                                        onClick={() => {
                                            resetForm()
                                            setIngredients({
                                                "included": [], 
                                                "excluded": []
                                            })
                                        }}
                                    >
                                       &#10005; Clear all
                                    </button>
                                    <div className='h-line'></div>
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