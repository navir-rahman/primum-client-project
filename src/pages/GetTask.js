import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetTask = () => {
    const [tasks, settask] = useState([]);
    useEffect(() => {
        const url = `https://primum-project.herokuapp.com/task`;
        // GET request for remote image in node.js
        axios({
            method: 'get',
            url: url,
            responseType: 'stream'
        })
            .then(function (res) {
                settask(res.data);
            });
    }, []);

    const handleDelete = (id) => {
        const url = `https://primum-project.herokuapp.com/task/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = tasks.filter(t => t._id !== id);
                settask(remaining);
            })
    }

    const handlestrick=(id)=>{
        document.getElementById(id).style.textDecoration = "line-through";
    }
    return (
        <div>
            {
                tasks.map(t => <div key={t._id} className='d-flex justify-content-between'>
                    <div className='w-50 m-5'>
                        <h4 className='' id={t._id}>{t.name}</h4>
                    </div>
                    <div className='m-5'>
                        <p>{t.desc}</p>
                    </div>
                    <button className='m-5 btn btn-info' onClick={()=>handlestrick(t._id)}>complete</button>
                    <button className='m-5 btn btn-danger' onClick={() => handleDelete(t._id)}>delete</button> </div>)
            }
        </div>
    );
};

export default GetTask;