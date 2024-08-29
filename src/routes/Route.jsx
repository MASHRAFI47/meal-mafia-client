import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Statistics from "../pages/Dashboard/Guest/Statistics";
import AddMeal from "../components/Dashboard/Menu/AddMeal";
import ManageUsers from "../components/Dashboard/Menu/ManageUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Statistics />
            },
            {
                path: "add-meal",
                element: <AddMeal />
            },
            {
                path: "manage-users",
                element: <ManageUsers />
            },
        ]
    }
]);