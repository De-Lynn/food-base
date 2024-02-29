import Auth from "./pages/Auth"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Recipe from "./pages/Recipe"
import Search from "./pages/Search"
import { HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, RECIPE_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]

export const publicRoutes = [
    {
        path: SEARCH_ROUTE,
        Component: Search
    },
    {
        path: RECIPE_ROUTE + '/:id',
        Component: Recipe
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
]