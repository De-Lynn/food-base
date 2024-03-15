import axios from "axios";

const REACT_APP_API_URL='https://api.edamam.com/api/recipes/v2'


export const $host = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL: REACT_APP_API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true'
    }
})