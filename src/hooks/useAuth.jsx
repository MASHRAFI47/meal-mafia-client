import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider/AuthProvider"

const useAuth = () => {
    const { user } = useContext(AuthContext);
    return user;
}

export default useAuth