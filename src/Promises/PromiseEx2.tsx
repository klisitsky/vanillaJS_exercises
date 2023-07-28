import React from 'react';

const PromiseEx2 = () => {

    const resolvedPromise = Promise.resolve(100)
    resolvedPromise
        .then(data => console.log(data))
        .catch(error => console.warn(error))

    const rejectedPromise = Promise.reject('Some error')
    rejectedPromise
        .then(data => console.log(data))
        .catch(error => console.warn(error))

    const usersAPI = {
        getUsers() {
            return Promise.resolve([{name: 'Who'}, {name: 'Me'}])
        },
        login(login: any, password: any) {
            if (login === 89992328563 && password === 123) {
                return Promise.resolve({id: 1, name: 'Petr', status: 'Yo'})
            } else {
                return Promise.reject('Incorrect login or password')
            }
        }
    }

    usersAPI.getUsers()
        .then(users => console.log(users))

    usersAPI.login(89992328563, 123)
        .then(data => console.log(data))

    usersAPI.login(1, 1)
        .catch(error => console.log(error))

    return (
        <div>

        </div>
    );
};

export default PromiseEx2;