import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"

const DashboardLayout = () => {
    return (
        <div className="block md:flex">
            <div className="w-64 bg-blue-600">
                <Sidebar />
            </div>
            <div className="flex-1">
                <div className="p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout