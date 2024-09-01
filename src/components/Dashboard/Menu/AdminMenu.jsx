import { NavLink } from "react-router-dom"

const AdminMenu = () => {
    return (
        <div>
            <ul className="menu space-y-2">
                <li><NavLink to={'/dashboard'} end><h3 className="font-semibold">Statistics</h3></NavLink></li>
                <li><NavLink to={'add-meal'} className={"font-semibold"}>Add Meal</NavLink></li>
                <li><NavLink to={'manage-users'} className={"font-semibold"}>Manage Users</NavLink></li>
                <li><NavLink to={'all-meals'} className={"font-semibold"}>All Meals</NavLink></li>
            </ul>
        </div>
    )
}

export default AdminMenu