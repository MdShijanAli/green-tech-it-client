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
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AllProducts from "../Pages/Products/AllProducts/AllProducts";
import CategoryProductsPage from "../Pages/Products/CategoryProductspage/CategoryProductsPage";
import ProductDetails from "../Pages/Products/ProductDetails/ProductDetails";
import Products from "../Pages/Products/Products";


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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }

        ]
    },
    {
        path: '/products',
        element: <Products></Products>,
        children: [
            {
                path: '/products',
                element: <AllProducts></AllProducts>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/products/:name',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.name}`),
                element: <CategoryProductsPage></CategoryProductsPage>
            },

            {
                path: '/products/sp/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
                element: <ProductDetails></ProductDetails>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/dashboard/all-sellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/my-orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/my-products',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/add-a-product',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/my-buyers',
                element: <MyBuyers></MyBuyers>
            }

        ]
    }
])