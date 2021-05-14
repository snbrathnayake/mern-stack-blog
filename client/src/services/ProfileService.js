import axios from "axios";


export const getProfileInfo = (data) => {
    const store = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : '';
    try {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/users/profile/${data.payload}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${store.token}`
            }
        })
    } catch (error) {
        console.log("[ERROR] : getProfileInfo()")
    }
}
