import AdminMenu from "../Dashboard/Menu/AdminMenu"

const Sidebar = () => {
    return (
        <div className="min-h-screen bg-blue-600">
            <ul className="menu space-y-2">
                <AdminMenu />
            </ul>
        </div>
    )
}

export default Sidebar