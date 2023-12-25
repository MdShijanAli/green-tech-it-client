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
                loader: () => fetch('https://green-tech-it-server.vercel.app/products')
            },
            {
                path: '/products/:name',
                loader: ({ params }) => fetch(`https://green-tech-it-server.vercel.app/products/${params.name}`),
                element: <CategoryProductsPage></CategoryProductsPage>
            },

            {
                path: '/products/sp/:id',
                loader: ({ params }) => fetch(`https://green-tech-it-server.vercel.app/product/${params.id}`),
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
                    loader: () => fetch('https://green-tech-it-server.vercel.app/blogs')
                },
    
                {
                    path: '/blog/:id',
                    element: <BlogDetails />,
                    loader: ({ params }) => fetch(`https://green-tech-it-server.vercel.app/blogs/${params.id}`)
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
                path: '/dashboard/all-sellers',
                element: <PriveteRoute><AllSellers></AllSellers></PriveteRoute>
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
                element: <PriveteRoute><MyProducts></MyProducts></PriveteRoute>
            },
            {
                path: '/dashboard/add-a-product',
                element: <PriveteRoute><AddAProduct></AddAProduct></PriveteRoute>,
                loader: () => fetch('https://green-tech-it-server.vercel.app/categories')
            },
            {
                path: '/dashboard/my-buyers',
                element: <PriveteRoute><MyBuyers></MyBuyers></PriveteRoute>
            }


        ]
    }
])