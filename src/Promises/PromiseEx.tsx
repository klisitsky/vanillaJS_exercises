import React from 'react';
import axios from "axios";

const PromiseEx = () => {

    const promise1 = axios.get('https://jsonplaceholder.typicode.com/todos/g')
    const promise2 = axios.get('https://jsonplaceholder.typicode.com/todos/2')


    const finalPromise = Promise.all([promise1, promise2])
        .then((result) => {
            const titlePromise1 = result[0].data.title
            const titlePromise2 = result[1].data.title
            console.log(`${titlePromise1} / ${titlePromise2}`)
        })
        .catch(() => console.log('initialization failed. Try later'))

    const finalPromise2 = Promise.allSettled([promise1, promise2])
        .then((result) => {
            const titlePromise1 = result[0].status === 'fulfilled'
                ? result[0].value.data.title
                : 'empty'
            const titlePromise2 = result[1].status === 'fulfilled'
                ? result[1].value.data.title
                : 'empty'
            console.log(`${titlePromise1} / ${titlePromise2}`)
        })
    console.log(finalPromise2)
    return (
        <div>
            </div>
    );
};

export default PromiseEx;




