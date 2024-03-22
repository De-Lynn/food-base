import { Field } from "formik"
import { IncludedInrgedientType, InrgedientsType, SearchValuesType } from "./AdvancedSearch"
import { Dispatch, SetStateAction } from "react"
import { v1 } from "uuid"

type IngredientsBlockPropsType = {
    values: SearchValuesType,
    ingredients: InrgedientsType,
    setIngredients: Dispatch<SetStateAction<InrgedientsType>>,
}

const ingredientsBlock = [
    {
        id: v1(),
        type: 'include',
        title: 'INCLUDE INGREDIENTS',
        tag: 'included',
        inputFieldPlaceholder: '+ Ingredient',
        addBtnText: '+',
    },
    {
        id: v1(),
        type: 'exclude',
        title: 'EXCLUDE INGREDIENTS',
        tag: 'excluded',
        inputFieldPlaceholder: '- Ingredient',
        addBtnText: '-',
    }
]

function IngredientsBlock(props: IngredientsBlockPropsType) {
    // const {values, ingredients, setIngredients, ...rest} = props

    const addIngredients = (type: string, id: number, ingr: string) => {
        let copy = [...props.ingredients[type]]
        copy.push({id: id, ingr: ingr}) 
        props.setIngredients({...props.ingredients, [type]: copy})
    }

    const removeIngredients = (type: string, id: number) => {
        let copy = [...props.ingredients[type]].filter(el => el.id !== id)
        props.setIngredients({...props.ingredients, [type]: copy})
    }

    return (
        <div className='ingredients'>
            {ingredientsBlock.map(block => {
                let tags = props.ingredients[`${block.type}d`]
                let inputString = props.values[block.type]
                return (
                <div className={'type ' + block.type} key={block.id}>
                    <span className='title'>{block.title}</span>
                    <div className='circuit'>
                        <div className='tags'>
                            {tags.map((el: IncludedInrgedientType) => {
                                return (
                                    <div className='tag' key={el.id}>
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
                        <Field className='input-field' id={block.type} name={block.type} 
                            placeholder={block.inputFieldPlaceholder} value={inputString}
                        >
                        </Field>
                        <button className='add' type='button' 
                            onClick={() => {
                                if (inputString.trim()) {
                                    addIngredients(block.tag, tags.length, inputString.trim())
                                    
                                    props.values[block.type] = ''
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