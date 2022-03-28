import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

import "./Update.css"
const Update = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const { abc } = useParams()
    const [update, setUpdate] = useState({});
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:8080/data/${abc}`);
            const record = await res.json();
            setUpdate(record)
        }
        fetchData();
    }, [])
    const { difficulty, cost, definitions, durations, img, title } = update;


    const history = useHistory()
    const location = useLocation()

    let { from } = location.state || { from: { pathname: "/admin" } };
    const goBack = () => {
        history.replace(from);
    }
    const onSubmit = (data) => {
        setUpdate(data)
        const url = `http://localhost:8080/data/${abc}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update),
        })
            .then(response => response.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Updated')
                    setUpdate({})
                    reset()
                    goBack()
                }
            })
    }

    console.log("difficulty", difficulty, cost, definitions, durations, img, title);

    return (
        <div className="UpdatePage">
            <p>this is update page !!</p>
            <p>{abc}</p>
            <div className="mt-5 mb-5 ">
                <form className="p-5 mb-5 rounded w-75 m-auto admin-form-adds admin-form-add d-flex flex-column justify-content-center align-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={img}    {...register("img", { required: true })} autoComplete="off" />
                    {errors.img && <small className="text-end">This field is required</small>}

                    <input placeholder="Title" {...register("title", { required: true })} />
                    {errors.title && <small className="text-end">This field is required</small>}

                    <input placeholder="Total Cost" {...register("cost", { required: true })} />
                    {errors.cost && <small className="text-end">This field is required</small>}

                    <input placeholder="Durations" {...register("durations", { required: true })} />
                    {errors.durations && <small className="text-end">This field is required</small>}

                    <textarea placeholder="definitions"  {...register("definitions", { required: true })} rows="6" />
                    {errors.definitions && <small className="text-end">This field is required</small>}

                    <input placeholder="difficulty-label" {...register("difficulty_label", { required: true })} />
                    {errors.difficulty_label && <small className="text-end">This field is required</small>}

                    <input type="submit" value="Upload NEW one" className="fs-5 p-3 rounded fw-bold" />
                </form>
            </div>
        </div>
    );
};

export default Update;