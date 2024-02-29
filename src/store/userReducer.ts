//-------------- actions' types --------------\\
const SET_IS_AUTH = 'SET_IS_AUTH'


//-------------- initial state --------------\\
const initialState = {
    isAuth: false,
}

//-------------- reducer --------------\\
export default function userReducer(state = initialState, action: any) {
    switch(action.type) {
        case SET_IS_AUTH: 
            return {...state, isAuth: action.isAuth}
        default:
            return state
    }
}

//-------------- actions --------------\\
export const setIsAuth = (isAuth: boolean) => ({type: SET_IS_AUTH, isAuth: isAuth})


//-------------- selectors --------------\\
export const getIsAuth = (state: any) => {
    return state.user.isAuth
}