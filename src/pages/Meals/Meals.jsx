import { useNavigate, useSearchParams } from "react-router-dom"
import useRole from '../../hooks/useRole';
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import MealCards from "../../components/Cards/MealCards/MealCards";
import { useState } from "react";

const Meals = () => {
    const [sort, setSort] = useState("")
    console.log(sort)
    const axiosCommon = useAxiosCommon();
    const navigate = useNavigate();


    const { data: meals, isLoading } = useQuery({
        queryKey: ['meals', sort],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/meals?sort=${sort}`)
            return data
        }
    })

    if (isLoading) return <LoadingSpinner />


    return (
        <div className="py-10 container mx-auto">

            {/* sort */}
            <select className="select select-bordered w-full max-w-xs" onChange={e => setSort(e.target.value)}>
                <option disabled selected>Sort by price</option>
                <option value={"asc"}>Ascending</option>
                <option value={"dsc"}>Descending</option>
            </select>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    meals?.map(meal => <MealCards meal={meal} />)
                }
            </div>
        </div>
    )
}

export default Meals