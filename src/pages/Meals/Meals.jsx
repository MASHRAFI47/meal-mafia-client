import queryString from 'query-string';
import { useNavigate, useSearchParams } from "react-router-dom"

const Meals = () => {
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();

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