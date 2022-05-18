import axios from 'axios';

import React, { useRef } from 'react';

const AddTask = () => {
    const name = useRef('')
    const description = useRef('')
    const handlesend = (e) => {
        e.preventDefault();
        const tasename = name.current.value;
        const tasedescription = description.current.value;

        const data = { name: tasename, desc: tasedescription }

        const url = `https://primum-project.herokuapp.com/task`;
        axios({
            method: 'post',
            url: url,
            data: data
        })

            .then(data => {
                console.log(data.statusText)
                if (data.statusText === 'OK') {
                    e.target.reset();
                }
            })


    }
    return (
        <div>
                        <h2 className='text-info'>Add task</h2>
            <form onSubmit={handlesend} className='d-flex'>
                <input ref={name} type="text" className='' placeholder='Task name' name="name" id=" " />
                <textarea ref={description} name="description" className='mx-4' id="" placeholder='Description' cols="30" rows="2"></textarea>
                <button type='submit' className='btn btn-info'> submit</button>
            </form>

            
        </div>
    );
};

export default AddTask;