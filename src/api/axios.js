import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "aa61511092a2ca7e74c044b55ce3affa",
        language: "ko-KR"
    }
})

export default instance;
