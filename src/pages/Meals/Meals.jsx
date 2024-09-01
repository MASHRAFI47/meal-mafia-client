import { useNavigate, useSearchParams } from "react-router-dom"
import useRole from '../../hooks/useRole';
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import MealCards from "../../components/Cards/MealCards/MealCards";

const Meals = () => {
    const axiosCommon = useAxiosCommon();
    const navigate = useNavigate();


    const { data: meals, isLoading } = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const { data } = await axiosCommon.get("/meals")
            return data
        }
    })

    if (isLoading) return <LoadingSpinner />


    return (
        <div className="py-10 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    meals?.map(meal => <MealCards meal={meal} />)
                }
            </div>
        </div>
    )
}

export default Meals