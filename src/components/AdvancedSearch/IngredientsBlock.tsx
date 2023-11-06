import { Field } from "formik"
import { IncludedInrgedientType, InrgedientsType, SearchValuesType } from "./AdvancedSearch"
import { Dispatch, SetStateAction } from "react"

type IngredientsBlockPropsType = {
    values: SearchValuesType,
    ingredients: InrgedientsType,
    setIngredients: Dispatch<SetStateAction<InrgedientsType>>,
}

function IngredientsBlock(props: IngredientsBlockPropsType) {
    const ingredientsBlock = [
        {
            type: 'include',
            title: 'INCLUDE INGREDIENTS',
            tag: 'included',
            inputFieldPlaceholder: '+ Ingredient',
            addBtnText: '+'
        },
        {
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
        <div className='ingredients'>
            {ingredientsBlock.map(block => {
                let tags
                block.type === 'include'
                ? tags = props.ingredients.included
                : tags = props.ingredients.excluded
                return (
                <div className={'type ' + block.type}>
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
    )
}

export default IngredientsBlock