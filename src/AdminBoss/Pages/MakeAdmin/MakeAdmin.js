import React from 'react';
import "./MakeAdmin.css"
import { useForm } from "react-hook-form";
const MakeAdmin = () => {

    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit =( data )=> {
    
        console.log(data);
    }
    return (
        <div className="mt-5 mb-5 ">
            <p>this is just a cool webite  i build ✌</p>
            <form className="p-5 mb-5 rounded  w-75 m-auto admin-form-addd d-flex flex-column justify-content-center align-content-center" onSubmit={handleSubmit(onSubmit)}>
                <input  placeholder="OUR NEW ADMIN EMAIL"   {...register("img",{required: true})} autoComplete="off"/>
                {errors.img && <small className="text-end">This field is required</small>}
                
                <input type="submit" value="MAKE ADMIN" className="fs-4 fw-bold" />
            </form>
        </div>
    );
};

export default MakeAdmin;