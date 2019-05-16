import axios from 'axios'
import { history } from 'react-router'
import { BASE_API } from '../constants'
import { logOut } from '../utils';
let listUser = [
    {
        id: 1,
        name: "Gao",
        age: 18,
        sex: "Nam"
    },
    {
        id: 2,
        name: "Red",
        age: 18,
        sex: "Nam"
    },
    {
        id: 3,
        name: "White",
        age: 14,
        sex: "Nữ"
    },
    {
        id: 4,
        name: "Blue",
        age: 10,
        sex: "Nam"
    }
]
const call = axios.create({
    baseURL: BASE_API,
    headers: {
        'X-RapidAPI-Key': 'f069c150f9msh722f43aba9c55c5p120c4fjsn8740e23c1791',
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    }
})
export const callApi = (method, url, param, handleSuccess, handleError) => {
    call({
        method: method,
        url: BASE_API + url,
        data: param
    }).then(
        (res) => handleSuccess(res.data)
    ).catch(
        (err) => {
            if (err.response) {
                if (err.response.status === 404) {
                    logOut()
                }
            }
        }
    )
}

export const getUser = () => {
    setTimeout(() => {
        return [
            {
                id: 1,
                name: "Gao"
            },
            {
                id: 2,
                name: "Red"
            }
        ]
    }, 2000);
}
export const getListUsers = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(listUser)
        }, 1000)
    })
}
export const deleteUser = (userId) => {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(listUser.filter(i => i.id != userId)), 1000
        )
    })
}
export const addUser = (user) => {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(listUser.push(user)), 1000
        )
    })
}
export const editElement = (arr, obj) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === obj.id) {
            arr[i] = obj
        }
    }
    console.log(arr)
    return arr
}
export const editUser = (user) => {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(editElement(listUser, user)), 1000
        )
    })
}