import PropTypes from 'prop-types';
import { useMutation } from "@tanstack/react-query";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';



const AllMealsDataRow = ({ meal, refetch }) => {
    const axiosSecure = useAxiosSecure();

    const { mutateAsync } = useMutation({
        mutationFn: async (mealId) => {
            const { data } = await axiosSecure.delete(`/meal/${mealId}`);
            return data;
        },
        onSuccess: (data) => {
            console.log(data);
            toast.success("Meal data deleted successfully");
            refetch()
        }
    })

    const handleDeleteMeal = (mealId) => {
        mutateAsync(mealId)
    }

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={meal?.image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{meal?.title}</div>
                        <div className="text-sm opacity-50">{meal?.likes} likes</div>
                    </div>
                </div>
            </td>
            <td>
                {meal?.adminName}
            </td>
            <td className="w-auto md:w-96">
                {meal?.reviews}
            </td>
            <th className="flex gap-2 justify-center">
                <Link to={`../update-meals/${meal?._id}`} className="btn btn-success text-white p-2 btn-md"><FaRegEdit size={20} /> </Link>
                <button className="btn btn-error text-white p-2 btn-md" onClick={() => handleDeleteMeal(meal?._id)}><FaRegTrashCan size={20} /> </button>
                <button className="btn btn-md btn-primary">View</button>
            </th>
        </tr>
    )
}

AllMealsDataRow.propTypes = {
    meal: PropTypes.object,
    refetch: PropTypes.func
}

export default AllMealsDataRow