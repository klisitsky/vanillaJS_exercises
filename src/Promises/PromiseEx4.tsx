import React from 'react';

const PromiseEx4 = () => {

    const repo = {
        save(data:any) {
            try {
                localStorage.setItem('some-key', JSON.stringify(data))
            } catch (error) {
                return false
            }
            return true
        },
        saveAsync(data:any) {
            return new Promise((resolve, reject) => {
                try {
                    localStorage.setItem('some-key', JSON.stringify(data))
                    resolve(true)
                } catch (error) {
                    reject(false)
                }
            })
        },
        read(key: string) {
            if (localStorage.getItem(key)) {
                return localStorage.getItem(key)
            } else {
                return 'empty'
            }
        },
        readAsync(key: string) {
            return new Promise((resolve, reject) => {
                if (localStorage.getItem(key)) {
                    resolve(localStorage.getItem(key))
                } else {
                    reject('empty')
                }
            })
        }
    }

        const run = async () => {
            await repo.saveAsync({name: 'Kostya'})
            console.log('SavedAsync')

            const res = await repo.readAsync('some-key')
            console.log(res + ' : async')
        }
        run()

    repo.save({name: 'Kostya'})
    console.log('Saved')
    const res = repo.read('some-key')
    console.log(res)


    return (
        <div>

        </div>
    );
};

export default PromiseEx4;