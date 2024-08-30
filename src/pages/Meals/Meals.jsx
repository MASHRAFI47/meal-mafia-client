import queryString from 'query-string';
import { useNavigate, useSearchParams } from "react-router-dom"
import useRole from '../../hooks/useRole';
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Meals = () => {
    const axiosCommon = useAxiosCommon();
    const [role] = useRole();
    console.log(role)
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();


    const { data: meals, isLoading } = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const { data } = await axiosCommon.get("/meals")
            return data
        }
    })

    if(isLoading) return <LoadingSpinner />

    console.log(meals)


    const handleClick = () => {
        let currentQuery = { category: "hi" }

        console.log(currentQuery)

        const url = queryString.stringifyUrl({
            url: '/meals',
            query: currentQuery
        })

        navigate(url);
    }
    return (
        <div onClick={handleClick}>
            <div>hi</div>
        </div>
    )
}

export default Meals