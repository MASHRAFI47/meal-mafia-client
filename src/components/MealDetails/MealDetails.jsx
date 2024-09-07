import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import useAxiosCommon from "../../hooks/useAxiosCommon";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const MealDetails = ({ id }) => {
    const axiosCommon = useAxiosCommon();
    const id = useParams();

    const { data: meal, isLoading } = useQuery({
        queryKey: ['meal', user?.email],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/meal/${id}`)
            return data
        }
    })

    if(isLoading) return <LoadingSpinner />

    return (
        <div>MealDetails</div>
    )
}

export default MealDetails