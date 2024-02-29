import { Field, FieldArray, Form } from "formik";
import { useState } from "react";
import { v1 } from "uuid";
import IngredientsBlock from "./IngredientsBlock";
import { IncludedInrgedientType } from "./AdvancedSearch";

function SearchForm (props: any) {

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
    
    return (
        <Form className='search-form'>
            <FieldArray name='search-params'>
                {() => (
                    <div className='search-params'>
                        {props.searchParams.map((field: any) => (
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
                    {/* <IngredientsBlock values={props.values} ingredients={props.ingredients} setIngredients={props.setIngredients} /> */}

                    {/*--------------------ingredients block------------------- */}
                    <div className='ingredients'>
                        {ingredientsBlock.map(block => {
                            let tags
                            block.type === 'include'
                            ? tags = props.ingredients.included
                            : tags = props.ingredients.excluded
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
                                            ? inputString = props.values.include
                                            : inputString = props.values.exclude
                                            if (inputString.trim()) {
                                                addIngredients(block.tag, tags.length, inputString)
                                                block.type === 'include'
                                                ? props.values.include = ''
                                                : props.values.exclude = ''
                                            }
                                        }}
                                    >
                                        {block.addBtnText}
                                    </button>
                                </div>
                            </div>
                        )})}
                    </div>

                    <button className='field btn reset-btn' type='button'
                        onClick={() => {
                            props.resetForm();
                            props.setIngredients({
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
    )
}

export default SearchForm