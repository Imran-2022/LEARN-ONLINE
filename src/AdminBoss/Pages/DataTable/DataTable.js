import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./DataTable.css"
const DataTable = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:8080/data");
            const record = await res.json();
            setData(record)
        }
        fetchData();
    }, [])
    // console.log(data)


    const handleDelete = (id) => {
        // const proced= window.confirm("are you sure, you want to delete ?");

        if (true) {
            fetch(`http://localhost:8080/data/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())// or res.text()) 
                .then(res => {
                    if (res.deletedCount === 1) {
                        alert(`User ${id} deleted successfully`)
                        const newUser = data.filter(ab => ab._id != id);
                        setData(newUser)
                    }
                })
        }
    }


    return (
        <div>
            <div>
            <p className="pt-3">the number of <span className="text-danger">TABLE DATA</span> : {data.length}</p>
            <table>
                <thead>
                    <tr>
                        <th>#no</th>
                        <th className="hideth">id</th>
                        <th>name</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                </thead>

                {
                    data.map((data, i) => {
                        const { _id, title ,img} = data
                        // console.log(img)
                        return (
                            <tbody key={_id}>
                                <tr>
                                    <td>{i + 1}</td>
                                    {/* <td className="hideth">{_id}</td> */}
                                    <td>
                                        <img width="200px" height="120px" src={ img} alt="no images" />
                                    </td>
                                    <td>{title}</td>
                                    <td className="btnmanage"><Link to={`/admin/update/${_id}`}>update</Link></td>
                                    <td className="btnmanage" onClick={() => handleDelete(_id)}>delete</td>
                                </tr>
                            </tbody>
                        )
                    })
                    // }).reverse()
                }
            </table>
        </div>
        </div>
    );
};

export default DataTable;