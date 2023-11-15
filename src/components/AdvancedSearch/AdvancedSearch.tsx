import { Field, FieldArray, Form, Formik, FormikHelpers, useFormik, useFormikContext } from 'formik'
import './AdvancedSearch.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import IngredientsBlock from './IngredientsBlock'
import { v1 } from 'uuid'
import { Link } from 'react-router-dom'
import SearchResults from '../SearchResults'

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

function AdvancedSearch(props: any) {
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
        }
    ]

    const [isDetailsShown, showDetails] = useState(false)

    const appId = '3b872ec0'
    const appKey = '596e8d06586cc0c44bddfde37916282f'

    const [ingredients, setIngredients] = useState<InrgedientsType>({
        "included": [], 
        "excluded": []
    })

    const [searchValues, setSearchValues] = useState({
        mealType: '',
        dishType: '',
        cuisineType: '',
        health: '',
    })

    async function fetchRecipes() {
        let q = ingredients.included.map(el => el.ingr).toString() // ingredients list for request
        let baseUrl = `https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${appKey}&type=public`
        let url = baseUrl
        
        if (q !== '') url += `&q=${q}`
        if (searchValues.mealType !== '') url += `&mealType=${searchValues.mealType}`
        if (searchValues.dishType !== '') url += `&dishType=${searchValues.dishType}`
        if (searchValues.cuisineType !== '') url += `&cuisineType=${searchValues.cuisineType}`
        if (searchValues.health !== '') url += `&health=${searchValues.health}`

        if (url === baseUrl) {
            let type = ''
            do {
               type = mealType[Math.floor(Math.random()*mealType.length)] 
            } while (type === '')
            
            url = url + `&mealType=${type}&random=true`
        }
        const config = {
            url: url,
            method: "get",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Credentials': 'true'
            }
        }
        const response = await axios.request(config).then(response => response.data.hits)
        props.setRecipes(response)
    }

    // useEffect(() => {
    //     fetchRecipes()
    // }, [searchValues])

    return (
        <div className='advanced-search'>
            <div className="separator-container">
                <div className='h-line'></div>
                <div className='separator-title'>Picking of recipes</div>
            </div>

            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    setSearchValues({
                        mealType: values.mealType,
                        dishType: values.dishType,
                        cuisineType: values.cuisineType,
                        health: values.health,
                    })
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
                            <FieldArray name='search-params'>
                                {() => (
                                    <div className='search-params'>
                                        {searchParams.map(field => (
                                            <Field className="field select-field" name={field.name} as="select" key={v1()}>
                                                {field.selectOptions.map(el => {
                                                    return (
                                                        el === ''
                                                        ? <option key={v1()} value={el}>{field.selectTitle}</option>
                                                        : <option key={v1()} value={el}>{el}</option>
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