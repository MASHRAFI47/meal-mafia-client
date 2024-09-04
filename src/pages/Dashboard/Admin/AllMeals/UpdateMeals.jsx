import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";

const UpdateMeals = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const { mutateAsync } = useMutation({
        mutationFn: async (mealData) => {
            const { data } = await axiosSecure.post("/meals", mealData);
            return data;
        },
        onSuccess: (data) => {
            console.log(data);
            toast.success("Meal Data Has Been Inserted");
        }
    })

    const onSubmit = async (data) => {
        const { title, category, image, ingredients, description, price, rating, likes, reviews, adminEmail, adminName } = data;
        const displayImage = image[0];

        const picture = await imageUpload(displayImage);

        mutateAsync({ title, category, image: picture, ingredients, description, price: Number(price), rating: Number(rating), likes: Number(likes), reviews, adminEmail, adminName });

        reset();
    }


    return (
        <div>
            <div className="flex justify-center items-center my-10">
                <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl border">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-2xl text-center font-semibold">Add Meal</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title*</span>
                            </label>
                            <input type="text" placeholder="Meal Name" className="input input-bordered" {...register("title", { required: true })} />
                            {errors.title && <span className="text-red-600">This field is required</span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category*</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs" {...register("category", { required: true })}>
                                    {/* <option disabled selected>Select Category</option> */}
                                    <option>Breakfast</option>
                                    <option>Lunch</option>
                                    <option>Dinner</option>
                                </select>
                                {errors.category && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image*</span>
                                </label>

                                <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true })} />
                                {errors.image && <span className="text-red-600">This field is required</span>}
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ingredients*</span>
                            </label>
                            <input type="text" placeholder="2 cup sugar" className="input input-bordered" {...register("ingredients", { required: true })} />
                            {errors.ingredients && <span className="text-red-600">This field is required</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description*</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="description..." {...register("description", { required: true })}></textarea>
                            {errors.description && <span className="text-red-600">This field is required</span>}
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className="form-control">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price*</span>
                                    </label>
                                    <input type="number" placeholder="price" className="input input-bordered" {...register("price", { required: true })} />
                                    {errors.price && <span className='text-red-600'>This field is required</span>}
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating*</span>
                                </label>
                                <select className="select select-bordered w-full" {...register("rating", { required: true })}>
                                    <option disabled selected>5</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                {errors.rating && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>


                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className="form-control">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Likes*</span>
                                    </label>
                                    <input type="number" placeholder="likes" className="input input-bordered" {...register("likes", { required: true })} />
                                    {errors.likes && <span className='text-red-600'>This field is required</span>}
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Reviews*</span>
                                </label>
                                <input type="text" placeholder="reviews" className="input input-bordered" {...register("reviews", { required: true })} />
                                {errors.reviews && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>


                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className="form-control">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Admin Name*</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" defaultValue={user?.displayName} readOnly {...register("adminName", { required: true })} />
                                    {errors.adminName && <span className='text-red-600'>This field is required</span>}
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Admin Email*</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" defaultValue={user?.email} readOnly {...register("adminEmail", { required: true })} />
                                {errors.adminEmail && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-success">Add Meal</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateMeals