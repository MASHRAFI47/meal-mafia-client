import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
//images
import googleLogo from "../../assets/images/googleLogo.png"
//icons
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";


const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center my-10">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 border shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold">Sign Up</h1>
                            <p className="text-neutral-500">Welcome to Meal Mafia</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("fullName", { required: true })} />
                            {errors.fullName && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true })} />
                            {errors.image && <span className="text-red-600">This field is required</span>}
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
                            <input type={showPass ? "text" : "password"} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
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
                            <button className="btn bg-orange-600 text-white hover:bg-orange-500">Register</button>
                        </div>
                    </form>

                    <div className="form-control mx-8 mb-6">
                        <button className="btn flex items-center"> <img src={googleLogo} className="w-4" alt="" /> Continue with Google</button>
                    </div>

                    <p className="text-center mb-6">Already a user? <Link to={'/login'} className="hover:text-orange-400 transition duration-300"><span className="font-semibold">Login now</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register