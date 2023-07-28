import React from 'react';
import axios from "axios";

const PromiseEx3 = () => {

    // const getTodo = (id:number) => {
    //     return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //         .then(resp => resp.data)
    // }
    //
    // getTodo(1).then(data => console.log(data))
    // getTodo(2).then(data => console.log(data))

    axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
        .then(resp => resp.data)
        .then(data => {
            console.log(data)
            return 2
        })
        .then(id => {
            return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
                .then(resp => resp.data)
        })
        .then(data => {
            console.log(data)
            return 3
        })
        .then(id => {
            return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
                .then(resp => resp.data)
        })
        .then(data => {
            console.log(data)
            return 4
        })

    return (
        <div>

        </div>
    );
};

export default PromiseEx3;