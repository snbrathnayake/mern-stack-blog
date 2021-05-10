import axios from "axios";


export const getUserInfo = (data) => {

    const { email, password } = data.payload;
    try {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signin`, { email, password })
    } catch (error) {
        console.log("[ERROR] : getUserInfo()")
    }
}

export const createUserInfo = (data) => {
    const { name , email, password } = data.payload;
    try {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, { name, email, password })
    } catch (error) {
        console.log("[ERROR] : createUserInfo()")
    }
}

export const signout = () => {

    try {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/auth/signout`)
    } catch (error) {
        console.log("[ERROR] : signout()")
    }
}