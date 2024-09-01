import { useQuery } from "@tanstack/react-query"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import UsersDataRow from "../../../components/TableDataRows/UsersDataRow";


const ManageUsers = () => {

    const axiosCommon = useAxiosCommon();

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosCommon.get("/users")
            return data;
        }
    })

    if (isLoading) return <LoadingSpinner />

    console.log(users)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map(user => <UsersDataRow key={user?._id} user={user} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}



export default ManageUsers