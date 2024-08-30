import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useAxiosCommon from "./useAxiosCommon";


const useRole = () => {
    const axiosCommon = useAxiosCommon();
    const { user, loading } = useAuth();

    const { data: role, isLoading } = useQuery({
        queryKey: ['userRole'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            await axiosCommon.get(`/user/${user?.email}`)
        }
    })

    return [role, isLoading]
}

export default useRole