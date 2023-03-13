import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./Layout/DefaultLayout";
import DefaultLayout from "./Layout/DefaultLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [

        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />
            }
        ],
    }
]);

export default router;
