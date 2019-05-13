import axios from 'axios'
import { history } from 'react-router'
import { BASE_API } from '../constants'
import { logOut } from '../utils';
const call = axios.create({
    baseURL: BASE_API,
    headers: {
        // 'X- RapidAPI - Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
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