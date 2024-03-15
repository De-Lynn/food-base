//-------------- actions' types --------------\\
const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_USER = 'SET_USER'


//-------------- initial state --------------\\
const initialState = {
    isAuth: false,
    user: {}
}

//-------------- reducer --------------\\
export default function userReducer(state = initialState, action: any) {
    switch(action.type) {
        case SET_IS_AUTH: 
            return {...state, isAuth: action.isAuth}
        case SET_USER:
            return {...state, user: {
                name: action.user.name ? action.user.name : 'User Name', 
                email: action.user.email, 
                password: action.user.password
            }}
        default:
            return state
    }
}

//-------------- actions --------------\\
export const setIsAuth = (isAuth: boolean) => ({type: SET_IS_AUTH, isAuth: isAuth})
export const setUser = (user: object) => ({type: SET_USER, user: user})

//-------------- selectors --------------\\
export const getIsAuth = (state: any) => {
    return state.user.isAuth
}
export const getUser = (state: any) => {
    return state.user.user
}
