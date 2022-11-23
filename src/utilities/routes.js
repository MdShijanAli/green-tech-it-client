import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login/Login";
import Register from "../components/login/Register/Register";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])