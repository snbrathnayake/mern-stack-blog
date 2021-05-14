import axios from "axios";

export const createPost = (data) => {
    const store = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : '';
    const { category, decription, image_url, title, userId } = data.payload;
    try {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/posts/create`, { category, decription, image_url, title, userId },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${store.token}`
                }
            })
    } catch (error) {
        console.log("[ERROR] : createPost()")
    }

}

export const fetchPost = () => {
    try {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/posts`)
    } catch (error) {
        console.log("[ERROR] : fetchPost()")
    }
}


export const getPostById = (data) => {
    try {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/posts/find/${data.payload}`)
    } catch (error) {
        console.log("[ERROR] : getPostById()")
    }
}