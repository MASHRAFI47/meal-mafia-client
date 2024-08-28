import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"

const DashboardLayout = () => {
    return (
        <div className="flex">
            <div>
                <Sidebar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout