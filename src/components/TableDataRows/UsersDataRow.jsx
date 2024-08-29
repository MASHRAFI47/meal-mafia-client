import { useMutation } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const UsersDataRow = ({ user, refetch }) => {

    const axiosCommon = useAxiosCommon();

    const { mutateAsync } = useMutation({
        mutationFn: async (userId) => {
            const { data } = await axiosCommon.patch(`/user/${userId}`, { role: "admin" });
            return data
        },
        onSuccess: (data) => {
            console.log(data);
            toast.success("User is now an admin");
            refetch();
        }
    })

    const handleMakeAdmin = (userId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Done!",
                    text: "User is now an admin.",
                    icon: "success"
                });
                mutateAsync(userId)
            }
        });
    }

    return (
        <tr>
            <th>1</th>
            <td>{user?.fullName}</td>
            <td>{user?.email}</td>
            <td>{user?.role}</td>
            <td>{user?.role === 'admin' ? "Already an admin" : <button onClick={() => handleMakeAdmin(user?._id)} className='bg-green-500 p-2 rounded-xl font-semibold text-white'>Make Admin</button>}</td>
        </tr>
    )
}

UsersDataRow.propTypes = {
    user: PropTypes.object,
    refetch: PropTypes.func
}

export default UsersDataRow