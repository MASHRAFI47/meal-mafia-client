import { useQuery } from "@tanstack/react-query"
import useAxiosCommon from "../../../../hooks/useAxiosCommon"
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import AllMealsDataRow from "../../../../components/TableDataRows/AllMealsDataRow";

const AllMeals = () => {
    const axiosCommon = useAxiosCommon();

    const { data: meals, isLoading, refetch } = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const { data } = await axiosCommon.get("/meals")
            return data
        }
    })

    if (isLoading) return <LoadingSpinner />


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Distributor</th>
                            <th>Reviews</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            meals?.map(meal => <AllMealsDataRow meal={meal} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllMeals