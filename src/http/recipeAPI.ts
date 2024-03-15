import { $host } from "."

type requestParams = {
    random?: boolean, 
    cuisineType?: string, 
    mealType?: string,
    dishType?: string, 
    health?: string, 
    q?: string
}

const APP_ID='3b872ec0'
const APP_KEY='596e8d06586cc0c44bddfde37916282f'

export const fetchRecipes = async (params: requestParams) => {
    let url = `?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`

    let key: keyof typeof params
    for (key in params) {
        url += `&${key}=${params[key]}`
    }

    const {data} = await $host.get(url) 
    // const {data} = await $host.get(`?
    //     app_id=${APP_ID}&app_key=${APP_KEY}
    //     &type=public&random=${params.random}&cuisineType=${params.cuisineType}
    //     &mealType=${params.mealType}&dishType=${params.dishType}
    //     &health=${params.health}&q=${params.ingredients}
    // `) 
    
    // console.log(data)
    return data
}