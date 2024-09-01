import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";



const AllMealsRow = ({ meal }) => {
    console.log(meal)
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
                <button className="btn btn-success text-white p-2 btn-md"><FaRegEdit size={20} /> </button>
                <button className="btn btn-error text-white p-2 btn-md"><FaRegTrashCan size={20} /> </button>
                <button className="btn btn-md btn-primary">View</button>
            </th>
        </tr>
    )
}

export default AllMealsRow