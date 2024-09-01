import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Statistics from "../pages/Dashboard/Guest/Statistics";
import Meals from "../pages/Meals/Meals";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddMeal from "../pages/Dashboard/Admin/AddMeal";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AllMeals from "../pages/Dashboard/Admin/AllMeals";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/meals",
                element: <Meals />,
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
        element: <AdminRoute><DashboardLayout /></AdminRoute>,
        children: [
            {
                index: true,
                element: <Statistics />
            },
            {
                path: "add-meal",
                element: <AdminRoute><AddMeal /></AdminRoute>
            },
            {
                path: "manage-users",
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: "all-meals",
                element: <AdminRoute><AllMeals /></AdminRoute>
            },
        ]
    }
]);