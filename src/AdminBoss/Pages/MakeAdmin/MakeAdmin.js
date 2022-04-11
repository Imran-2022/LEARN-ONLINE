import React from 'react';
import "./MakeAdmin.css"
import { useForm } from "react-hook-form";
import axios from 'axios'

const MakeAdmin = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {

        axios.post('https://learn-onlinee.herokuapp.com/adminEmail', data)
            .then(res => {
                if (res.data) {
                    alert("new admin added !!!");
                    reset()
                }
            })
    }
    return (
        <div className="mt-5 mb-5 ">
            <p>this is just a cool webite  i build ✌</p>
            <form className="p-5 mb-5 rounded  w-75 m-auto admin-form-addd d-flex flex-column justify-content-center align-content-center" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="OUR NEW ADMIN Name"   {...register("name", { required: true })} autoComplete="off" />
                {errors.name && <small className="text-end">This field is required</small>}

                <input type="email" placeholder="OUR NEW ADMIN EMAIL"   {...register("email", { required: true })} autoComplete="off" />
                {errors.email && <small className="text-end">This field is required</small>}

                <input type="submit" value="MAKE ADMIN" className="fs-5 p-3 rounded fw-bold" />
            </form>
        </div>
    );
};

export default MakeAdmin;