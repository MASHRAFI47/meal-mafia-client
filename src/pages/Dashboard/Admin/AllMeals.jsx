import { useQuery } from "@tanstack/react-query"
import useAxiosCommon from "../../../hooks/useAxiosCommon"

const AllMeals = () => {
    const axiosCommon = useAxiosCommon();
    
    const {data: meals, isLoading} = useQuery({
        queryKey: ['meals'],
        queryFn: async() => {
            const {data} = await axiosCommon.get("/meals")
            return data
        }
    })


    return (
        <div>AllMeals</div>
    )
}

export default AllMeals