import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
//images
import googleLogo from "../../assets/images/googleLogo.png"
//icons
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
    const { signInUser } = useAuth();
    const [showPass, setShowPass] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then((result) => {
                toast.success("Sign In Successful");
                navigate("/");
                const user = { email }
                axios.post(`${import.meta.env.VITE_api_url}/jwt`, user, {
                    withCredentials: true
                })
                    .then(res => console.log(res.data))
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Invalid email or password")
            })
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 border shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Sign In</h1>
                        <p className="text-neutral-500">Sign in to access your account</p>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPass ? "text" : "password"} placeholder="password" autoComplete="on" className="input input-bordered" {...register("password", { required: true })} />
                        <span className="mt-0 mr-0 mb-0 ml-auto relative right-4 bottom-8" onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? <FaEye /> : <FaEyeSlash />
                            }
                        </span>
                        {errors.password && <span className="text-red-600">This field is required</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-orange-600 text-white hover:bg-orange-500">Login</button>
                    </div>
                </form>

                <div className="form-control mx-8 mb-6">
                    <button className="btn flex items-center"> <img src={googleLogo} className="w-4" alt="" /> Login with Google</button>
                </div>

                <p className="text-center mb-6">New User? <Link to={'/register'} className="hover:text-orange-400 transition duration-300"><span className="font-semibold">Register now</span></Link></p>
            </div>
        </div>
    )
}

export default Login