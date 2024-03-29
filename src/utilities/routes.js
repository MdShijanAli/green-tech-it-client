import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login/Login";
import Register from "../components/login/Register/Register";
import AllBuyers from "../Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Dashboard/AllSallers/AllSellers";
import MyOrders from "../Dashboard/Buyer/MyOrders/MyOrders";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import AddAProduct from "../Dashboard/Saller/AddAProduct/AddAProduct";
import MyBuyers from "../Dashboard/Saller/MyBuyers/MyBuyers";
import MyProducts from "../Dashboard/Saller/MyProducts/MyProducts";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AllProducts from "../Pages/Products/AllProducts/AllProducts";
import CategoryProductsPage from "../Pages/Products/CategoryProductspage/CategoryProductsPage";
import ProductDetails from "../Pages/Products/ProductDetails/ProductDetails";
import PriveteRoute from "./PrivateRoute/PriveteRoute";
import BlogLayout from "../layout/BlogLayout";
import BlogPage from "../Pages/Blog/BlogPage/BlogPage";
import BlogDetails from "../Pages/Blog/BlogPage/BlogDetails";
import AllUsers from "../Dashboard/Admin/AllUsers";
import Products from "../Dashboard/Admin/Products";
import PublicRoute from "./PublicRoute";


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
                element: <PublicRoute><Login></Login></PublicRoute>
            },
            {
                path: '/register',
                element: <PublicRoute><Register></Register></PublicRoute>
            },

            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/products',
                element: <AllProducts></AllProducts>,
                loader: () => fetch(`${process.env.REACT_APP_apiUrl}/products`)
            },
            {
                path: '/products/:name',
                loader: ({ params }) => fetch(`${process.env.REACT_APP_apiUrl}/products/${params.name}`),
                element: <CategoryProductsPage></CategoryProductsPage>
            },

            {
                path: '/products/sp/:id',
                loader: ({ params }) => fetch(`${process.env.REACT_APP_apiUrl}/product/${params.id}`),
                element: <PriveteRoute><ProductDetails></ProductDetails></PriveteRoute>
            }

        ]
    },

    {
        path: '/blog',
        element: <BlogLayout />,
        children: [
                {
                    path: '/blog',
                    element: <BlogPage />,
                    loader: () => fetch(`${process.env.REACT_APP_apiUrl}/blogs`)
                },
    
                {
                    path: '/blog/:id',
                    element: <BlogDetails />,
                    loader: ({ params }) => fetch(`${process.env.REACT_APP_apiUrl}/blogs/${params.id}`)
                },
        ]
    },

    {
        path: '/dashboard',
        element: <PriveteRoute><DashboardLayout></DashboardLayout></PriveteRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PriveteRoute><Dashboard></Dashboard></PriveteRoute>

            },
            {
                path: '/dashboard/products',
                element: <PriveteRoute><Products /></PriveteRoute>

            },
            {
                path: '/dashboard/all-sellers',
                element: <PriveteRoute><AllSellers></AllSellers></PriveteRoute>
            },
            {
                path: '/dashboard/all-users',
                element: <PriveteRoute><AllUsers /></PriveteRoute>
            },
            {
                path: '/dashboard/all-buyers',
                element: <PriveteRoute><AllBuyers></AllBuyers></PriveteRoute>
            },
            {
                path: '/dashboard/my-orders',
                element: <PriveteRoute><MyOrders></MyOrders></PriveteRoute>
            },
            {
                path: '/dashboard/my-products',
                element: <PriveteRoute><MyProducts></MyProducts></PriveteRoute>,
                loader: () => fetch(`${process.env.REACT_APP_apiUrl}/categories`)
            },
            {
                path: '/dashboard/add-a-product',
                element: <PriveteRoute><AddAProduct></AddAProduct></PriveteRoute>,
                loader: () => fetch(`${process.env.REACT_APP_apiUrl}/categories`)
            },
            {
                path: '/dashboard/my-buyers',
                element: <PriveteRoute><MyBuyers></MyBuyers></PriveteRoute>
            }


        ]
    }
])