import { Routes, Route } from "react-router-dom"
import { authRoutes, publicRoutes } from "../routes"
import Home from "../pages/Home"
import { useAppSelector } from "../store/hooks"
import { getIsAuth } from "../store/userReducer"

const AppRouter = () => {
    const isAuth = useAppSelector(getIsAuth)

    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path="*" element={<Home/>}/>
        </Routes>
    )
}

export default AppRouter