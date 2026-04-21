import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// layouts
const MainLayout = lazy(()=> import ("@layouts/MainLayout"))


// pages
const Home = lazy(() => import("@pages/Home"))
const Categories = lazy(() => import("@pages/Categories"))
const Products = lazy(() => import("@pages/Products"))
const AboutUs = lazy(() => import("@pages/AboutUs"))
const Login = lazy(() => import("@pages/Login"))
const Register = lazy(() => import("@pages/Register"))
const Cart = lazy(() => import("@pages/Cart"))
const Wishlist = lazy(() => import("@pages/Wishlist"))
const Profile = lazy(()=> import("@pages/Profile"))
import Error from "@pages/Error"

// compenents
import LottieHandler from '@components/UI/feedback/LottieHandler/LottieHandler';
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<div className="mt-40"><LottieHandler type='Loading'  /></div>}> <MainLayout /></Suspense>,
        errorElement: <Error />,

        children: [
            {
                index: true,
                element:
                    <Suspense fallback={<div className="mt-40"><LottieHandler type='Loading'  /></div>}> <Home /></Suspense>

            },
            {
                path: "category",
                element:
                    <Suspense fallback={<div className="mt-40"><LottieHandler type='Loading'  /></div>}><Categories /></Suspense>
            },

            {
                path: "categories/products/:prefix",
                element: <Suspense fallback={<div className="mt-40"><LottieHandler type='Loading'  /></div>}><Products /></Suspense>,
                loader: ({ params }) => {
                    if (
                        typeof params.prefix !== "string" ||
                        !/^[a-z]+$/i.test(params.prefix)
                    ) {
                        throw new Response("Bad Request", {
                            statusText: "Category not found",
                            status: 400,
                        });
                    }
                    return true;
                },
            },
            {
                path: "about-us",
                element: <Suspense fallback={<div className="mt-40"><LottieHandler type='Loading'  /></div>}> <AboutUs /></Suspense>,
            },
            {
                path: "wishlist",
                element: <ProtectedRoute><Suspense fallback={<div className="mt-40"><LottieHandler type='Loading'  /></div>}> <Wishlist /></Suspense></ProtectedRoute>
            },
            {
                path: "cart",
                element: <Suspense fallback={<div className="mt-40"><LottieHandler type='Loading'  /></div>}> <Cart /></Suspense>
            },
            {
                path: "login",
                element: <Suspense fallback={<div className="mt-40"><LottieHandler type='Loading'  /></div>}><Login /></Suspense>,
            },
            { 
                path: "register",
                element: <Suspense fallback={<div className="mt-40"><LottieHandler type='Loading'  /></div>}> <Register /></Suspense>,
            },
            {
                path: "profile",
                element: <ProtectedRoute><Suspense fallback={<div className="mt-40"><LottieHandler type='Loading'  /></div>}> <Profile /></Suspense></ProtectedRoute>,
            },
        ]
    }
])



const AppRouter = () => {
    return <RouterProvider router={router} />;
};


export default AppRouter