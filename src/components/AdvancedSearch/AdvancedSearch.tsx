import './AdvancedSearch.scss'
import { useEffect, useState } from 'react'
import { Field, FieldArray, Form, Formik } from 'formik';
import axios from 'axios';
import IngredientsBlock from './IngredientsBlock';
import { v1 } from 'uuid';
import SearchForm from './SearchForm';

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
    };
    const mealType = ['', 'Breakfast', 'Dinner', 'Lunch', 'Snack', 'Teatime'];
    const dishType = [
        '', 'Biscuits and cookies', 'Bread', 'Cereals',
        'Condiments and sauces', 'Desserts', 'Drinks', 'Main course',
        'Pancake', 'Preps', 'Preserve', 'Salad', 'Sandwiches',
        'Side dish', 'Soup', 'Starter', 'Sweets'
    ];
    const cuisineType = [
        '', 'American', 'Asian', 'British', 'Caribbean', 'Central Europe',
        'Chinese', 'Eastern Europe', 'French', 'Indian', 'Italian',
        'Japanese', 'Kosher', 'Mediterranean', 'Mexican', 'Middle Eastern',
        'Nordic', 'South American', 'South East Asian'
    ];
    const health = [
        '', 'alcohol-coctail', 'alcohol-free', 'celery-free', 'crustacean-free',
        'dairy-free', 'DASH', 'egg-free', 'fish-free', 'fodmap-free', 'gluten-free',
        'immuno-supportive', 'keto-friendly', 'kosher', 'low-fat-abs', 'low-potassium',
        'low-sugar', 'lupine-free', 'mollusk-free', 'mustard-free', 'no-oil-added',
        'paleo', 'peanut-free', 'pescatarian', 'pork-free', 'red-meat-free', 'sesame-free',
        'shellfish-free', 'soy-free', 'sugar-conscious', 'sulfite-free', 'tree-nut-free',
        'vegan', 'vegetarian', 'wheat-free'
    ];

    const searchParams = [
        {
            id: v1(),
            name: 'mealType',
            selectTitle: 'Any meal type',
            selectOptions: mealType,
        },
        {
            id: v1(),
            name: 'dishType',
            selectTitle: 'Any category',
            selectOptions: dishType,
        },
        {
            id: v1(),
            name: 'cuisineType',
            selectTitle: 'Any cuisine',
            selectOptions: cuisineType,
        },
        {
            id: v1(),
            name: 'health',
            selectTitle: 'Any diet',
            selectOptions: health,
        }
    ];

    const appId = '3b872ec0';
    const appKey = '596e8d06586cc0c44bddfde37916282f';

    const [ingredients, setIngredients] = useState<InrgedientsType>({
        "included": [],
        "excluded": []
    });

    const [searchValues, setSearchValues] = useState({
        mealType: '',
        dishType: '',
        cuisineType: '',
        health: '',
    });

    async function fetchRecipes() {
        let q = ingredients.included.map(el => el.ingr).toString(); // ingredients list for request
        let baseUrl = `https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${appKey}&type=public`;
        let url = baseUrl;

        if (q !== '') url += `&q=${q}`;
        if (searchValues.mealType !== '') url += `&mealType=${searchValues.mealType}`;
        if (searchValues.dishType !== '') url += `&dishType=${searchValues.dishType}`;
        if (searchValues.cuisineType !== '') url += `&cuisineType=${searchValues.cuisineType}`;
        if (searchValues.health !== '') url += `&health=${searchValues.health}`;

        if (url === baseUrl) {
            let type = '';
            do {
                type = mealType[Math.floor(Math.random() * mealType.length)];
            } while (type === '');

            url = url + `&mealType=${type}&random=true`;
        }
        const config = {
            url: url,
            method: "get",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Credentials': 'true'
            }
        };
        const response = await axios.request(config).then(response => response.data.hits);
        props.setRecipes(response);
    }


    const [isDetailsShown, showDetails] = useState(false);
    const ingredientsBlock = [
        {
            id: v1(),
            type: 'include',
            title: 'INCLUDE INGREDIENTS',
            tag: 'included',
            inputFieldPlaceholder: '+ Ingredient',
            addBtnText: '+'
        },
        {
            id: v1(),
            type: 'exclude',
            title: 'EXCLUDE INGREDIENTS',
            tag: 'excluded',
            inputFieldPlaceholder: '- Ingredient',
            addBtnText: '-'
        }
    ]

    const addIngredients = (type: string, id: number, ingr: string) => {
        let copy
        if (type==='included') {
            copy = [...props.ingredients.included]
            copy.push({id: id, ingr: ingr}) 
            props.setIngredients({...props.ingredients, included: copy})
        } else if (type==='excluded') {
            copy = [...props.ingredients.excluded]
            copy.push({id: id, ingr: ingr}) 
            props.setIngredients({...props.ingredients, excluded: copy})
        }
    }
    const removeIngredients = (type: string, id: number) => {
        let copy
        if (type==='included') {
            copy = [...props.ingredients.included].filter(el => el.id !== id)
            props.setIngredients({...props.ingredients, included: copy})
        } else if (type==='excluded') {
            copy = [...props.ingredients.excluded].filter(el => el.id !== id)
            props.setIngredients({...props.ingredients, excluded: copy})
        }
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
                    });
                    actions.setSubmitting(false);
                }}
            >
                {(props) => {
                    const {
                        values, handleChange, resetForm
                    } = props;

                    return (
                        // <SearchForm searchParams={searchParams} ingredients={ingredients} setIngredients={setIngredients} values={values}
                        //     resetForm={resetForm}/>

                        //--------------- SearchForm -------------------//
                        <Form className='search-form'>
                            <FieldArray name='search-params'>
                                {() => (
                                    <div className='search-params'>
                                        {searchParams.map((field: any) => (
                                            <Field className="field select-field" name={field.name} as="select" key={field.id}>
                                                {field.selectOptions.map((el: any) => {
                                                    return (
                                                        el === ''
                                                            ? <option key={v1()} value={el}>{field.selectTitle}</option>
                                                            : <option key={v1()} value={el}>{el}</option>
                                                    );
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

                                    {/*--------------------ingredients block------------------- */}
                                    {/* <div className='ingredients'>
                                        {ingredientsBlock.map(block => {
                                            let tags
                                            block.type === 'include'
                                            ? tags = ingredients.included
                                            : tags = ingredients.excluded
                                            return (
                                            <div className={'type ' + block.type} key={block.id}>
                                                <span className='title'>{block.title}</span>
                                                <div className='circuit'>
                                                    <div className='tags'>
                                                        {tags.map((el: IncludedInrgedientType) => {
                                                            return (
                                                                <div className='tag'>
                                                                    <span >{el.ingr}</span>
                                                                    <button className='remove' type='button' 
                                                                        onClick={() => {
                                                                            removeIngredients(block.tag, el.id)
                                                                        }}
                                                                    >
                                                                        &#10005;
                                                                    </button>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    <Field className='input-field' id={block.type} name={block.type} placeholder={block.inputFieldPlaceholder}></Field>
                                                    <button className='add' type='button' 
                                                        onClick={() => {
                                                            let inputString
                                                            block.type === 'include'
                                                            ? inputString = values.include
                                                            : inputString = values.exclude
                                                            if (inputString.trim()) {
                                                                addIngredients(block.tag, tags.length, inputString)
                                                                block.type === 'include'
                                                                ? values.include = ''
                                                                : values.exclude = ''
                                                            }
                                                        }}
                                                    >
                                                        {block.addBtnText}
                                                    </button>
                                                </div>
                                            </div>
                                        )})}
                                    </div> */}

                                    <button className='field btn reset-btn' type='button'
                                        onClick={() => {
                                            resetForm();
                                            setIngredients({
                                                "included": [],
                                                "excluded": []
                                            });
                                        }}
                                    >
                                        &#10005; Clear all
                                    </button>
                                    <div className='h-line'></div>
                                </div>
                            }
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default AdvancedSearch